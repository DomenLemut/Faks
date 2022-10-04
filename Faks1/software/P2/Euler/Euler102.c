#include <stdio.h>
#include <stdbool.h>

float getFunction(int x1, int x2, int y1, int y2){
    float k = (y2 - y1) / (x2 - x1);
    float n = y1 - k * x1;
    float strtX = (y1 - n)/k;
    float strtY = k * x1 + n;
    printf("%f  %f\n", strtX, strtY);
    return strtX; 
}

int main(){
    // FILE *fp;

    // fp = fopen("imenik.txt", "r");

    // if(fp == NULL)
    //     return 0;
    
    // fread(fp, )

    // fclose(fp);
    int x1 = -340;
    int y1 = 495;
    int x2 = -153;
    int y2 = -910; 
    int x3 = 835;
    int y3 = -947;

    getFunction(2, 0, -1, 2);
    return 0;
}