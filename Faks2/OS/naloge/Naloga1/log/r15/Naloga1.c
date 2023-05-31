#include <stdio.h>
#include <unistd.h>
#include <stdbool.h>
#include <string.h>
#include <stdlib.h>
#include <termios.h>
#include <ctype.h>
#include <libgen.h>
#include <dirent.h>
#include <sys/stat.h>
#include <sys/utsname.h>
#include <sys/wait.h>
#include <fcntl.h>
#include <errno.h>

#define BUFFER_SIZE 1024
#define TOKENS_SIZE 128
#define NUM_TOKENS 20
#define NUM_CASES 10
#define NAME_SIZE 10
#define DEFAULT_SHELL_NAME "mysh\0"
#define EXIT_BUFFER_OVERLOAD 3

int printMode = 0;
char inBuffer[BUFFER_SIZE];
char outBuffer[BUFFER_SIZE];
char tokens[NUM_TOKENS][TOKENS_SIZE];
int numTokens = 0;
FILE *in;
FILE *out;
char shellName[NAME_SIZE] = DEFAULT_SHELL_NAME;
DIR *dir;
char path[4048];
int status = 0;

void printStart();
void readComm(char *buffer, FILE *fp);
void printComm(char *str, FILE *fp);
void printCommLine(char *str, FILE *fp);
int evalComm();
void handleInput(char buffer[BUFFER_SIZE]);

void cleanBuffer(char buffer[BUFFER_SIZE]);

int tokenise(char *input);

void clearScrn();

int main(int argc, char *argv[])
{
	if (isatty(fileno(stdin)) && isatty(fileno(stdout)))
	{
		printMode = 0;
		in = stdin;
		out = stdout;
	}
	else
	{
		printMode = 1;
		in = fopen(argv[1], "r");
		out = fopen(argv[2], "w");
	}

	cleanBuffer(inBuffer);
	bool active = true;

	while (active)
	{
		if (printMode == 0)
		{
			printStart();
		}

		readComm(inBuffer, in);
		if (tokenise(inBuffer) == EXIT_SUCCESS)
		{
			evalComm();
		}

		cleanBuffer(inBuffer);
	}

	if (printMode == 1)
	{
		fclose(in);
		fclose(out);
	}
}

void handleInput(char buffer[BUFFER_SIZE])
{
	int i = 0;
	char ch = getc(in);

	while (ch != '\n' && i < BUFFER_SIZE)
	{
		if (ch == 27)
		{			  // Arrow keys
			getc(in); // Skip the [
			ch = getc(in);
		}
		else if (ch == 12)
		{ // CTRL+L
			system("clear");
		}
		else if (ch == 3)
		{ // CTRL+C
			exit(0);
		}
		else if (isprint(ch))
		{
			buffer[i++] = ch;
		}

		ch = getc(in);
	}

	buffer[i] = '\0';
}

void printStart()
{
	printf("\033[31m%s>\033[0m ", shellName);
}

void readComm(char buffer[BUFFER_SIZE], FILE *fp)
{
	handleInput(buffer);
	// fgets(buffer, BUFFER_SIZE, fp);
	fflush(stdin);
}

int tokenise(char *input)
{
	numTokens = 0;
	int i = 0;
	int tokenIndex = 0;
	bool quotesMode = false;
	int strLen = strlen(input);

	for (; i < strLen; i++)
	{
		char curr = input[i];

		if (numTokens >= TOKENS_SIZE || tokenIndex >= NUM_TOKENS)
			return EXIT_FAILURE;

		if (curr == '\0')
		{
			if (tokenIndex > 0)
			{
				tokens[numTokens][tokenIndex] = '\0';
				numTokens++;
			}
			break;
		}

		if (tokenIndex == 0)
		{
			if (curr == '#')
				return EXIT_SUCCESS;
			else if (curr == '"')
			{
				quotesMode = true;
				tokens[numTokens][tokenIndex] = curr;
				tokenIndex++;
				continue;
			}
		}

		if (quotesMode)
		{
			tokens[numTokens][tokenIndex] = curr;
			tokenIndex++;

			if (curr == '"')
			{
				quotesMode = false;
				tokens[numTokens][tokenIndex] = '\0';
				numTokens++;
				tokenIndex = 0;
			}
		}
		else
		{
			if (curr == ' ')
			{
				tokens[numTokens][tokenIndex] = '\0';
				numTokens++;
				tokenIndex = 0;
			}
			else
			{
				tokens[numTokens][tokenIndex] = curr;
				tokenIndex++;
			}
		}
	}

	if (tokenIndex > 0)
	{
		tokens[numTokens][tokenIndex] = '\0';
		numTokens++;
	}

	return (numTokens == 0) ? EXIT_FAILURE : EXIT_SUCCESS;
}

int evalComm()
{
	if (numTokens == 0)
	{
		return EXIT_SUCCESS;
	}
	/*
	help - izpiše spisek podprtih ukazov. Izpis oblikujte po vaši želji - se ne preverja avtomatsko.
	status - izpiše izhodni status zadnjega izvedenega ukaza.
	exit status - konča lupino s podanim izhodnim statusom.
	name ime - nastavi ime lupine. Če imena ne podamo, se izpiše ime lupine (privzeto ime je mysh). Podano ime lahko vsebuje do 8 znakov, v primeru daljšega imena, se vrne izhodni status 1.
	print args... - izpiše podane argumente na standardni izhod (brez končnega skoka v novo vrstico).
	echo args... - kot print, le da izpiše še skok v novo vrstico.
	pid - izpiše pid procesa (kot $BASHPID).
	ppid - izpiše pid starša.
	*/

	else if (!strcmp(tokens[0], "help"))
	{
		printCommLine("Help page:\n", out);
		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "status"))
	{
		sprintf(outBuffer, "%d", status);
		printCommLine(outBuffer, out);
		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "exit"))
	{
		int convert = atoi(tokens[1]);
		exit(convert);

		return EXIT_FAILURE;
	}
	else if (!strcmp(tokens[0], "name"))
	{
		if (numTokens > 1)
		{
			if (strlen(tokens[1]) > 8)
			{
				status = 1;
			}
			else
				strcpy(shellName, tokens[1]);
		}
		else
			printCommLine(shellName, out);

		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "print"))
	{
		for (int i = 1; i < numTokens; i++)
		{
			if (tokens[i][0] == '"')
			{
				int length = 1;
				while (tokens[i][length] != '\0')
					length++;

				sprintf(outBuffer, "%.*s", length - 2, tokens[i] + 1);
				printComm(outBuffer, out);
			}
			else
				printComm(tokens[i], out);
		}
		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "echo"))
	{
		for (int i = 1; i < numTokens; i++)
		{
			if (tokens[i][0] == '"')
			{
				int length = 1;
				while (tokens[i][length] != '\0')
					length++;

				sprintf(outBuffer, "%.*s", length - 2, tokens[i] + 1);
				printComm(outBuffer, out);
			}
			else
				printComm(tokens[i], out);
		}
		printComm("\n", out);
		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "pid"))
	{
		int pid = getpid();
		sprintf(outBuffer, "%d\n", pid);
		printComm(outBuffer, out);
		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "ppid"))
	{
		int ppid = getppid();
		sprintf(outBuffer, "%d\n", ppid);
		printComm(outBuffer, out);
		return EXIT_SUCCESS;
	}

	/*
	dirchange imenik - zamenjava trenutnega delovnega imenika. Če imenika ne podamo, skoči na /.
	dirwhere - izpis trenutnega delovnega imenika.
	dirbase - izpis osnove (basename) trenutnega delovnega imenika (uporabi funkcijo basename()).
	dirmake imenik - ustvarjanje podanega imenika.
	dirremove imenik - brisanje podanega imenika.
	dirlist imenik - preprost izpis vsebine imenika. Izpišejo se le imena datotek, ločena z dvema presledkoma. Če imena ne podamo, se privzame trenutni delovni imenik.
	*/
	else if (!strcmp(tokens[0], "dirchange"))
	{
		int err;

		if (numTokens == 1)
			err = chdir("/");
		else
			err = chdir(tokens[1]);

		if (err < 0)
		{
			perror("chdir() error");
			return EXIT_FAILURE;
		}

		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "dirwhere"))
	{
		if (getcwd(path, sizeof(path)))
			printComm(path, out);
		else
		{
			perror("getcwd() error");
			return EXIT_FAILURE;
		}
		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "dirbase"))
	{
		if (getcwd(path, sizeof(path)))
			printComm(basename(path), out);
		else
		{
			perror("getcwd() error");
			return EXIT_FAILURE;
		}
		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "dirmake"))
	{
		if (numTokens < 2)
		{
			return EXIT_FAILURE;
		}

		if (mkdir(tokens[1], 0777) < 0)
		{
			perror("mkdir() error");
			return EXIT_FAILURE;
		}

		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "dirremove"))
	{
		if (numTokens < 2)
		{
			return EXIT_FAILURE;
		}

		if (rmdir(tokens[1]) < 0)
		{
			perror("rmdir() error");
			return EXIT_FAILURE;
		}

		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "dirlist"))
	{
		// OPEN
		dir = opendir(".");
		// OPEN

		if (dir == NULL)
		{
			perror("opendir: error");
			return EXIT_FAILURE;
		}
		else
		{
			struct dirent *entry;
			while ((entry = readdir(dir)) != NULL)
			{
				printComm(entry->d_name, out);
				printComm("\n", out);
			}
		}

		// CLOSE
		closedir(dir);
		// CLOSE

		return EXIT_SUCCESS;
	}
	/*
	linkhard cilj ime - ustvarjanje trde povezave na cilj.
	linksoft cilj ime - ustvarjanje simbolične povezave na cilj.
	linkread ime - izpis cilja podane simbolične povezave.
	linklist ime - izpiše vse trde povezave (ločene z dvema presledkoma) na datoteko z imenom ime - pri tem pregleda trenutni delovni imenik.
	unlink ime - brisanje datoteke.
	rename izvor ponor - preimenovanje datoteke.
	remove ime - odstranjevanje datoteke.
	cpcat izvor ponor - ukaza cp in cat združena (glej izziv cpcat.c).
	*/
	else if (!strcmp(tokens[0], "linkhard"))
	{
		if (link(tokens[1], tokens[2]) != 0)
		{
			perror("link() error");
			return EXIT_FAILURE;
		}
		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "linksoft"))
	{
		if (symlink(tokens[1], tokens[2]) != 0)
		{
			perror("symlink() error");
			return EXIT_FAILURE;
		}
		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "linkread"))
	{
		ssize_t bytesRead = readlink(tokens[1], path, strlen(path) - 1);

		if (bytesRead == -1)
		{
			perror("readlink() error");
			return EXIT_FAILURE;
		}

		path[bytesRead] = '\0';
		printComm(path, out);
		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "unlink"))
	{
		if (unlink(tokens[1]) < 0)
		{
			perror("unlink() error");
			return EXIT_FAILURE;
		}

		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "rename"))
	{
		if (rename(tokens[1], tokens[2]) < 0)
		{
			perror("rename() error");
			return EXIT_FAILURE;
		}

		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "cpcat"))
	{
	}

	/*
	sysinfo - izpiše osnovne informacije v sistemu, ki jih pridobi preko sistemskega klica uname().
	shellinfo - izpiše osnovne informacije o procesu lupine, kot so uid, euid, gid, egid.
	*/
	else if (!strcmp(tokens[0], "sysinfo"))
	{
		struct utsname sysInfo;
		if (uname(&sysInfo) == -1)
		{
			perror("uname() error");
			return EXIT_FAILURE;
		}

		if (sprintf(outBuffer, "Sysname: %s\nNodename: %s\nRelease: %s\nVersion: %s\nMachine: %s",
					sysInfo.sysname, sysInfo.nodename, sysInfo.release, sysInfo.version, sysInfo.machine) < 0)
		{
			perror("sprintf()");
			return EXIT_FAILURE;
		}
		printCommLine(outBuffer, out);

		return EXIT_SUCCESS;
	}
	/*Sysname: Linux
Nodename: d7d3d8136a97
Release: 5.15.49-linuxkit
Version: #1 SMP PREEMPT Tue Sep 13 07:51:32 UTC 2022
Machine: aarch64
*/
	else if (!strcmp(tokens[0], "shellinfo"))
	{
		if (sprintf(outBuffer, "Uid: %d\nEUid: %d\nGid: %d\nEGid: %d", getuid(), geteuid(), getgid(), getegid()) < 0)
		{
			perror("sprintf()");
			return EXIT_FAILURE;
		}

		printCommLine(outBuffer, out);
		return EXIT_SUCCESS;
	}

	/*
	proc pot - nastavitev poti do procfs datotečnega sistema. Brez argumenta se izpiše nastavljeno vrednost (privzeta pot je /proc). Pred nastavitvijo poti pa ukaz tudi preveri, npr. z uporabo funkcije access(..., F_OK|R_OK) ali podana pot dejansko obstaja. Če ne obstaja, se pot ne nastavi in vrne izhodni status 1.
	pids - izpiše PIDe trenutnih procesov, ki jih pridobi iz procfs (glej tudi ukaz proc), vsak pid je izpisan v svoji vrstici
	pinfo - izpiše informacije o trenutnih procesih (PID, PPID, STANJE, IME), ki jih pridobi iz datoteke stat v procfs, za formatiranje izpisa uporabite naslednji format:
		printf("%5s %5s %6s %s\n", "PID", "PPID", "STANJE", "IME");
	waitone pid - počaka na otroka s podanim pidom. Če pida ne podamo, počaka na enega poljubnega otroka.
	waitall - počaka na vse otroke.
	*/
	else if (!strcmp(tokens[0], "proc"))
	{

		return EXIT_SUCCESS;
	}

	else if (!strcmp(tokens[0], "pids"))
	{

		return EXIT_SUCCESS;
	}

	else if (!strcmp(tokens[0], "pinfo"))
	{

		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "waitone"))
	{

		return EXIT_SUCCESS;
	}
	else if (!strcmp(tokens[0], "waitall"))
	{

		return EXIT_SUCCESS;
	}

	printComm(tokens[0], out);
	printComm(": Invalid command\n", out);
	return EXIT_FAILURE;
}

void printComm(char *str, FILE *fp)
{
	fputs(str, fp);
}

void printCommLine(char *str, FILE *fp)
{
	fputs(str, fp);
	fputs("\n", fp);
}

void cleanBuffer(char buffer[BUFFER_SIZE])
{
	buffer[0] = '\0';
}