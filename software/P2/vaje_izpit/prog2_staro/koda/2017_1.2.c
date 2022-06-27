#include <stdio.h>
#include <stdlib.h>

int main(){
    int num;
    int height;
    int moves;

    int move;
    int row;
    int currH;

    int sum = 0;

    int * rows;

    rows = malloc(num * sizeof(int));

    for(int i = 0; i < num; i++){
        rows[i] = height;
    }
    
    scanf("%d", &num);
    scanf("%d", &height);
    scanf("%d", &moves);

    for(int i = 0; i < moves; i++){
        scanf("%d", &move);
        row = move / height;
        currH = (move % height) + 1;
        printf("currH: %d row: %d move: %d rows[row]: %d\n", currH, row, move, rows[row]);

        sum = sum + rows[row] - currH;
        rows[row] = currH;
    }

    //free(rows);

    printf("%d\n", sum);

    return 0;
}