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

// DEFINES
#define BUFFER_SIZE 1024
#define TOKENS_SIZE 128
#define NUM_TOKENS 50
#define NUM_CASES 10
#define NAME_SIZE 10
#define DEFAULT_SHELL_NAME "mysh\0"
#define DEFAULT_PROC_PATH "/proc\0"
#define PATH_SIZE 4048

// PROGRAM FUNCTIONS
//-----------------------------------------------------------
void printStart();
void readComm(char *buffer, FILE *fp);
int evalComm();
int tokenise(char *input);
//-----------------------------------------------------------

// COMMANDS
int help_n();
int status_n();
int name_n();
int print_n();
int echo_n();
int pid_n();
int ppid_n();
int dirchange_n();
int dirwhere_n();
int dirbase_n();
int dirmake_n();
int dirremove_n();
int dirlist_n();
int linkhard_n();
int linksoft_n();
int linkread_n();
int linklist_n();
int unlink_n();
int rename_n();
int sysinfo_n();
int shellinfo_n();
int remove_n();
int rename_n();
int proc_n();
int pids_n();
int pinfo_n();
int waitone_n();
int waitall_n();
int cpcat_n();

int externalcomm();

// OTHERS
int remove_directory(const char *path);
int copyData(int inputRtrn, int outputRtrn);

// PROGRAM VARIABLES
//-----------------------------------------------------------
int printMode = 0;
char inBuffer[BUFFER_SIZE];
char tokens[NUM_TOKENS][TOKENS_SIZE];
int numTokens = 0;
char shellName[NAME_SIZE] = DEFAULT_SHELL_NAME;
int in;
int out;
char path[PATH_SIZE];
char path1[PATH_SIZE / 2] = DEFAULT_PROC_PATH; // process path
char path2[PATH_SIZE];						   // pid pa
int status_save = 0;
//-----------------------------------------------------------

//
///
////
//////
////////
//////////
////////////
// MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN

int main(int argc, char *argv[])
{
	bool active = true;

	while (active)
	{
		if (isatty(STDIN_FILENO))
			printStart();

		fflush(stdout);
		fflush(stdin);

		if (fgets(inBuffer, BUFFER_SIZE, stdin) == NULL)
			break;

		fflush(stdout);
		fflush(stdin);

		if (tokenise(inBuffer) > 0)
		{
			// izvajanje v ozadju(zadnji token je &)
			fflush(stdin);
			fflush(stdin);

			if (!strcmp(tokens[numTokens - 1], "&"))
			{
				numTokens--;
				if (fork() == 0)
				{
					status_save = evalComm();
					fflush(stdout);
					exit(EXIT_SUCCESS);
				}
			}
			else
			{
				status_save = evalComm();
				fflush(stdout);
				fflush(stdin);
			}
		}
	}
	return EXIT_SUCCESS;
}

// MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN-MAIN
////////////
//////////
////////
//////
////
///
//

void printStart()
{
	printf("%s> ", shellName);
}

int evalComm()
{
	if (!strcmp(tokens[0], "name"))
		return name_n();
	if (!strcmp(tokens[0], "help"))
		return help_n();
	if (!strcmp(tokens[0], "status"))
		return status_n();
	if (!strcmp(tokens[0], "exit"))
	{
		int convert = atoi(tokens[1]);
		exit(convert);
		return EXIT_FAILURE;
	}
	if (!strcmp(tokens[0], "print"))
		return print_n();
	if (!strcmp(tokens[0], "echo"))
		return echo_n();
	if (!strcmp(tokens[0], "pid"))
		return pid_n();
	if (!strcmp(tokens[0], "ppid"))
		return ppid_n();
	if (!strcmp(tokens[0], "dirchange"))
		return dirchange_n();
	if (!strcmp(tokens[0], "dirwhere"))
		return dirwhere_n();
	if (!strcmp(tokens[0], "dirmake"))
		return dirmake_n();
	if (!strcmp(tokens[0], "dirremove"))
		return dirremove_n();
	if (!strcmp(tokens[0], "dirbase"))
		return dirbase_n();
	if (!strcmp(tokens[0], "dirlist"))
		return dirlist_n();
	if (!strcmp(tokens[0], "linkhard"))
		return linkhard_n();
	if (!strcmp(tokens[0], "linksoft"))
		return linksoft_n();
	if (!strcmp(tokens[0], "linkread"))
		return linkread_n();
	if (!strcmp(tokens[0], "linklist"))
		return linklist_n();
	if (!strcmp(tokens[0], "unlink"))
		return unlink_n();
	if (!strcmp(tokens[0], "rename"))
		return rename_n();
	if (!strcmp(tokens[0], "sysinfo"))
		return sysinfo_n();
	if (!strcmp(tokens[0], "shellinfo"))
		return shellinfo_n();
	if (!strcmp(tokens[0], "remove"))
		return remove_n();
	if (!strcmp(tokens[0], "rename"))
		return rename_n();
	if (!strcmp(tokens[0], "proc"))
		return proc_n();
	if (!strcmp(tokens[0], "pids"))
		return pids_n();
	if (!strcmp(tokens[0], "pinfo"))
		return pinfo_n();
	if (!strcmp(tokens[0], "waitone"))
		return waitone_n();
	if (!strcmp(tokens[0], "waitall"))
		return waitall_n();
	if (!strcmp(tokens[0], "cpcat"))
		return cpcat_n();

	return externalcomm();
}

int tokenise(char *input)
{
	int i = 0;
	int strLen = strlen(input);
	int currTokenPlace;

	numTokens = 0; // Declare and initialize numTokens variable

	while (i < strLen)
	{
		currTokenPlace = 0;

		while ((isspace((unsigned char)input[i]) || input[i] == '\n') && i < strLen)
			i++;

		// token je komentar
		if (input[i] == '#')
			return numTokens;

		// token je string
		else if (input[i] == '"')
		{
			i++;
			while (input[i] != '"' && input[i] != '\0' && input[i] != '\n' && i < strLen)
			{
				tokens[numTokens][currTokenPlace] = input[i];
				i++;
				currTokenPlace++;
			}
			if (input[i] == '"')
				i++;
		}
		// token je normaln token
		else
		{
			while (!isspace((unsigned char)input[i]) && input[i] != '\0' && input[i] != '\n' && i < strLen)
			{
				tokens[numTokens][currTokenPlace] = input[i];
				i++;
				currTokenPlace++;
			}
		}

		tokens[numTokens][currTokenPlace] = '\0';
		numTokens++;
	}

	numTokens--;

	return numTokens;
}

// HERE THE REAL SHIT STARTSSSSSSSSSSS, SALUTE
// ###################################################################################################################################################

// DELA, ne tikaj
int help_n()
{
	return printf("Help page:\n");
}

// DELA, ne tikaj
int status_n()
{
	return printf("%d\n", status_save);
}

// DELA, ne tikaj
int name_n()
{
	if (numTokens > 1)
	{
		if (strlen(tokens[1]) > 8)
			return EXIT_FAILURE;
		else
			strcpy(shellName, tokens[1]);
	}
	else
		printf("%s\n", shellName);

	return EXIT_SUCCESS;
}

// DELA, ne tikaj
int print_n()
{
	for (int i = 1; i < numTokens; i++)
	{
		if (tokens[i][0] == '"')
		{
			int length = 1;
			while (tokens[i][length] != '\0')
				length++;

			printf("%.*s", length - 2, tokens[i] + 1);
		}
		else
			printf("%s", tokens[i]);

		if (i < (numTokens - 1))
			printf(" ");
	}

	return EXIT_SUCCESS;
}

// DELA, ne tikaj
int echo_n()
{
	if (print_n() == EXIT_SUCCESS)
		printf("\n");
	else
		return EXIT_FAILURE;
	return EXIT_SUCCESS;
}

// DELA, ne tikaj
int pid_n()
{
	pid_t pid;
	if ((pid = getpid()) < 0)
	{
		int rtrn = errno;
		perror("pid");
		return rtrn;
	}
	printf("%d\n", pid);
	return EXIT_SUCCESS;
}

// DELA, ne tikaj
int ppid_n()
{
	pid_t ppid;
	if ((ppid = getppid()) < 0)
	{
		int rtrn = errno;
		perror("ppid");
		return rtrn;
	}
	printf("%d\n", ppid);
	return EXIT_SUCCESS;
}

int dirchange_n()
{
	int rtrn;

	if (numTokens <= 1)
		rtrn = chdir("/");
	else
		rtrn = chdir(tokens[1]);

	if (rtrn < 0)
	{
		int rtrn = errno;
		perror("dirchange");
		return rtrn;
	}

	return EXIT_SUCCESS;
}

int dirwhere_n()
{
	if (!getcwd(path, sizeof(path)))
	{
		int rtrn = errno;
		perror("dirwhere");
		return rtrn;
	}

	return printf("%s\n", path);
}

int dirbase_n()
{
	if (!getcwd(path, sizeof(path)))
	{
		int rtrn = errno;
		perror("dirbase");
		return rtrn;
	}

	return printf("%s\n", basename(path));
}

int dirmake_n()
{
	if (numTokens < 2)
		return EXIT_FAILURE;

	if (mkdir(tokens[1], 0777) < 0)
	{
		int rtrn = errno;
		perror("dirmake");
		return rtrn;
	}

	return EXIT_SUCCESS;
}

int dirremove_n()
{
	if (numTokens < 2)
		return EXIT_FAILURE;
	return remove_directory(tokens[1]);
}

int dirlist_n()
{
	if (numTokens < 2)
		strcpy(path, tokens[1]);
	else
		strcpy(path, ".");

	// OPEN
	DIR *dir = opendir(path);
	// OPEN

	if (!dir)
	{
		int rtrn = errno;
		perror("dirlist");
		return rtrn;
	}

	struct dirent *entry;
	while ((entry = readdir(dir)) != NULL)
		printf("%s  ", entry->d_name);
	printf("\n");

	// CLOSE
	closedir(dir);
	// CLOSE

	return EXIT_SUCCESS;
}

int linkhard_n()
{
	if (numTokens < 3)
		return EXIT_FAILURE;

	if (link(tokens[1], tokens[2]) != 0)
	{
		int rtrn = errno;
		perror("linkhard");
		return rtrn;
	}

	return EXIT_SUCCESS;
}

int linksoft_n()
{
	if (numTokens < 3)
		return EXIT_FAILURE;

	if (symlink(tokens[1], tokens[2]) != 0)
	{
		int rtrn = errno;
		perror("linksoft");
		return rtrn;
	}
	return EXIT_SUCCESS;
}

int linkread_n()
{
	ssize_t size;

	size = readlink(tokens[1], path, sizeof(path) - 1);
	if (size == -1)
	{
		int rtrn = errno;
		perror("linkread");
		return rtrn;
	}

	path[size] = '\0';

	return printf("%s\n", path);
}

int linklist_n()
{
	struct stat str_stat;
	// OPEN
	DIR *dir = opendir(".");
	// OPEN

	if (stat(tokens[1], &str_stat) < 0)
	{
		int rtrn = errno;
		perror("linklist");
		return rtrn;
	}

	long org_save = str_stat.st_ino;

	if (dir == NULL)
	{
		int rtrn = errno;
		perror("linklist");
		return rtrn;
	}

	struct dirent *entry;
	while ((entry = readdir(dir)))
	{
		if (entry->d_ino == org_save)
			printf("%s  ", entry->d_name);
	}

	printf("\n");

	// CLOSE
	closedir(dir);
	// CLOSE

	return EXIT_SUCCESS;
}

int unlink_n()
{
	if (unlink(tokens[1]) < 0)
	{
		int rtrn = errno;
		perror("unlink");
		return rtrn;
	}

	return EXIT_SUCCESS;
}

int remove_n()
{
	if (numTokens < 2)
		return EXIT_FAILURE;

	if (remove(tokens[1]) != 0)
	{
		int rtrn = errno;
		if (dirremove_n() == EXIT_SUCCESS)
			return EXIT_SUCCESS;
		perror("remove");
		return rtrn;
	}

	return EXIT_SUCCESS;
}

int rename_n()
{
	if (numTokens < 3)
		return EXIT_FAILURE;

	if (rename(tokens[1], tokens[2]) < 0)
	{
		int rtrn = errno;
		perror("rename");
		return rtrn;
	}

	return EXIT_SUCCESS;
}

// DELA, ne tikaj
int sysinfo_n()
{
	struct utsname sysInfo;
	if (uname(&sysInfo) == -1)
	{
		int rtrn = errno;
		perror("sysinfo");
		return rtrn;
	}

	return printf("Sysname: %s\nNodename: %s\nRelease: %s\nVersion: %s\nMachine: %s\n",
				  sysInfo.sysname, sysInfo.nodename, sysInfo.release, sysInfo.version, sysInfo.machine);
}

// DELA, ne tikaj
int shellinfo_n()
{
	if (printf("Uid: %d\nEUid: %d\nGid: %d\nEGid: %d\n", getuid(), geteuid(), getgid(), getegid()) < 0)
	{
		int rtrn = errno;
		perror("shellinfo");
		return rtrn;
	}

	return EXIT_SUCCESS;
}

// DELA, ne tikaj
int proc_n()
{
	if (numTokens > 1)
	{
		if (access(tokens[1], F_OK | R_OK) == -1)
			return EXIT_FAILURE;

		strncpy(path1, tokens[1], sizeof(path1));
		path1[sizeof(path1) - 1] = '\0';
	}
	else
		printf("%s\n", path1);
	return EXIT_SUCCESS;
}

int pids_n()
{
	// OPEN
	DIR *dir = opendir(path1);
	// OPEN

	if (dir == NULL)
	{
		int rtrn = errno;
		perror("pids");
		return rtrn;
	}

	struct dirent *entry;
	while (entry = readdir(dir))
	{
		if (isdigit(entry->d_name[0]))
			printf("%s\n", entry->d_name);
	}

	// CLOSE
	closedir(dir);
	// CLOSE
}

int pinfo_n()
{
	// NATISNI HEADER
	printf("%5s %5s %6s %s\n", "PID", "PPID", "STANJE", "IME");

	DIR *dir;
	struct dirent *entry;

	// OPEN
	dir = opendir(path1);
	// OPEN

	if (!dir)
	{
		int rtrn = errno;
		perror("pinfo");
		return rtrn;
	}

	while (entry = readdir(dir))
	{
		if (isdigit(entry->d_name[0]))
		{
			int pid = atoi(entry->d_name);
			snprintf(path, sizeof(path), "%s/%d/stat", path1, pid);

			int fd = open(path, O_RDONLY);
			if (fd != -1)
			{
				char buffer[1024];
				ssize_t bytesRead = read(fd, buffer, sizeof(buffer) - 1);
				close(fd);

				if (bytesRead > 0)
				{
					buffer[bytesRead] = '\0';

					int pidValue, ppidValue;
					char state[2];
					char name[256];

					sscanf(buffer, "%d %*c %s %c %d", &pidValue, name,
						   &state[0], &ppidValue);
					state[1] = '\0';
					name[strlen(name) - 1] = '\0'; // Odstranimo končni oklepaj

					printf("%5d %5d %6s %s\n", pidValue, ppidValue, state,
						   name);
				}
			}
		}
	}

	// CLOSE
	closedir(dir);
	// CLOSE

	return EXIT_SUCCESS;
}

int waitone_n()
{
	pid_t pid = atoi(tokens[1]);

	if (pid <= 0)
		pid = wait(NULL);
	else
		pid = waitpid(pid, NULL, 0);

	if (pid == -1)
	{
		int rtrn = errno;
		perror("waitone");
		return rtrn;
	}

	return EXIT_SUCCESS;
}

int waitall_n()
{
	pid_t pid;
	int status;

	while ((pid = waitpid(-1, &status, 0)) != -1)
		WIFEXITED(status);

	if (pid == -1)
	{
		int rtrn = errno;
		perror("waitall");
		return rtrn;
	}

	return EXIT_SUCCESS;
}

int cpcat_n()
{
	char *in = "-";
	char *out = "-";

	if (numTokens == 3)
	{
		in = tokens[1];
		out = tokens[2];
	}
	else if (numTokens == 2)
		in = tokens[1];

	int inputRtrn, outputRtrn;

	// INPUT
	//***********************************************************************************************************
	if (!strcmp(in, "-"))
		inputRtrn = STDIN_FILENO;
	else
		inputRtrn = open(in, O_RDONLY);

	//***********************************************************************************************************

	// OUTPUT
	//***********************************************************************************************************
	if (!strcmp(out, "-"))
		outputRtrn = STDOUT_FILENO;
	else
		outputRtrn = open(out, O_WRONLY | O_CREAT | O_TRUNC, 0644); // tazadna stvar pomeni permissione

	//***********************************************************************************************************

	if (outputRtrn < 0 || inputRtrn < 0)
	{
		int rtrn = errno;
		perror("cpcat");
		if (inputRtrn != STDIN_FILENO)
			close(inputRtrn);
		if (outputRtrn != STDOUT_FILENO)
			close(inputRtrn);
		return rtrn;
	}

	int rtrn = copyData(inputRtrn, outputRtrn);

	if (inputRtrn != STDIN_FILENO)
	{
		if (close(inputRtrn) < 0)
		{
			int rtrn = errno;
			perror("cpcat");
			return rtrn;
		}
	}

	if (outputRtrn != STDOUT_FILENO)
	{
		if (close(outputRtrn) < 0)
		{
			int rtrn = errno;
			perror("cpcat");
			return rtrn;
		}
	}

	return rtrn;
}

int externalcomm()
{
	char **args = malloc((numTokens + 1) * sizeof(char *));

	for (int i = 0; i < numTokens; i++)
		args[i] = tokens[i];

	args[numTokens] = NULL;

	pid_t pid = fork();
	if (pid == -1)
	{
		perror("fork");
		free(args);
		return EXIT_FAILURE;
	}
	else if (pid == 0)
	{
		execvp(tokens[0], args);
		free(args);
		_exit(1);
	}
	else
		wait(NULL);

	free(args);
	return EXIT_SUCCESS;
}

int remove_directory(const char *path)
{
	DIR *dir;
	struct dirent *entry;

	// OPEN
	dir = opendir(path);
	// OPEN

	if (dir == NULL)
	{
		int rtrn = errno;
		perror("dirremove");
		return rtrn;
	}

	while ((entry = readdir(dir)) != NULL)
	{
		if (!strcmp(entry->d_name, ".") || !strcmp(entry->d_name, ".."))
			continue;

		snprintf(path2, sizeof(path2), "%s/%s", path, entry->d_name);

		if (entry->d_type == DT_DIR)
		{
			if (remove_directory(path2) != 0)
			{
				int rtrn = errno;
				closedir(dir);
				return rtrn;
			}
		}
		else
		{
			if (unlink(path2) != 0)
			{
				int rtrn = errno;
				perror("dirremove");
				closedir(dir);
				return rtrn;
			}
		}
	}

	// CLOSE
	closedir(dir);
	// CLOSE

	if (rmdir(path) != 0)
	{
		int rtrn = errno;
		perror("rmdir");
		return rtrn;
	}

	return EXIT_SUCCESS;
}

int copyData(int inputRtrn, int outputRtrn)
{
	char buffer[BUFFER_SIZE];
	int bytesRead, bytesWritten;

	while ((bytesRead = read(inputRtrn, buffer, sizeof(buffer))) > 0)
	{
		bytesWritten = write(outputRtrn, buffer, bytesRead);
		if (bytesWritten != bytesRead)
		{
			int rtrn = errno;
			perror("cpcat");
			return rtrn;
		}
	}

	if (bytesRead < 0)
	{
		int rtrn = errno;
		perror("cpcat");
		return rtrn;
	}

	return EXIT_SUCCESS;
}