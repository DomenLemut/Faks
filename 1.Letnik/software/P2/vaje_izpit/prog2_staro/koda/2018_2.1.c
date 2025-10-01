#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int n;

int read(int sum, int i, int numOfPlus, int distance, bool plus){
    char temp;
    scanf("%c", &temp);
    if(plus){
        if(temp == '-'){
            distance++;
        }
        else{
            if(temp != '\n')
                sum += distance;
            plus = false;
        }
    }
    else if(temp == '+'){
        distance++;
        numOfPlus++;
        plus = true;
    }
    if(i < n){
        read(sum, i + 1, numOfPlus, distance, plus);
    }
    else{
        printf("%d\n", sum / numOfPlus);
    }
}


int main(){
    scanf("%d", &n);

    read(0, 0, 0, 0, false);
    return 0;
}