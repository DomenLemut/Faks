#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int n;
int k;
int count = 0;

void kombinacije(int indeks, int enice){
    if(indeks < n){
        if(enice >= 1)
            kombinacije(indeks + 1, enice - 1);
        if(enice >= 0)
            kombinacije(indeks + 1, enice + 1);
    }
    else{
        if(enice >= 0)
            count++;
    }
}

int main(){
    scanf("%d", &n);
    scanf("%d", &k);

    kombinacije(0, k);

    printf("%d\n", count);

    return 0;
}