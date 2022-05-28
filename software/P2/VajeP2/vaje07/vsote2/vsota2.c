/*
██████╗ ██████╗  ██████╗  ██████╗     ██████╗  
██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗  
██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝  
██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝  
██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗  
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝ 

Vaje 7.2                                  
*/

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

#define MAXN 30 //range spremenljivke n (1 - 30)
#define MAXK 30 //range spremenljivke k (1 - n)

//najvecje stevilo kombinacij ~ 9,223,372,036,854,775,807 (max long!!)


/*
cV kot ciljna vsota, nS kot najvecji summand
-----------------------------------------------------------------
ne uporabimo integerja za stetje, ampak vedno, ko dobimo ustrezno kombinacijo vrnemo 1. 

drugace vrnemo 0.

Vsakic, ko vrnemo 1, je potrebno izpisati kombinacije, za to potrebujemo dvodimenzionalno tabelo velikosti 30 tipa int;
-----------------------------------------------------------------*/

void printArray(stStevilk, t){
	for(int i = 0; i < stStevilk + 1; i++){
		printf("%d + ", t[i]);
	}
	i++;
	printf("%d\n", t[vrstica]);	
}

void Combinations(int cV, int nS, int* t, int stStevilk){
	
	if(cV == 0)
		printArray(krog, stStevilk, t);

	if(nS <= 0  || cV == 0)
		break;


	long z = findCombinations(cV - nS, nS, t, stStevilk++);
	long brez = findCombinations(cV, nS - 1, t, stStevilk);
}


int main(){

	int stStevilk;

	int* t = malloc(MAXN * sizeof(int));
	
	int cV, nS;
	scanf("%d%d", &cV, &nS);
	
	Combinations(cV, nS, stStevilk, t);

	return 0;
}

