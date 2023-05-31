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
#include <signal.h>

volatile int energy = 42;
volatile bool outputMode = 0;

void increaseEnergy()
{
	energy += 10;
}

void toggleOutputMode()
{
	outputMode = !outputMode;
}

void createChildProcess()
{
	pid_t pid = fork();
	if (pid == 0)
	{
		// Child process
		int sleepTime = (energy % 7) + 1;
		sleep(sleepTime);
		int exitStatus = (42 * energy) % 128;
		printf("\nChild process finished with exit status: %d\n", exitStatus);
		exit(exitStatus);
	}
	else if (pid > 0)
	{
		// Parent process
		printf("\nPID: %d\n", pid);
	}
	else
	{
		// Fork failed
		printf("\nFork failed\n");
	}
}

void handleSignal(int signal)
{
	switch (signal)
	{
	case SIGTERM:
		increaseEnergy();
		break;
	case SIGUSR1:
		toggleOutputMode();
		break;
	case SIGUSR2:
		createChildProcess();
		break;
	}
}

int main(int argc, char *argv[])
{
	signal(SIGTERM, handleSignal);
	signal(SIGUSR1, handleSignal);
	signal(SIGUSR2, handleSignal);

	printf("PID: %d\n", getpid());

	if (argc > 1)
	{
		energy = atoi(argv[1]);
	}

	while (energy > 0)
	{
		if (outputMode)
			printf("*");
		else
			printf(".");
		fflush(stdout);
		energy--;
		sleep(1);
	}

	printf("\nZmanjkalo je energije.\n");

	return 0;
}
