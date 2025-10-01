#include <stdio.h>

int main(){
	int n = getchar() - '0';
	int a = getchar();
	for(int i = 1; i < n; i++){
		int b = a;
		int a = getchar();
		if(a != b){
			printf("0");
			return 0;
		} 
	}
	printf("1");
	return 0;
}
