/*
██████╗ ██████╗  ██████╗  ██████╗     ██████╗  
██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗  
██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝  
██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝  
██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗  
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝ 

Domaca naloga 4b

status: finished
rating: 5 / 10 (has been fixed since)

ime_priimek: Domen_Lemut
predmet: Programiranje 2
Fakulteta za racunalnistvo in informatiko
leto 2021/2022                                      
*/

#include <stdio.h>
#include <stdbool.h>

#define MAXN 5000000
#define MAXK 1000000000

int zaporedje[MAXN] = {0};

void readAsc(int n){
	int curr;
	scanf("%d", &curr);
	zaporedje[curr]++;
	//minV = curr;

	for(int i = 1; i < n; i++){
		scanf("%d", &curr);
		zaporedje[curr]++;
	}
	//maxV = zaporedje[curr - 1];
}

int findCombinations(int n, int k){
	int combinations = 0;

	//set left and right pointer
	int lP = 1;
	int rP = k - 1;

	if(k % 2 == 0){
		int act = zaporedje[k / 2];
		combinations += (act * (act - 1)) / 2;
	}

	while(lP < rP){
		combinations += zaporedje[lP] * zaporedje[rP];
		lP++; rP--;
	}

	return combinations;	
}

int main(){
	// scan default values
	int n;
	int k;
	scanf("%d", &n);
	scanf("%d", &k);

	//get zaporedje
	readAsc(n);
	printf("%d \n",findCombinations(n, k));
	
	return 0;
}


