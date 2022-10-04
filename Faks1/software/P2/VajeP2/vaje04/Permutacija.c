#include <stdio.h>
#include<stdbool.h>	

#define MAX 1000000
bool check[MAX];

	
int checkIfIn(int max){
	int curr;
	int count = 0;
	do{
		scanf("%d", &curr);
		
		if(curr >= max || curr < 0)
			return 0;
			
		else if(check[curr] == true)
			return 0;
			
		check[curr] = true;
		count++;
		
		
	}while(count < max);
	
	return 1;
}

int main(){
	int maxMnozica;
	int output;
	
	scanf("%d", &maxMnozica);
	output = checkIfIn(maxMnozica);
	
	if(output == 1){
		putchar('D');
		putchar('A');
		//printf("DA");
	}
	else if(output == 0){
		putchar('N');
		putchar('E');
	}	
	else{
		putchar('E');
		putchar('R');
		putchar('R');
	}
	

return 0;
}



