#include <stdio.h>


// 132 => 231
int obrni(int primNum){
	int maxPivot = 1;
	while(maxPivot * 10 <= primNum)
		maxPivot *= 10;
	
	//ustvari obrnjeno stevilo
	int newNum = 0;	
	
	while(maxPivot >= 1){
		newNum += maxPivot * (primNum % 10);
		primNum /= 10;
		maxPivot /= 10;
	}
	
	return newNum;
}

int jePalindrom(int primNum){
	return obrni(primNum) == primNum;
}

int jelychrelovo(int primNum, int cicles){
	for(int count = 0; count < cicles || jePalindrom(primNum) == 1; count++){
		primNum += obrni(primNum);
	}

}

int main(){
	printf("%d", jePalindrom(13321));


}
