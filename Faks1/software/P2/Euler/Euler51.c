
/*NAVODILA:

By replacing the 1st digit of the 2-digit number *3,
it turns out that six of the nine possible values: 13,
23, 43, 53, 73, and 83, are all prime. By replacing
the 3rd and 4th digits of 56**3 with the same digit,
this 5-digit number is the first example having seven
primes among the ten generated numbers, yielding the 
family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993.

Consequently 56003, being the first member of this family,
is the smallest prime with this property.

Find the smallest prime which, by replacing part of the
number (not necessarily adjacent digits) with the same
digit, is part of an eight prime value family.
*/


#include<stdio.h>
#include<stdlib.h>
#include<stdbool.h>

int sq(int num){
    int i = 1;
    while(i * i <= num) i++;
    return i - 1;
}

int toInt(char* nizC, int nizLen, int* novi){
    int niz = 0;
    int exp = 1;
    int noviP = 0;

    for(int i = 0; i < nizLen; i++){
        int curr = nizLen - i - 1;
        if(nizC[curr] == '*'){
            niz += novi[noviP] * exp;
            noviP++;
        } else if(nizC[curr] - '0' < 10 && nizC[curr] - '0' > 0)
            niz += (nizC[curr] - '0') * exp;
        exp *= 10;
    }
    return niz;
}

void findPrime(){
    char* nizC = "92285**";
    int nizLen = 7;

    int novi [2];

    //najmanjse stevilo
    for(int i = 0; i < 2; i++)
        novi[i] = 0;
    int prvi = toInt(nizC, nizLen, novi);
    //najvecje stevilo
    for(int i = 0; i < 2; i++)
        novi[i] = 9;
    int zadnji = toInt(nizC, nizLen, novi);


    // int n = zadnji;
    // bool sestavljeno [n + 1];

    // int meja = sq(n);
    // int p = 2;
    // while (p <= meja){
    //     for (int i = 2 * p;  i <= n;  i += p) {
    //         sestavljeno[i] = true;
    //     }
    //     p++;
    //     while(sestavljeno[p]){
    //         p++;
    //     };
    // }

    // for (int i = 2;  i <= n;  i++) {
    //     if (!sestavljeno[i]) {
    //         printf("%d\n", i);
    //     }
    // }

    printf("[range]: %d - %d\n", prvi, zadnji);
}

int main() {
    findPrime();
    return 0;
    
}
