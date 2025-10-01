#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#define LIMIT 100000000
#define LIMITDIGITS 8

int n [125];
//max int - 2 147 483 647

char curr;

int read(int i, int carry){
    if(carry < LIMIT){
        scanf("%1c", &curr);
        if(curr == '\0' || curr == '\n'){
            n[i / LIMITDIGITS] = carry;
            return i;
        }

        carry = carry * 10 + curr - '0';
        read(i + 1, carry);
    }
    else{
        n[i / LIMITDIGITS] = carry;
        read(i, 0);
    }
}

int multiply(int subI, int carryOn, int multiplier){
    if(subI <= 0){
        n[subI] = n[subI] * multiplier + carryOn;
        carryOn = n[subI] / LIMIT;
        multiply(subI, carryOn, multiplier);
    }
    else
        return carryOn;
}

void printOut(int carryOn, int subI){
    if(carryOn > 0)
        printf("%d", carryOn);
    for(int j = 0; j <= subI; j++){
        printf("%d", n[j]);
    }
    printf("\n");
}


int main(){
    int k;
    
    int i = read(0, 0);
    int subI = i / LIMITDIGITS;

    scanf("%d", &k);

    // int carryOn = multiply(subI, 0, k);

    // printf("%d\n", carryOn);

    printOut(0, subI + 1);


    return 0;
}
