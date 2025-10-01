#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int rand_int(int min, int max)
{
    return rand() % (max - min + 1) + min;
}

int main(int argc, char const *argv[])
{
    srand(time(NULL));

    if (argc < 2)
        return 1;

    int n = atoi(argv[1]);

    printf("%d\n", n);

    for (int i = 0; i < n; i++)
        printf("%d\n", rand_int(0, n));

    return 0;
}
