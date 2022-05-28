#include <stdio.h>
#include<stdbool.h>	

#define MAX 1000000
int zaporedje[MAX];

//nacin1 - pocasnejsi
int findBiggest1(int zaporedje[], int n){
	int vsota = 0;
	int maxVsota = zaporedje[0];
	for(int zacetek = 1; zacetek < n; zacetek++){
		for(int i = zacetek; i < n; i++){
			vsota += zaporedje[i];
		}
		if(vsota > maxVsota)
			maxVsota = vsota;
		vsota = 0;
	}
	return maxVsota;
}

//nacin1 - hitrejsi
int findBiggest2(int zaporedje[], int n){
	int vsota = 0;
	int maxVsota = zaporedje[0];
	
	return 0;
	
	
	

}

int main(){
	int n;
	int curr; //spremenljivka za zapis v tabelo
	int nacin;
	
	printf("Nacin 1(pocasnejsi) ali 2(hitrejsi): ");
	scanf("%d", &nacin);
	
	scanf("%d", &n);
	
	//vstavi v zeaporedje
	for(int i = 0; i < n; i++){
		scanf("%d", &curr);
		zaporedje[i] = curr;
	}
	
	if(nacin == 1)
		printf("vsota: %d", findBiggest1(zaporedje, n));
	else if(nacin == 2)
		printf("vsota: %d", findBiggest2(zaporedje, n));
	else
		printf("ERR");
	
}

