/*
██████╗ ██████╗  ██████╗  ██████╗     ██████╗  
██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗  
██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝  
██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝  
██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗  
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝ 

Domaca naloga 7b
status: not finished
rating: 

ime_priimek: Domen_Lemut
predmet: Programiranje 2
Fakulteta za racunalnistvo in informatiko
leto 2021/2022                                      
*/

#include <stdio.h>
#include <stdbool.h>

#define MAXNCHAR 100
#define MAXKCHAR 42
#define NL -1
#define ERR -2


char tabelaZnakov [MAXKCHAR][MAXNCHAR]; //tabela za zapisovanje nizov
int current[MAXNCHAR]; //tabela za zapisovanje trenutnega nahajanja


//range characterjev obsega od 33 do 126
int procChar(char c){
    if(c == 10)
        return NL;
    else if(c > 126 && c < 33)
        return ERR;
    return c;
}

//prebere vhod
void getNizi(int n, int vrstica){
    char curr;
    for(int i = 0; i < n; i++){
        curr = procChar(getchar());
        if(curr == NL){
            vrstica++;
            if(vrstica >= n)
                break;
            getNizi(n, vrstica); 
            /*ce je konec vrstice ali pa je vhod neveljaven skoci
             v naslednjo vrstico in rekurzivno klice zapisovanje v naslednji vrstici*/
        } /*else if(curr == ERR){
            return false;
        }
        */
        tabelaZnakov[vrstica][i] = curr;
    }
}

//izpise vse kombinacije znakov
void printOutCombinations(int n){
    int vrstica = 0;
    int znak = 0;
    
}


int main(){
    int n;
    scanf("%d", &n);
    getNizi(n, 0);
    printOutCombinations(n);

    return 0;
}