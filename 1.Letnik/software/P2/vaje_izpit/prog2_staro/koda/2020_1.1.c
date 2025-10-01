#include <stdio.h>


void obrni(FILE * vhod, FILE * izhod){

    char ** lines;

    char curr;
    int line;
    int pos;
    curr = getline(vhod);
    while(curr != '\0'){
        lines[line][curr];
        curr = fgets(vhod);
        pos++;
        if(curr == '\n'){
            printf("new line!");
            line++; pos = 0;
        }
    }
    printf("konec dokumenta");


}

int main(){
    FILE * vhod;
    FILE * izhod;
    vhod = fopen("vhod", "r");
    izhod = fopen("izhod", "w");
    obrni(vhod, izhod);

    return 0;
}

/*

O, Vrba!
srecna,
draga vas
domaca ...

    |
    |
    v

domaca ...
draga vas
srecna,
O, Vrba!

*/