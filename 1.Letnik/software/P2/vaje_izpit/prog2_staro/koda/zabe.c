#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int n;
int k1;
int k2;
int s;
bool * polja;

void zabe(int curr, int moves){
    polja[curr] = true;
    if(moves < s){
        if(!polja[curr + k1] && curr + k1 < n)
            zabe(curr + k1, moves + 1);
        if(!polja[curr + k2] && curr + k2 < n)
            zabe(curr + k2, moves + 1);
        if(!polja[curr - k1] && curr - k1 >= 0)
            zabe(curr - k1, moves + 1);
        if(!polja[curr - k2] && curr - k2 >= 0)
            zabe(curr - k2, moves + 1);
    }
}

int main(){
    scanf("%d", &n);
    scanf("%d", &k1);
    scanf("%d", &k2);
    scanf("%d", &s);
    polja = malloc(n* sizeof(bool));

    zabe(0, 0);

    int count;
    for(int i = 0; i < n; i++){
        if(polja[i]) count++;
    }
    printf("%d\n", count);
    
    return 0;
}