#include <stdio.h>
#include <time.h>
#include <unistd.h>

#define STEVILO_OTROK 3

int main(int argc, char * argv[]){
	int otroci [STEVILO_OTROK];
	for(int i = 0; i < STEVILO_OTROK; i++) {
		otroci[i] = fork();
	}

	for(int i = 0; i < 10; i++) {
		printf("*");
		sleep(1);
	}	
	printf("\n");
}
	
