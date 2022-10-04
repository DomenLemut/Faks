#include <stdio.h>

int getSum(int start, int number){
    int i = 1; 
    int sum = 0;

    while(i * number < start){
        sum += number * i;
        i++;
    }
    return sum;
}
int getSmallestMul(int a, int b){
    int sumA = a;
    int sumB = b;
    while(sumA != sumB){
        if(sumA < sumB)
            sumA += a;
        else
            sumB += b;
    }
    return a;
}

int main(){
    int start = 1000;
    int del [2] = {3, 5};
    int sum = 0;
    
    for(int i = 0; i < 2; i++){
        sum += getSum(start, del[i]);
    }
    //odstet moramo presek - some DS shit we fergot about
    sum -= getSum(1000, getSmallestMul(del[0], del[1]));

    printf("%d", sum);

    return 0;
}

