
/*

Prevajanje in poganjanje skupaj z datoteko test01.c:

gcc -e__main__ -o test01 test01.c naloga1.c
./test01

*/

#include <stdio.h>
#include <stdlib.h>

#include "naloga1.h"

int* poisci(int* t, int* dolzina, int** konec) {
    // popravite / dopolnite ...
    int* length = 0;
    for(int* i = t; i < *konec; i++){
    	length++;
    }
    return length;
}

int main() {
    // koda za ro"cno testiranje (po "zelji)
    return 0;
}
