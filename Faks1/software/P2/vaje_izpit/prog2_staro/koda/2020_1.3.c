#include <stdio.h>

void Kombinacije(int n, int * stevila, int k, int start){
    if(n - k <= 1){
        if(k > 1){
            for(int dont = n - 1; dont >= 1; dont--){
            printf("{");
            for(int i = 0; i < n; n++){
                if(i != dont)
                    printf("%d ", stevila[i]);
            }   
            printf("}");
            }
        }
        
    }
    else{
        for(int i = 0; i < n - k; i++)
            Kombinacije(k + 1, stevila, k, i);
        Kombinacije(k, stevila, k, n - k);
    }
}

int main(){
    int n;
    int * stevila;

    scanf("%d", &n);
    for(int i = 0; i < n; i++){
        scanf("%d", &stevila[i]);
    }

    for(int kom = 0; kom <= n; kom++){
        Kombinacije(n, stevila, kom, 0);
    }

    return 0;
}

/*
Napišite program, ki prebere celo število n P r1, 20s (prva vrstica vhoda) in množico n medsebojno
različnih celih števil z intervala r [-10⁹, 10⁹] s (druga vrstica vhoda) in izpiše vse njene podmnožice.
Podmnožice in njihove elemente lahko izpišete v poljubnem vrstnem redu. Vsako podmnožico
izpišite v svoji vrstici. Podmnožico z elementi a 1 , a 2 , . . . , a k izpišite kot {a 1 , a 2 , ..., a k }.
Sledi primer vhoda in pripadajočega izhoda:

3
2 7 1

{}
{1}
{7}
{7, 1}
{2}
{2, 1}
{2, 7}
{2, 7, 1}
*/