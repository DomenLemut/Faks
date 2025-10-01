#include <stdio.h>


int findCombinations(int n, int m){
    if(n == 0){ 
        return 1;
    }
    if(m == 0 || n < 0){
        return 0;
    }
    
    else{
        // printf("[%d] [%d]\n", m, n);
        return findCombinations(n - m, m) + findCombinations(n, m - 1);
    }
}

int main(){
    int n; int m;
    printf("Points to work with: ");
    scanf("%d", &n);

    printf("Biggest possible block: ");
    scanf("%d", &m);

    printf("\n[vse mozne kombinacije]: %d\n", findCombinations(n, m));

    return 0;
}