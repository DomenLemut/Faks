#include <stdio.h>
#include <stdlib.h>
#include <string.h>
 
int main()
{
    FILE* ptr;
    char ch;
    char* chStr;
 
    // Opening file in reading mode
    ptr = fopen("vhod06.txt", "r");
 
    if (ptr == NULL) {
        printf("file can't be opened \n");
        return 0;
    } else
        printf("content of this file are: \n");
 
    for(int i = 0; i < 50; i++){
        ch = fgetc(ptr);
        (&chStr + i*sizeof(char)) = ch;
        printf("%c", ch);
    }
    printf("\n");

    // fclose(ptr);
    return 0;
}