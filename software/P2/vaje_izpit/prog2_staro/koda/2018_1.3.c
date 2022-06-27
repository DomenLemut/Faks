#include <stdio.h>
#include <stdlib.h>

int n;
int razlika;

int kombinacije(int currPos, int currSum, int * stevila, int povprecje){
    if(currSum < povprecje ){
        if(razlika > povprecje - currSum)
            razlika = povprecje - currSum;
        return 0;
    }
    kombinacije(currPos + 1, currSum + stevila[currPos + 1], stevila, povprecje);
    if(currPos < n - 1){
        currPos++;
        kombinacije(currPos, currSum - stevila[currPos - 1], stevila, povprecje);
    }
    
}

int main(){
    scanf("%d", &n);

    //tabela stevil
    int * stevila;
    stevila = malloc(n * sizeof(int));

    int povprecje = 0;
    for(int i = 0; i < n; i++){
        scanf("%d", &stevila[i]);
        povprecje += stevila[i];
    }

    razlika = povprecje;
    povprecje /= 2;

    kombinacije(0, stevila[0], stevila, povprecje);

    printf("%d\n", razlika);

    return 0;
}