#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Oseba Oseba;

struct Oseba {
    // oseba s podanim imenom in starostjo
    char* ime;
    // zaporedje do 20 črk angleške abecede
    int starost;
};

void printOsebe(Oseba ** o, int n){
    for(int i = 0; i < n; i++){
        printf("%s, %d\n", (*o)[i].ime, (*o)[i].starost);
    }
}


int main(){
    Oseba* o = malloc(6 * sizeof(Oseba));
    o[0].ime = "Ana";
    o[0].starost = 29;

    o[1].ime = "Hana";
    o[1].starost = 27;

    o[2].ime = "Nik";
    o[2].starost = 72;

    o[3].ime = "Blaz";
    o[3].starost = 34;

    o[4].ime = "Lucija";
    o[4].starost = 18;

    o[5].ime = "Tomaz";
    o[5].starost = 20;

    printOsebe(&o, 6);
}