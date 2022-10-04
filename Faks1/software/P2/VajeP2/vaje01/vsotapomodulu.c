#include <stdioh>

int main(){
	int a = getchar() - '0';
	getchar();
	int b = getchar() - '0';
	
	int vsota = (a + b) % 10;
	
	putchar(vsota + '0');
	putchar('\n');

	return 0;
}
