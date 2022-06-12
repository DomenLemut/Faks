#include <stdio.h>
#include <stdlib.h>


int main(){
    int n;
    scanf("vnesite stevilo vzponov/padcev: %d", &n);
    printf("stevilo kombinacij: [%d]", getCombinations(n));
    return 0;
}

int getCombinations(int n){
    int num = 0;

    int sum1; int sum2; int sum = 0;
    int pointer = n - 1;

    int *t = (int*) malloc(n * sizeof(int));
    for(int i = 0; i < n; i++){
        t[i] = 0;
    }

    while(t[0] <= n){
        for(int i = 0; i < n; i++){
            sum1 = i % 2 * t[i];
            sum2 = (i + 1) % 2 * t[i];
            sum += t[i];
        }
        if(sum == n && sum1 == sum2) num++;

        t[n - 1]++;

        if(t[pointer] > n){
            while(t[pointer] >= n){
                t[pointer]++;
            }
            t[pointer] = 0;
            pointer = 0;
        }
    }

    


    return num;
}