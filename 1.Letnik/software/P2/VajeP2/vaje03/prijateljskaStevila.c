#include <stdio.h>

#define NIMA 0

int checkFRD(int number){
	int vsota = 0;
	for(int i = 1; i < number; i++){
		if(number % i == 0){
			vsota++;
		}
	}
	return vsota;
}

int frN(int currNum){
	int vsota1 = checkFRD(currNum);
	int vsota2 = checkFRD(vsota1); 
	if(vsota1 == vsota2)
		return vsota1;
	return NIMA;

}

int main(){
	int num1;
	
	scanf("%d", &num1);
	
	int output = frN(num1);
	
	if(output > 1){
		printf("%d", output);
		return 0;
	}
	
	else if(output == NIMA){
		putchar('N');
		putchar('I');
		putchar('M');
		putchar('A');
		return 0;
	}
	return 0;

}


