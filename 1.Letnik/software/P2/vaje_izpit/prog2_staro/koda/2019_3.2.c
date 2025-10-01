#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int n;

char cmndToArrows(char ch){
    if(ch == 'G')
        return '/';
    else if(ch == 'D')
        return '\\';
    else 
        return ' ';
}

int main(){
    scanf("%d", &n);

    char commands [n];

    scanf("%s", commands);


    int pos = 0;
    int max = 0;
    int min = 0;
    
    for(int i = 1; i < n; i++){
        if(commands[i - 1] == commands[i] && commands[i] == 'G'){
            pos++;
            if(pos > max)
                max = pos;
        }

        else if(commands[i - 1] == commands[i] && commands[i] == 'D'){
            pos--;
            if(pos < min)
                min = pos;
        }

    }

    int size = abs(max - min) + 1;

    printf("size: %d, start: %d\n", size, max);

    char grid [n][size];

    for(int i = 0; i < n; i++){
        for(int j = 0; j < size; j++){
            grid[i][j] = ' ';
        }
    }

    grid[0][max] = cmndToArrows(commands[0]);
    int i = 1;
    while( i < n){
        if(commands[i - 1] == commands[i] && commands[i] == 'G'){
            max++;
        }
        else if(commands[i - 1] == commands[i] && commands[i] == 'D'){
            max--;
        }
        grid[i][max] = cmndToArrows(commands[i]);
        i++;
    }

    for(int h = 0; h < size; h++){
        for(int i = 0; i < n; i++){
            printf("%c", grid[i][h]);
        }
        printf("\n");
    }



    return 0;
}

/*
 0123456
0 /\/\
1/    \
2      \

*/