#include <stdio.h>
int count = 0;

void poisciKombinacije(int n, int x, int y){
    if(x == n && y == 0){
        count++;
        return;
    }
    else{
        if(x + y == n)
            poisciKombinacije(n, x + 1, y - 1);
        else if(y == 0)
            poisciKombinacije(n, x + 1, y + 1);
        else{
            poisciKombinacije(n, x + 1, y - 1);
            poisciKombinacije(n, x + 1, y + 1);
        }
    }
}

int main(){
    int n;
    scanf("%d", &n);
    if(n % 2 == 0){
        poisciKombinacije(n, 0, 0);
        printf("%d\n", count);
    }
    else
        printf("0");
    
    return 0;
}