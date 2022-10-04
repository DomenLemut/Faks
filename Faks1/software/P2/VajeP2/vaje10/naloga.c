

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#include "naloga.h"


int vsotaI(Vozlisce* zacetek) { 
    // popravite / dopolnite ... ITERATIVNO
    Vozlisce* novo = malloc(sizeof(Vozlisce));
    int sum = 0;
    wile(v != NULL){
        sum += v->podatek;
        v = v->naslednje
    }
    return sum;
}

int vsotaR(Vozlisce* zacetek) {
    // popravite / dopolnite ... REKURZIVNO
    if(zacetek == NULL){
        return 0;
    }
    return zacetek->podatek + vsotaR(zacetek->naslednje);
}

Vozlisce* vstaviUrejenoI(Vozlisce* zacetek, int element) {
    // popravite / dopolnite ... ITERATIVNO
    Vozlisce* novo = malloc(sizeof(Vozlisce));
    novo->podatek = element;

    if(zacetek == NULL || element <= zacetek->podatek){
        //vstavljanje v prazen seznam ali na zacetek
        novo->naslednje = zacetek;
        zacetek = novo;
    } else {
        //vstavljanje na sredino ali na konec seznama
        while(v->naslednje != NULL && v->naslednje->podatek < element) {
            v = v->naslednje;
        }
    }

    novo->naslednje = v->naslednje;
    v->naslednje = novo;

    return zacetek;
}

Vozlisce* vstaviUrejenoR(Vozlisce* zacetek, int element) {
    // popravite / dopolnite ... REKURZIVNO
    if(zacetek == NULL || element <= zacetek -> podatek){
        Vozlisce* novo = malloc(sizeof(Vozlisce));
        novo->podatek = element;
        novo->naslednje = zacetek;
        return novo;
    }
    zacetek->naslednje = vstaviUrejenoR(zacetek->naslednje,element);
    return zacetek;
}

int main() {
    // koda za ro"cno testiranje (po "zelji)

    return 0;
}
