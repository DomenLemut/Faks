#include <stdio.h>

int main() {
	int zacetek, konec; 
	
	scanf("%d %d",&zacetek, &konec);
    
	int steviloTrojic = 0;
	
	for(int counter = zacetek; counter <= konec; counter++){
		for(int p1 = counter + 1; p1 > 0; p1++){
			int p2 = c * c - a * a;
			int p = round(sqrt(p2));
			if(p * p == p2){
				counter++;
				break;
			}
		}
	}
	
	printf("%d\n", steviloTrojic);
	return 0;


}


