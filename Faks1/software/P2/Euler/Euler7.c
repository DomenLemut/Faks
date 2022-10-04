#include <stdio.h>
#include <stdbool.h>

int sq(int num){
    int i = 1;
    while(i * i <= num) i++;
    return i - 1;
}

int main(){
    int n = 1000000;
    bool sestavljeno [n + 1];

    int meja = sq(n);
    int p = 2;
    while (p <= meja){
        for (int i = 2 * p;  i <= n;  i += p) {
            sestavljeno[i] = true;
        }
        p++;
        while(sestavljeno[p]){
            p++;
        };
    }

    int count = 0;
    for (int i = 2;  i <= n;  i++) {
        if (!sestavljeno[i]) {
            count++;
            if(count == 10001){
                printf("%d\n", i);
            }
        }
        
    }
    return 0;
}