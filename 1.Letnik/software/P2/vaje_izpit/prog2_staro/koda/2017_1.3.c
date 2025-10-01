#include <stdio.h>
#include <stdlib.h>

int n;
int i;

int combinations(int* numLow, int* numHigh, int* curr, int count, int level){
    if(count < numHigh[level]){
        curr[level] = count + 1;
        combinations(numLow, numHigh, curr, count + 1, level);
    }
    if(level >= n){
        printf("%ls", curr);
    }
    level += 1;
    curr[level] = numLow[level];
    combinations(numLow, numHigh, curr, count, level);
}

int main(){
    scanf("%d", &n);
    
    int * numLow = malloc(n * sizeof(int));
    int * numHigh = malloc(n * sizeof(int));
    int * curr = malloc(n * sizeof(int));

    for(int i = 0; i < n; i++){
        scanf("%d", &numLow[i]);
        scanf("%d", &numHigh[i]);
    }

    combinations(numLow, numHigh, curr, 0, 0);


    free(numHigh); free(numLow);

    return 0;
}