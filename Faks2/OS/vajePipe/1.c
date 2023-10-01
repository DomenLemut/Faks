#include <stdio.h>

// ls |grep xyz > bla.txt
int main()
{
    int fd[2];
    pipe(fd);
    if (!fork())
    {
        dup2(fd[1], 1);
        close(fd[0]);
        execvp("ls");
        exit();
    }

    if (!fork())
    {
        int f = open("bla.txt", "O_WRONLY");
        dup2(fd[0], 0);
        dup2(f, 1);
        close(fd[0]);
        close(f);
        execvp("grep", "xyz");
    }

    close(fd[0]);
    close(fd[1]);

    wait(NULL);
    wait(NULL);
}