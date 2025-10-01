#include <stdio.h>
#include <stdbool.h>

#define DIM 8

bool tabela [DIM][DIM];
int moves;

void move(int x, int y, int n, int count, int * commands){
    tabela[x][y] = true;
    while(count < n){
        if(commands[count] == 1){
            if(y + 1 < DIM) 
                y += 1;
        }
        else if(commands[count] == 2){
            if(x + 1 < DIM) 
                x += 1;
        }
        else if(commands[count] == 3){
            if(y - 1 >= 0) 
                y -=1; 
        }
        else if(commands[count] == 0){
            if(x + 1 >= 0) 
                x -= 1;
        }
            
        count += 1;
        move(x, y, n, count, commands);
    }
}

void printOut(){
    for(int y = 7; y >= 0; y--){
        for(int x = 0; x < DIM; x++){
            printf("%d", tabela[x][y]);
        }
        printf("\n");
    }
    printf("\n");
}

int number(){
    int sum = 0;
    int count = 1;
    for(int y = 0; y < DIM; y++){
        for(int x = 7; x >= 0; x--){
            if(tabela[x][y]){
                //printf("[x: %d, y: %d] -> %d\n", x, y, count);
                sum += count;
            }       
            count *= 2;
        }
    }
    return sum;
}

int main(){
    int n;
    scanf("%d", &n);
    int * commands;

    for(int i = 0; i < n; i++){
        scanf("%d", &commands[i]);
    }

    move(7, 0, n, 0, commands);
    printOut();
    printf("%d\n", number());


    return 0;
}

/*
Primer:

9
0 1 0 0 3 3 1 2 1

*/
