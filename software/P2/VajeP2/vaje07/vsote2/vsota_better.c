/*
██████╗ ██████╗  ██████╗  ██████╗     ██████╗  
██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗  
██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝  
██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝  
██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗  
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝ 

Vaje 7.1_optimised                     
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


OPTIMISED:

razlika med prvo verzijo programa in tem programom je, da si v tem programu za hitrejse rcunanje shranimo rezultate ze rekurzivno klicanih funcij.
-----------------------------------------------------------------*/

long MEMO[401][401]; //tabela za hranjenje rezultatov funkcij
bool SMO_ZE[401][401]; //tabela za hranjenje logicne vrednosti, a je funkcija koncna

long findCombinations(int cV, int nS){
	
	if(cV == 0 && nS >= 0)
		return 1;
	if(nS <= 0  || cV == 0)
		return 0;
	if(SMO_ZE[cV][nS])
		return MEMO[cV][nS];
	
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

