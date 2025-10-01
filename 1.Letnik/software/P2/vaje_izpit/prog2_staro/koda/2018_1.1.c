#include <stdio.h>

/*
10
170 190 175 160 130 180 150 140 120 150
*/

int main(){
    int n;
    scanf("%d", &n);
    int * ppl;

    for(int i = 0; i < n; i++){
        scanf("%d", &ppl[i]);
    }

    int tallest = ppl[n - 1];
    int count = 0;

    for (int i = n - 1; i >= 0; i--){
        if(ppl[i] >= tallest){
            tallest = ppl[i];
            count += 1;
        }
    }
    printf("[Stevilo oseb]: %d \n", count);


    return 0;
}