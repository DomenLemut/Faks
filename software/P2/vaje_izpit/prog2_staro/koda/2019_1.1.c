#include <stdio.h>
#include <stdlib.h>
#include <string.h>
 
int main(){
    FILE* in;
    FILE* out;

    char curr;

//vhod----------------------------------
    char datIn [] = "vhod06.txt";
    char datOut [] = "hello";
    char ch = 'C';
    // scanf("%s\n%s\n%c", datIn, datOut, &ch);
    // printf("%s", datIn);
//--------------------------------------

    in = fopen(datIn, "r");
    out = fopen(datOut, "w");

    if (in == NULL) {
        printf("file can't be opened \n");
        return 0; 
    }

    char a = fgetc(in);
    char b;
    for(int i = 0; i < 1000; i++){
        b = a;
        a = fgetc(in);
        if(b == '\n' && a != ch){
            curr = a;
            while(curr != '\n'){
                fprintf(out,"%c", curr);
                curr = fgetc(in);
            }
            break;
        }
    }

    printf("successful!!\n");

    fclose(in);
    fclose(out);
    return 0;
}