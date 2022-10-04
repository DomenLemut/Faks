#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int reverseCommand(int command){
    return ((command + 2) % 4);
}

int x; int y;


int main(){
    int count;
    scanf("%d", &x);
    scanf("%d", &y);


    int tempX; int tempY;

    int* arr [x];
    for (tempX = 0; tempX < x; tempX++)
        arr[tempX] = (int*)malloc(y * sizeof(bool));
 
    count = 0;

    for (tempX = 0; tempX < x; tempX++)
        for (tempY = 0; tempY < y; tempY++)
            arr[tempX][tempY] = ++count;

    for (tempX = 0; tempX < x; tempX++)
        for (tempY = 0; tempY < y; tempY++)
            scanf("%d", &arr[tempX][tempY]);
            printf("%d\n", arr[tempX][tempY]);
        



    return 0;
}