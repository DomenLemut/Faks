#include <stdio.h>

int main(){
	int najvecje = 0;
	int drugoNajvecje = 0;
	int dolzinaZaporedja = getchar() - '0';
	
	for(int stevec = 0; stevec < dolzinaZaporedja; stevec++){
		int ternutnoStevilo = getchar() - '0';
		if(trenutnoStevilo > drugoNajvecje){
			if(trenutnoStevilo > najvecje){
				drugoNajvecje = najvecje;
				najvecje = trenutnoStevilo;
			} 
			else drugoNajvecje = trenutnoStevilo;
			
		} 
	}
	putchar(drugoNajvecje + '0');
	return 0;
}
