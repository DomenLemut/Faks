/*
██████╗ ██████╗  ██████╗  ██████╗     ██████╗  
██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗  
██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝  
██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝  
██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗  
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝ 

Domaca naloga 1b

status: finished
rating: 6 / 10

ime_priimek: Domen Lemut
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

int procChar(char character){
	if((character >= '0') && (character <= '1')){
		return (character - '0');
	}
	
	if(character == 10) return CR;
	if(character == ' ') return SPC;
	if(character == '-') return NEG;
	return ERR;
}

int getNumber(){	


	int num = 0;
	int curr_dig;
	
	//dolocitev predznakac
	
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

	return num;
	
}


int logaritem(int number){
	int x = 0;
	int num = 1;
	while(num < number){
		x++;
		num = 2 * num;
		
	}
	return x;
}

int convertToDecimal(int num){

	int binary_num, decimal_num = 0, base = 1, rem;  
	binary_num = num;
	
	while ( num > 0){  
        rem = num % 10; 
        decimal_num = decimal_num + rem * base;  
        num = num / 10; 
        base = base * 2;  
    }  
    return decimal_num;
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
	int binNum = getNumber();
	int decNum = convertToDecimal(binNum);
	printOut(logaritem(decNum));
	
	return 0;
}

