#include <stdio.h>
#include <stdbool.h>

int paths(int n, int m, int hor){
    if(m == 1 || n == 1)
        return 1;
    else
        return paths(n, m - 1, hor) + paths(n - 1, m, hor) + hor * paths(n - 1, m - 1, hor);
}

int main(){
    int count;
    int hor; //horisontal allowed

    int n; int m; //m je sirina n je visina

    printf("Matrix dimensions...\n\nHeight:");
    scanf("%d", &n);
    printf("\n");

    printf("Width:");
    scanf("%d", &m);
    printf("\n");

    printf("horisontal moves allowed?(1 or 0):");
    scanf("%d", &hor);
    printf("\n");

    count = paths(n, m, hor);
    printf("%d\n", count);

    return 0;
}