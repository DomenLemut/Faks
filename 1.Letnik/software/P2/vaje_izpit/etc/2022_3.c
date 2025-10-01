#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int d;
int n;
char * niz;




void kombinacije(char * curr, int round, int iX){
    if(round < n){
        int currChar = 0;
        curr[round] = niz[iX];
        kombinacije(curr, round + 1, currChar);
        if(iX < n){
            kombinacije(curr, round + 1, currChar + 1);
        }
    }

    printf("%s\n", curr);
}

int main(){
    
    scanf("%d", &d);
    niz = malloc(d * sizeof(char));

    char * curr = malloc(n * sizeof(char));

    scanf("%s", niz);


    scanf("%d", &n);

    printf("d: %d, arr: %s, n: %d\n", d, niz, n);

    kombinacije(niz, 0, 0);

    return 0;
}