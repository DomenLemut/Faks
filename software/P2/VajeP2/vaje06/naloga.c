
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#include "naloga.h"

int steviloZnakov(char* niz, char znak) {
    // popravite / dopolnite ...
    int cntChar = 0;
    char* c = niz;
    while(*c != '\0'){
    	if(*c == znak)
    		cntChar++;
    	c++;
    }
    return cntChar;
}

char* kopirajDoZnaka(char* niz, char znak) {
    // popravite / dopolnite ...
    char* nov = malloc(steviloZnakov(niz, znak) * sizeof(char));
    
    char* c = niz;
    while(*c != '\0' && *c != znak){
    	*nov = *niz;
    	nov++;
    	c++;
    }
    
    *nov = '\0';
    return nov;
}

char* kopirajDoZnaka1(char* niz, char znak) {
    // popravite / dopolnite ...
    int dolzina = strlen(niz);
    
    char* pZnake = strchr(niz, znak);
    
    int dolzinaPodniza = (pZnak == NULL) ? dolzina : (pZnak - niz);
    
    char* kopija = malloc((dolzinaPodniza + 1) * sizeof(char));
    
    strcpy(kopija, niz, dolzinaPodniza);
    
    kopija[dolzinaPodniza] = '\0';
    
    return kopija;
}


char** razcleni(char* niz, char locilo, int* stOdsekov) {
    // popravite / dopolnite ...
    int stOds = steviloZnakov(niz, locilo) + 1;
    
    char* nov = malloc(steviloZnakov(niz, znak) * sizeof(char*));
    
    char** rezultat = malloc(stOds * sizeof(char*));
    
    for(int i = 0; i < stOds; i++){
    	rezultat[i] = kopirajDoZnaka(niz, locilo);
    }
	
	*stOdsekov = stOds;
	
    return rezultat;
}




int main() {
    // koda za ro"cno testiranje (po "zelji)
}

//char** int t = malloc(sizeof(int*)*6);
