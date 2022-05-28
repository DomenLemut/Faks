/*
██████╗ ██████╗  ██████╗  ██████╗     ██████╗  
██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗  
██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝  
██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝  
██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗  
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝ 

Domaca naloga 1a

status: finished
rated: 10 / 10

ime_priimek: Domen_Lemut
predmet: Programiranje 2
Fakulteta za racunalnistvo in informatiko
leto 2021/2022                                      
*/

#include <stdio.h>

#define ERR 11
#define CHR 12
#define CR 13
#define SPC 14
#define NEG 15


//checks if character is digit
int procChar(char character){
	if((character >= '0') && (character <= '9')){
		return (character - '0');
	}
	
	if(character == 10) return CR;
	if(character == ' ') return SPC;
	if(character == '-') return NEG;
	return ERR;
}

//reads number char by char
int getNumber(){	


	int num = 0;
	int curr_dig;
	
	//dolocitev predznakac
	int predznak = 1;
	
	do{
		curr_dig = procChar(getchar());
		if (curr_dig < ERR)
			num = num * 10 + curr_dig;
		else if (curr_dig == NEG)
		  	predznak = -1;
		else if (curr_dig == ERR){
			putchar('E');
			putchar('R');
			putchar('R');
			num = 0;
			break;
		}
	} while((curr_dig != CR) && (curr_dig != SPC));

	num = num * predznak;
	return num;
	
}



void printOut(int number) {

    if (number < 0) {
        putchar('-');
        number = number * -1;
	}
	
    if (number / 10) printOut(number / 10);
  
    putchar(number % 10 + '0');
}


int main(){
	int num1 = getNumber();
	int num2 = getNumber();
	printOut(num1 + num2);
	
	return 0;
}

