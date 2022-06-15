//Towers of hanoi problem
#include <stdio.h>

long count = 0;

int remains(int a, int b){
    return 6 - a - b;
}

void p(int start, int end){
    printf("[%ld]:   %d --> %d\n", count, start, end);
    count++;
}

int hanoi(int n, int currP, int finP){
    int temp = remains(finP, currP);

    if(n == 1){
        p(currP, finP);
    } else{
        hanoi(n - 1, currP, temp);
        p(currP, finP);
        hanoi(n - 1, temp, finP);
    }
    return 0;
}

int main(){
    int n;
    
    printf("TOWERS OF HANOI SOLUTIONS\n-------------------------\n type number of rings: ");
    scanf("%d", &n);

    hanoi(n, 1 ,3);

    printf("\n\nnumber of steps required: %ld\n", count);
    return 0;
}
