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
#define EXIT_BUFFER_OVERLOAD 3

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
int proc_n();
int pids_n();
int waitone_n();
int waitall_n();

int externalcomm();

// PROGRAM VARIABLES
//-----------------------------------------------------------
int printMode = 0;
char inBuffer[BUFFER_SIZE];
char tokens[NUM_TOKENS][TOKENS_SIZE];
int numTokens = 0;
char shellName[NAME_SIZE] = DEFAULT_SHELL_NAME;
int in;
int out;
DIR *dir;
char path[4048];
char proc_path[4048] = "/proc\0";
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

	strcpy(tokens[1], "test");
	dirremove_n();
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
	if (!strcmp(tokens[0], "proc"))
		return proc_n();

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

int help_n()
{
	return printf("Help page:\n");
}

int status_n()
{
	return printf("%d\n", status_save);
}

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

int echo_n()
{

	if (print_n() == EXIT_SUCCESS)
		printf("\n");
	else
		return EXIT_FAILURE;
	return EXIT_SUCCESS;
}

int pid_n()
{
	return printf("%d\n", getpid());
}

int ppid_n()
{
	return printf("%d\n", getppid());
}

int dirchange_n()
{
	int err;

	if (numTokens == 1)
		err = chdir("/");
	else
		err = chdir(tokens[1]);

	if (err < 0)
	{
		perror("dirchange");
		return errno;
	}

	return EXIT_SUCCESS;
}

int dirwhere_n()
{
	if (getcwd(path, sizeof(path)))
		printf("%s\n", path);
	else
	{
		perror("dirwhere");
		return errno;
	}
	return EXIT_SUCCESS;
}

int dirbase_n()
{
	if (getcwd(path, sizeof(path)))
		printf("%s\n", basename(path));
	else
	{
		perror("dirbase");
		return errno;
	}
	return EXIT_SUCCESS;
}

int dirmake_n()
{
	if (numTokens < 2)
		return EXIT_FAILURE;

	if (mkdir(tokens[1], 0777) < 0)
	{
		perror("dirmake");
		return errno;
	}

	return EXIT_SUCCESS;
}

int dirremove_n()
{
	if (numTokens < 2)
		return EXIT_FAILURE;

	if (rmdir(tokens[1]) < 0)
	{
		perror("dirremove");
		return errno;
	}

	return EXIT_SUCCESS;
}

int dirlist_n()
{
	// OPEN
	dir = opendir(".");
	// OPEN

	if (dir == NULL)
	{
		perror("dirlist");
		return errno;
	}
	else
	{
		struct dirent *entry;
		while ((entry = readdir(dir)) != NULL)
		{
			printf("%s  ", entry->d_name);
		}
		printf("\n");
	}

	// CLOSE
	closedir(dir);
	// CLOSE

	return EXIT_SUCCESS;
}

int linkhard_n()
{
	if (link(tokens[1], tokens[2]) != 0)
	{
		perror("linkhard");
		return errno;
	}
	return EXIT_SUCCESS;
}

int linksoft_n()
{
	if (symlink(tokens[1], tokens[2]) != 0)
	{
		perror("linksoft");
		return errno;
	}
	return EXIT_SUCCESS;
}

int linkread_n()
{
	ssize_t bytesRead = readlink(tokens[1], path, strlen(path) - 1);

	if (bytesRead == -1)
	{
		perror("linkread");
		return errno;
	}

	path[bytesRead] = '\0';
	printf("%s\n", basename(path));
	return EXIT_SUCCESS;
}

int linklist_n()
{
	struct dirent *entry;
	DIR *dp;
	int result;
	struct stat str_stat;

	long inode_original;
	if (stat(tokens[1], &str_stat) < 0)
	{
		perror("linklist");
		return errno;
	}
	inode_original = str_stat.st_ino;

	dp = opendir(".");
	if (dp == NULL)
	{
		perror("linklist");
		return errno;
	}

	while ((entry = readdir(dp)))
	{
		if (entry->d_ino == inode_original)
			printf("%s  ", entry->d_name);
	}

	printf("\n");
	closedir(dp);
	return 0;
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

int rename_n()
{
	if (rename(tokens[1], tokens[2]) < 0)
	{
		perror("rename");
		return errno;
	}

	return EXIT_SUCCESS;
}

int sysinfo_n()
{
	struct utsname sysInfo;
	if (uname(&sysInfo) == -1)
	{
		perror("sysinfo");
		return errno;
	}

	if (printf("Sysname: %s\nNodename: %s\nRelease: %s\nVersion: %s\nMachine: %s\n",
			   sysInfo.sysname, sysInfo.nodename, sysInfo.release, sysInfo.version, sysInfo.machine) < 0)
	{
		perror("sysinfo");
		return errno;
	}

	return EXIT_SUCCESS;
}

int shellinfo_n()
{
	if (printf("Uid: %d\nEUid: %d\nGid: %d\nEGid: %d\n", getuid(), geteuid(), getgid(), getegid()) < 0)
	{
		perror("shellinfo");
		return errno;
	}

	return EXIT_SUCCESS;
}

int proc_n()
{
	if (numTokens > 1)
	{
		if (access(tokens[1], F_OK | R_OK) == -1)
			return EXIT_FAILURE;

		strncpy(proc_path, tokens[1], sizeof(proc_path));
		path[sizeof(proc_path) - 1] = '\0';
	}
	else
		printf("%s\n", proc_path);
	return EXIT_SUCCESS;
}

int pids_n()
{
}

int waitone_n()
{
}

int waitall_n()
{
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