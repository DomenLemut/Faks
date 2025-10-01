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

    if (argc < 4)
        return 1;

    int n = atoi(argv[1]);
    int k = atoi(argv[2]);
    int a = atoi(argv[3]);

    printf("%d %d %d\n", n, k, a);

    for (int i = 0; i < n; i++)
    {
        printf("%d\n", rand_int(1, n * 2));
    }

    return 0;
}
