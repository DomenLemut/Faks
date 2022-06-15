#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

void Froggies(int pos, int currS, int n, int k1, int k2, int s, bool * positions){
    positions[pos] = true;
    if(currS < s){
        if(pos + k1 < n)
            Froggies(pos + k1, currS + 1, n, k1, k2, s, positions);
        if(pos + k2 < n)
            Froggies(pos + k2, currS + 1, n, k1, k2, s, positions);
        if(pos - k1 >= 0)
            Froggies(pos - k1, currS + 1, n, k1, k2, s, positions);
        if(pos - k2 >= 0)
            Froggies(pos - k2, currS + 1, n, k1, k2, s, positions);
    }
}

int main(){
    int n; int k1; int k2; int s;
    scanf("%d %d %d %d", &n, &k1, &k2, &s);

    int count = 0;

    bool * positions = (bool*) malloc(n * sizeof(bool)); 
    Froggies(0, 0, n, k1, k2, s, positions);

    for(int i = 0; i < n; i++){
        if(positions[i])
            count++;
    }
    
    printf("%d\n", count);

    return 0;
}

/*
vhod:
12 4 6 2

n, k1, k2, s 

*/