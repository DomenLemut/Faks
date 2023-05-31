#include <stdio.h>
int main(int argc, char* argv[]) {
int pid = fork();
if (pid < 0)
perror(argv[0]);
else if (pid > 0)
// starš zaspi za 60 sekund
sleep(60);
}
