#include <stdio.h>

int main(){
    char * open;
    char * write;
    char theChar;

    scanf("%c", open);
    scanf("%c", write);
    scanf("%c", &theChar);


    FILE *in;
    FILE *out;

    if(in == NULL || out == NULL){
        printf("Error!"); exit(1);
    }

    in = fopen(open,"r");
    out = fopen(write,"w");


    return 0;
}
