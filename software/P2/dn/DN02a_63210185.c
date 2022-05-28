/*
██████╗ ██████╗  ██████╗  ██████╗     ██████╗  
██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗  
██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝  
██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝  
██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗  
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝ 

Domaca naloga 2a
status: not finished
rating: 

ime priimek: Domen Lemut
predmet: Programiranje 2
Fakulteta za racunalnistvo in informatiko
leto 2021/2022                                      
*/

#include <stdio.h>

#define ERR 11
#define BRK 12
#define SPC 13
#define ZER 14
#define CHR 15
#define NEG 16
#define POZ 17

#define NCORRECT 18
#define CORRECT 19
#define END 20
#define START 21

//checks character characteristics
int procChar(char character){

	if((character >= '1') && (character <= '9')){
		return CHR; 
	} //Digits 1 - 9
	
	if(character == '0') return ZER; //Zero
	if(character == 10) return BRK;  //Break
	if(character == ' ') return SPC; //Space
	if(character == '-') return NEG; //Minus
	if(character == '+') return POZ; //Plus
	
	return ERR; //every other character
}


/*
NCORRECT for not correct form
CORRECT for correct form
ERR for error
END for end of program
*/
int checkForm(){	

	int curr_dig;	
	int first = 1; //a je to prvi read?
	
	do{
		curr_dig = procChar(getchar());
		
		if(curr_dig == NEG || curr_dig == POZ){
			if(first = 0)
				return NCORRECT;
			first = 0;
		}
			
		else if(curr_dig == SPC)
			return CORRECT;
			
		else if(curr_dig == ZER){
			if(first == 1)
				return NCORRECT;
		}
		
		else if(curr_dig == ERR)
			return NCORRECT;

		first = 0;
			
		
		
	}while(curr_dig != BRK);
	
	return END;
	
	
	
}

int main(){
	int curr_check = START;
	do {
		if(curr_check == CORRECT)
			putchar('1');
			
		else if(curr_check == NCORRECT)
			putchar('0');
			
		else if(curr_check == ERR){
			putchar('E');
			putchar('R');
			putchar('R');
		}
		
		curr_check = checkForm();
		
			
	} while(curr_check != END);
	
	return 0;
		
}
