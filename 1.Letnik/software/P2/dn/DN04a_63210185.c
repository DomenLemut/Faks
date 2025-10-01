/*
██████╗ ██████╗  ██████╗  ██████╗     ██████╗  
██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗  
██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝  
██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝  
██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗  
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝ 

Domaca naloga 4a

status: finished
rating: 10 / 10

ime_priimek: Domen_Lemut
predmet: Programiranje 2
Fakulteta za racunalnistvo in informatiko
leto 2021/2022                                      
*/

#include <stdio.h>
#include <stdbool.h>

#define MAXN 1000
#define ERR -1

//define static arrays
int prvoZaporedje[MAXN];
int drugoZaporedje[MAXN];

void getArrayOne(int n){
	int trenutni;
	for(int i = 0; i < n; i++){
		scanf("%d", &trenutni);
		prvoZaporedje[i] = trenutni;
	}
}

void getArrayTwo(int n){
	int trenutni;
	for(int i = 0; i < n; i++){
		scanf("%d", &trenutni);
		drugoZaporedje[i] = trenutni;
	}
}

int findCommon(int n, int t1, int t2){
	int krogi = 0;
	int nt1; //new t1
	int nt2; //new t2

	while(t1 < n){
		nt1 = t1; nt2 = t2;
		while(prvoZaporedje[nt1] == drugoZaporedje[nt2]){
			if(krogi < n){
				nt1++; nt2++; krogi++;
				nt1 = nt1 % n; 
				nt2 = nt2 % n; 
			} else
				return t1;
		}
		krogi = 0;
		t1++;
	}
	return ERR;

}

int main(){
	//get array dimensions
	int n = 0;
	scanf("%d", &n);

	//scan into arrays
	getArrayOne(n);
	getArrayTwo(n);

	//calculate and print out result
	printf("%d \n", findCommon(n, 0, 0)); 
	
	return 0;
}
