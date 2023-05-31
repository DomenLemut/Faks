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

    pid_t pid = fork();
    if (pid == -1)
    {
        perror("fork");
        free(args);
        return EXIT_FAILURE;
    }
    else if (pid == 0)
    {
        execvp("ls", NULL);
        free(args);
        _exit(1);
    }
    else
        wait(NULL);
        
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
