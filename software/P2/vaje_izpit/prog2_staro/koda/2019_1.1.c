#include <stdio.h>

int main(){
    // char * open;
    // // char * write;
    // char theChar;

    // //scanf("%c", open);
    // // scanf("%c", write);
    // // scanf("%c", &theChar);
    // open = "vhod06.txt";

    // FILE * in;
    // // FILE *out;

    // // if(in == NULL || out == NULL){
    // //     printf("Error!"); 
    // //     return 0;
    // // }
    

    // in = fopen(open,"r");
    // // out = fopen(write,"w");

    // fscanf(in, "%c", &theChar);

    // printf("%d", theChar);
    // return 0;

    FILE *inputFile;

    inputFile = fopen("vhod06.txt", "r");

    //finds the end of the file
    fseek(inputFile, 0, SEEK_END);

    //stores the size of the file
    int size = ftell(inputFile);

    char documentStore [size];

    int i = 0;

    //stores the contents of the file on documentstore
    while(feof(inputFile))
    {
        documentStore[i] = fgetc(inputFile);
        i++;
    }

    //prints out char
    for (int j = 0; j < size; j++)
    {
        printf("%c", documentStore[j]);
    }

    return 0;
}
