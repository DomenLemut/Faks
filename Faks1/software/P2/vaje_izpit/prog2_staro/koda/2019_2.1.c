#include <stdio.h>

int n;

int main(){
    char vhod [20];
    char izhod [20];
    FILE * read;
    FILE * write;

    scanf("%s", vhod);
    scanf("%d", &n);
    scanf("%s", izhod);

    printf("\n");

    read = fopen(vhod,"rb");

    if(read == NULL){
        return 1;
    }


    write = fopen(vhod,"w");

    
    
    return 0;
}