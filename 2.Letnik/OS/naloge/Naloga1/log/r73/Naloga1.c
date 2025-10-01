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
void cleanBuffer(char buffer[BUFFER_SIZE]);
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
		cleanBuffer(inBuffer);

		if (isatty(STDIN_FILENO))
			printStart();

		if (fgets(inBuffer, BUFFER_SIZE, stdin) == NULL)
			break;

		fflush(stdin);

		// if tokenise function returns one or more tokens
		if (tokenise(inBuffer) > 0)
		{
			// if (strlen(out_override) > 0)
			// {
			// 	if ((out = open(out_override, O_CREAT | O_TRUNC | O_WRONLY, S_IRUSR | S_IWUSR)) < 0)
			// 		perror("out override open");
			// 	if (dup2(out, STDOUT_FILENO) < 0)
			// 		perror("out override dup2");
			// }

			// // OVERRIDE INPUT
			// if (strlen(in_ovverride) > 0)
			// {
			// 	if ((in = open(in_ovverride, O_RDONLY)) < 0)
			// 		perror("in override open");

			// 	if (dup2(in, STDIN_FILENO) < 0)
			// 		perror("in override dup2");
			// }

			// izvajanje v ozadju (zadnji token je &)
			fflush(stdin);
			if (!strcmp(tokens[numTokens - 1], "&"))
			{
				numTokens--;
				if (fork() == 0)
				{
					status_save = evalComm();
					exit(EXIT_SUCCESS);
				}
			}
			else
				status_save = evalComm();
		}
	}

	cleanBuffer(inBuffer);
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

		while (isspace(input[i]) && i < strLen)
			i++;

		if (input[i] == '#')
			return numTokens;
		else if (input[i] == '"')
		{
			i++;
			while (input[i] != '"' && i < strLen)
			{
				tokens[numTokens][currTokenPlace] = input[i];
				i++;
				currTokenPlace++;
			}
		}
		else
		{
			while (!isspace(input[i]) && i < strLen)
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

void cleanBuffer(char buffer[BUFFER_SIZE])
{
	buffer[0] = '\0';
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
		perror("pid");
		return errno;
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
		perror("ppid");
		return errno;
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
		perror("dirchange");
		return errno;
	}

	return EXIT_SUCCESS;
}

int dirwhere_n()
{
	if (!getcwd(path, sizeof(path)))
	{
		perror("dirwhere");
		return errno;
	}

	return printf("%s\n", path);
}

int dirbase_n()
{
	if (!getcwd(path, sizeof(path)))
	{
		perror("dirbase");
		return errno;
	}

	return printf("%s\n", basename(path));
}

int dirmake_n()
{
	if (numTokens < 2)
		return EXIT_FAILURE;

	if (mkdir(tokens[1], 0777) < 0)
	{
		// if (errno == EEXIST)
		// 	return EXIT_SUCCESS;
		perror("dirmake");
		return errno;
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
	// OPEN
	DIR *dir = opendir(".");
	// OPEN

	if (!dir)
	{
		perror("dirlist");
		return errno;
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
		perror("linkhard");
		return errno;
	}

	return EXIT_SUCCESS;
}

int linksoft_n()
{
	if (numTokens < 3)
		return EXIT_FAILURE;

	if (symlink(tokens[1], tokens[2]) != 0)
	{
		perror("linksoft");
		return errno;
	}
	return EXIT_SUCCESS;
}

int linkread_n()
{
	ssize_t size;

	size = readlink(tokens[1], path, sizeof(path) - 1);
	if (size == -1)
	{
		perror("linkread");
		return errno;
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
		perror("linklist");
		return errno;
	}

	long org_save = str_stat.st_ino;

	if (dir == NULL)
	{
		perror("linklist");
		return errno;
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
		perror("unlink");
		return errno;
	}

	return EXIT_SUCCESS;
}

int remove_n()
{
	if (numTokens < 2)
		return EXIT_FAILURE;

	if (remove(tokens[1]) != 0)
	{
		perror("remove");
		return errno;
	}

	return EXIT_SUCCESS;
}

int rename_n()
{
	if (rename(tokens[1], tokens[2]) < 0)
	{
		perror("rename");
		return errno;
	}

	return EXIT_SUCCESS;
}

// DELA, ne tikaj
int sysinfo_n()
{
	struct utsname sysInfo;
	if (uname(&sysInfo) == -1)
	{
		perror("sysinfo");
		return errno;
	}

	return printf("Sysname: %s\nNodename: %s\nRelease: %s\nVersion: %s\nMachine: %s\n",
				  sysInfo.sysname, sysInfo.nodename, sysInfo.release, sysInfo.version, sysInfo.machine);
}

// DELA, ne tikaj
int shellinfo_n()
{
	if (printf("Uid: %d\nEUid: %d\nGid: %d\nEGid: %d\n", getuid(), geteuid(), getgid(), getegid()) < 0)
	{
		perror("shellinfo");
		return errno;
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
		path[sizeof(path1) - 1] = '\0';
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
		perror("pids");
		return errno;
	}

	struct dirent *entry;
	while (entry = readdir(dir))
	{
		if (entry->d_name[0] >= '0' && entry->d_name[0] <= '9')
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

	if (!(dir = opendir(path1)))
	{
		perror("pinfo");
		return errno;
	}

	while ((entry = readdir(dir)))
	{
		if (entry->d_type == DT_DIR)
		{
			FILE *stat;
			char buffer[BUFFER_SIZE];
			char *pid, *ppid, *state, *name;

			if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0)
				continue;

			snprintf(path, sizeof(path), "%s/%s/stat", path1, entry->d_name);

			stat = fopen(path, "r");
			if (!stat)
			{
				continue;
			}

			if (!fgets(buffer, sizeof(buffer), stat))
			{
				fclose(stat);
				continue;
			}

			pid = strtok(buffer, " ");
			ppid = strtok(NULL, " ");
			strtok(NULL, " "); // Skip third field (process name in parentheses)
			state = strtok(NULL, " ");
			strtok(NULL, " "); // Skip fifth field (process memory usage)
			name = strtok(NULL, " ");

			if (pid != NULL && ppid != NULL && state != NULL && name != NULL)
			{
				printf("%5s %5s %6s %s\n", pid, ppid, state, name);
			}

			fclose(stat);
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
		perror("waitone");
		return errno;
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
		perror("waitall");
		return errno;
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
		perror("cpcat");
		if (inputRtrn != STDIN_FILENO)
			close(inputRtrn);
		if (outputRtrn != STDOUT_FILENO)
			close(inputRtrn);
		return errno;
	}

	int rtrn = copyData(inputRtrn, outputRtrn);

	if (inputRtrn != STDIN_FILENO)
	{
		if (close(inputRtrn) < 0)
		{
			perror("cpcat");
			return errno;
		}
	}

	if (outputRtrn != STDOUT_FILENO)
	{
		if (close(outputRtrn) < 0)
		{
			perror("cpcat");
			return errno;
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
		perror("dirremove1");
		return errno;
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
				closedir(dir);
				return errno;
			}
		}
		else
		{
			if (unlink(path2) != 0)
			{
				perror("dirremove2");
				closedir(dir);
				return errno;
			}
		}
	}

	// CLOSE
	closedir(dir);
	// CLOSE

	if (rmdir(path) != 0)
	{
		perror("rmdir");
		return errno;
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
			perror("cpcat");
			return errno;
		}
	}

	if (bytesRead < 0)
	{
		perror("cpcat");
		return errno;
	}

	return EXIT_SUCCESS;
}