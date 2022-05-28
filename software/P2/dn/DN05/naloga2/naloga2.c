
/*

Prevajanje in poganjanje skupaj z datoteko test01.c:

gcc -e__main__ -o test01 test01.c naloga2.c
./test01

*/

#include <stdio.h>
#include "naloga2.h"

void zamenjaj(int** a, int** b) {
    // dopolnite ...
    int save = *a;
    *a = *b;
    *b = save;
}

void uredi(int** a, int** b, int** c) {
    // dopolnite ...
    int array[3];
    array[0] = **a;
    array[1] = **b;
    array[2] = **c;
    int sortArr[3];

    int curr;
    for(int i = 0; i < 3; i++){
        curr = array[i];
        for(int j = i; j < 3; j++){
            if(array[j]) > curr{
                curr = array[j];
            }
        }   
        sortArr[i] = curr;
    }

    *a = &sortArr[0];
    *b = &sortArr[1];
    *c = &sortArr[2];


}

void uredi2(int** a, int** b, int** c) {
    // dopolnite ...
    int array[3];
    array[0] = **a;
    array[1] = **b;
    array[2] = **c;
    int lP = 0;
    int rP = 2;
    int save;
    while (lP < rP){
        if(array[lP] < array[rP]){
            array[lP] < array[rP];
            save = array[lP];
            array


        }

    }


}

int main() {
    // koda za ro"cno testiranje (po "zelji)
    
    
    return 0;
}
