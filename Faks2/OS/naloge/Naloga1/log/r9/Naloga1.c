#include <stdio.h>
#include <unistd.h>
#include <stdbool.h>
#include <string.h>
#include <stdlib.h>
#include <sys/wait.h>
#include <termios.h>
#include <ctype.h>
#include <libgen.h>
#include <dirent.h>

#define BUFFER_SIZE 128
#define TOKENS_SIZE 40
#define NUM_TOKENS 16
#define NUM_CASES 10
#define NAME_SIZE 20
#define DEFAULT_SHELL_NAME "mysh\0"
#define EXIT_BUFFER_OVERLOAD 3

int printMode = 0;
char inBuffer[BUFFER_SIZE];
char tokens[TOKENS_SIZE][NUM_TOKENS];
int numTokens = 0;
FILE *in;
FILE *out;
char shellName[NAME_SIZE] = DEFAULT_SHELL_NAME;
DIR *dir;

void printStart();
void readComm(char *buffer, FILE *fp);
void printComm(char *str, FILE *fp);
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

	dir = opendir(".");

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

	if (!strcmp(tokens[0], "help"))
	{
		printComm("Help page:\n", out);
	}
	else if (!strcmp(tokens[0], "status"))
	{
		printComm("Status: isisdfalsdnfalsk\n", out);
	}
	else if (!strcmp(tokens[0], "exit") && numTokens > 0 && !(strcmp(tokens[1], "status")))
	{
	}
	else if (!strcmp(tokens[0], "name"))
	{
		if (numTokens > 1)
		{
			if (strlen(tokens[1]) > 8)
			{
				if (fork() == 0)
					exit(1);
			}
			else
				strcpy(shellName, tokens[1]);
		}
		else
		{
			printComm(shellName, out);
			printComm("\n", out);
		}
	}
	else if (!strcmp(tokens[0], "print"))
	{
		for (int i = 1; i < numTokens; i++)
		{
			printComm(tokens[i], out);
		}
	}
	else if (!strcmp(tokens[0], "echo"))
	{
		for (int i = 1; i < numTokens; i++)
		{
			printComm(tokens[i], out);
		}
		printComm("\n", out);
	}
	else if (!strcmp(tokens[0], "pid"))
	{
		int pid = getpid();
		char *str = (char *)malloc((10) * sizeof(char));
		sprintf(str, "%d\n", pid);
		printComm(str, out);
		free(str);
	}
	else if (!strcmp(tokens[0], "ppid"))
	{
		int pid = getppid();
		char *str = (char *)malloc((10) * sizeof(char));
		sprintf(str, "%d\n", pid);
		printComm(str, out);
		free(str);
	}
	else if (!strcmp(tokens[0], "dirchange"))
	{
		if (dir)
		{
			struct dirent *entry;
			while ((entry = readdir(dir)) != NULL)
			{
				printComm(entry->d_name, out);
				printComm("\n", out);
			}
			closedir(dir);
		}
		else
		{
			perror("opendir() error");
			return 1;
		}
		return 0;
	}
	// else if (!strcmp(tokens[0], "dirwhere"))
	// {
	// 	char cwd[1024];
	// 	if (getcwd(cwd, sizeof(cwd)) != NULL)
	// 	{
	// 		printf("Current directory: %s\n", cwd);
	// 	}
	// 	else
	// 	{
	// 		printf("Failed to get current directory.\n");
	// 	}
	// }
	// else if (!strcmp(tokens[0], "dirbase"))
	// {
	// 	char cwd[1024];
	// 	if (getcwd(cwd, sizeof(cwd)) != NULL)
	// 	{
	// 		printf("Directory base: %s\n", basename(cwd));
	// 	}
	// 	else
	// 	{
	// 		printf("Failed to get current directory.\n");
	// 	}
	// }
	// else if (!strcmp(tokens[0], "dirmake"))
	// {
	// 	if (mkdir(path, 0777) == 0)
	// 	{
	// 		printf("Directory created: %s\n", path);
	// 	}
	// 	else
	// 	{
	// 		printf("Failed to create directory.\n");
	// 	}
	// }
	// else if (!strcmp(tokens[0], "dirremove"))
	// {
	// 	if (rmdir(path) == 0)
	// 	{
	// 		printf("Directory removed: %s\n", path);
	// 	}
	// 	else
	// 	{
	// 		printf("Failed to remove directory.\n");
	// 	}
	// }
	// else if (!strcmp(tokens[0], "dirlist"))
	// {
	// 	DIR *dir = opendir(path ? path : ".");
	// 	if (dir == NULL)
	// 	{
	// 		printf("Failed to open directory.\n");
	// 		return;
	// 	}

	// 	struct dirent *entry;
	// 	while ((entry = readdir(dir)) != NULL)
	// 	{
	// 		printf("%s  ", entry->d_name);
	// 	}
	// 	printf("\n");

	// 	closedir(dir);
	// }
	else
	{
		printComm(tokens[0], out);
		printComm(": Invalid command\n", out);
	}

	return 0;
}

void printComm(char *str, FILE *fp)
{
	fputs(str, fp);
}

void cleanBuffer(char buffer[BUFFER_SIZE])
{
	buffer[0] = '\0';
}
