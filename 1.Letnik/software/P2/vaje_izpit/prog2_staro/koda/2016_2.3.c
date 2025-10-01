#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

void izpis(int * niz, int start, int end, int potenca){
    if(potenca <= end){
        for(int i = 0; i < potenca; i++){
        printf("%d", niz[start + i]);
    }
        izpis(niz, start + potenca, end, potenca * 2);
    }
}

int main(){
    int n;
    scanf("%d", &n);
    int * niz;
    scanf("%ls", niz);

    izpis(niz, 0, 16, 1);
    return 0;
}

/*
4
7 2 3 0 1 9 8 5 4 6 3 7 1 8 6
*/
