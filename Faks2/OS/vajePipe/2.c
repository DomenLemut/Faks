#include <stdio.h>
#include <stdlib.h>

// cat tocke | izracun.sh 2>log || mkdir FAIL &
int main()
{
    if (!fork())
    {
        int fd[2];
        pipe(fd);
        if (!fork())
        {
            dup2(fd[1], 1);
            close(fd[0]);
            execvp("cat", "tocke");
            exit(42);
        }

        if (!fork())
        {
            int f = open("log", O_CREAT | O_WRONLY | O_TRUNC);
            dup2(f, 2);
            dup2(fd[0], 0);
            close(fd[1]);
            close(f);

            execvp("izracun.sh");
            exit(42);
        }

        // pocakaj na vse otroke
        wait(NULL);
        wait(NULL);
        wait(NULL);
    }
}