#include <stdio.h>

int main(){
	int a, b; 
	int zacetek, konec;
	scanf("%d %d", &a, &b);

	int mirko;
	
	scanf("%d", &mirko);
	while(mirko != 0){
	
		if(mirko == 1) zacetek = ((zacetek + konec) / 2) + 1;

		if(mirko == -1) konec = ((zacetek + konec) / 2) - 1;
		
		if(zacetek == konec) printf("%d", zacetek); break;
		
		if(zacetek - konec <= 1){
			zacetek - konec == 0;
		}
		
		scanf("%d", &mirko);
	}
	if(zacetek == konec) printf("%d", zacetek);

	if(konec < zacetek) printf("%d %d", zacetek, konec);
	
	else printf("%d" "Protislovje");
	
	return 0;
}

