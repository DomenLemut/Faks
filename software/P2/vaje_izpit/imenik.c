#include <stdio.h>

int main(){
    char *name;
    char *number;

    FILE *fp;

    fp = fopen("imenik.txt", "a");

    if(fp == NULL)
        return 0;
    
    printf("\n New contact name: ");
    scanf("%s", name);

    printf("\n New contact number: ");
    scanf("%s", number);
    
    fprintf(fp,"\n %s : [ %s ]", name, number);

    printf("%s", number);
    fclose(fp);
    return 0;
    
}


