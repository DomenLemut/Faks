#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int n; int a; int b;
int count = 0;

bool* resetGrid(int round, bool * grid){
    if(round == 0){
            for(int j = 0; j < n; j++){
                grid[j] == false;
            }
        }
    return grid;
}

int jumps(int location, bool * grid, int round){
    while(round < n){

        grid = resetGrid(round, grid);        

        grid[location] = true;
        int i = a; 
        while(i <= b){
            if(location - i > 0 && !grid[location - i])
            {
                printf("start1");
                jumps(location - i, grid, round + 1);
                printf("end1");
            }
            if(location + i < n && !grid[location + i])
            {
                printf("start2");
                jumps(location + i, grid, round + 1);
                printf("end2");
            }

            i++;
        }
    }
    
    printf("%d", count);
    count++;
    return 1;
}

int main(){
    scanf("%d", &n);
    scanf("%d", &a);
    scanf("%d", &b);
    bool * grid;
    grid = malloc(n * sizeof(bool));

    jumps(0, grid, 0);

    printf("%d\n", count);

    return 0;
}