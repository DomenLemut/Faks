/*
██████╗ ██████╗  ██████╗  ██████╗     ██████╗  
██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗  
██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝  
██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝  
██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗  
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝ 

Domaca naloga 2b

status: not finished
rating: 

ime_priimek: Domen_Lemut
predmet: Programiranje 2
Fakulteta za racunalnistvo in informatiko
leto 2021/2022                                      
*/

#include <stdio.h>

#define ERR 10
#define NUM 12
#define LTR 13
#define BRK 14
#define SPC 15
#define EKS 16
#define ELSE 17


//checks character characteristics
int procChar(char character){
	if((character >= '0') && (character <= '9')){
		return character;
	}
	if(character >= 'A' && character <= 'F') return LTR;
	if(character == 10) return BRK;
	if(character == ' ') return SPC;
	if(character == 'x') return EKS;
	return ELSE;
	return ERR;
}

//pocisti vse do break ali space pove kaj je na koncu
int clear(){
	currChar = getchar();
	while(currChar != SPC && currChar != BRK)
		currChar = getchar()
	return(procChar(currChar));
}


//reads number char by char
int getNumber(){	
	currChar = procChar(getchar());
	if(currChar == BRK) return BRK;
	if(currChar == SPC) return SPC;
	
	//loop1
	if((currChar >= '1') && (currChar <= '9')){
		while(currChar != SPC || currChar != BRK){
			currChar = procChar(getchar());
			if(currChar == BRK) return BRK;
			if(currChar == SPC) return SPC;
			
			if((currChar > '0') && (currChar > '9'))
				return 0;
		}
		return 1;
	
	} 
	
	//loop2
	if(currChar == '0'){
		currChar = procChar(getchar());
		if(currChar == BRK) return BRK;
		if(currChar == SPC) return SPC;
		
		//subloop1
		if (currChar == EKS){
			while(currChar != SPC || currChar != BRK){
				currChar = procChar(getchar());
				if(currChar == BRK) return BRK;
				if(currChar == SPC) return SPC;
				
			    if(((currChar < '0') && (currChar > '9')) || currChar != LTR)
					return 0;
			}
		}
		
		//subloop2
		while ((currChar >= '0') && (currChar <= '7')){
		
			currChar = procChar(getchar());
			if(currChar == BRK) return BRK;
			if(currChar == SPC) return SPC;
			
			
			
		}
	
	
	}

}



int main(){

}

