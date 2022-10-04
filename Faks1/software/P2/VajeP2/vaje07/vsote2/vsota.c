/*
██████╗ ██████╗  ██████╗  ██████╗     ██████╗  
██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗  
██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝  
██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝  
██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗  
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝ 

Vaje 7.1                                  
*/

#include <stdio.h>
#include <stdbool.h>

#define MAXN 400 //range spremenljivke n (1 - 400)
#define MAXK 400 //range spremenljivke k (1 - n)
//najvecje stevilo kombinacij ~ 9,223,372,036,854,775,807 (max long!!)


/*
cV kot ciljna vsota, nS kot najvecji summand
-----------------------------------------------------------------
ne uporabimo integerja za stetje, ampak vedno, ko dobimo ustrezno kombinacijo vrnemo 1. 

drugace vrnemo 0.
-----------------------------------------------------------------*/
long findCombinations(int cV, int nS){
	
	if(cV == 0 && nS >= 0)
		return 1;
	if(nS <= 0  || cV == 0)
		return 0;


	long z = findCombinations(cV - nS, nS);
	long brez = findCombinations(cV - 1);

	return z + brez;
	
}


int main(){
	int cV, nS;
	scanf("%d%d", &cV, &nS);
	
	//stetje in izpis
	long stNacinov = findCombinations(cV, nS); //stetje kombinacij
	printf("%ld", stNacinov);
}

