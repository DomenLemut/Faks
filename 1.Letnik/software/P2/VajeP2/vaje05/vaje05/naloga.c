
#include <stdio.h>
#include <stdlib.h>

#include "naloga.h"

#define ENG 26



int vsota(int* zac, int* kon) {
    // popravite / dopolnite ...
    int vsota = 0;
    for(int* i = zac; i < kon; i++){
    	vsota += *i;
    }
    return vsota;
}

void indeksInKazalec(int* t, int* indeks, int** kazalec) {
    // dopolnite ...
    if(*indeks == -1)
    	*indeks = *kazalec - t;
    else
    	*kazalec = t + *indeks;
}


//niz se zakljuci s \0
void frekvenceCrk(char* niz, int** frekvence) {
    // dopolnite ...
   	int* alphabet = malloc(ENG * sizeof(int));
   	char* p = niz;
   while(currChar){
   		char znak = *p;
   		
    	
    	indeks++;
    }

}

int main() {
	int tabela[] = {1, 2, 3, 4, 5, 6};
    // koda za ro"cno testiranje (po "zelji
	printf("%d", vsota(&tabela[0], &tabela[5]));

    return 0;
}
/*
V datoteki naloga.c napišite sledeče funkcije:
		• int vsota(int* zac, int* kon)
			Kazalca zac in kon kažeta na elementa iste tabele. Element, na katerega kaže kazalec
			kon, se ne nahaja pred elementom, na katerega kaže kazalec zac. Funkcija naj vrne
			vsoto vseh elementov od vključno elementa, na katerega kaže kazalec zac, do vključno
			elementa, na katerega kaže kazalec kon.
		• void indeksInKazalec(int* t, int* indeks, int** kazalec)
			Kazalec t kaže na začetek tabele. Če ima spremenljivka, na katero kaže kazalec
			indeks, vrednost  ́1, naj funkcija v to spremenljivko vpiše indeks elementa v tabeli,
			na katerega kaže kazalec, na katerega kaže kazalec kazalec. V nasprotnem primeru
			pa naj funkcija v spremenljivko, na katero kaže kazalec kazalec, vpiše kazalec na
			element, na čigar indeks kaže kazalec indeks.
		• void frekvenceCrk(char* niz, int** frekvence)
			Funkcija naj v spremenljivko, na katero kaže kazalec frekvence, vpiše kazalec na
			začetek novoustvarjene tabele frekvenc posameznih črk v nizu; i-ti element tabele
			naj vsebuje število pojavitev i-te črke v angleški abecedi. Funkcija naj ne razlikuje
			med velikimi in malimi črkami. Na primer, niz baNanA vsebuje tri črke A
*/
