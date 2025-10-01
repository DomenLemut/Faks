#include <stdio.h>

typedef struct Oseba Oseba;

struct Oseba {
    // oseba s podanim imenom in starostjo
    char* ime;
    // zaporedje do 20 črk angleške abecede
    int starost;
};


void printOseba(struct Oseba oseba){
    printf("{%s, %d}\n", oseba.ime, oseba. starost);
}

void uredi(Oseba** osebe, int n){
    
}

int main(){
    struct Oseba Oseba1;
    struct Oseba Oseba2;

    Oseba1.starost = 12;
    Oseba1.ime = "Matej";

    struct Oseba *struct_pointer;

    struct_pointer = &Oseba1;

    printOseba(Oseba1);
    printOseba(Oseba2);

    return 0;
}