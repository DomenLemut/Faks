#include <stdio.h>

long fakulteta(int n){
    long out;
    for(int i = 2; i < n; i++)
        out *= i;

    return out;
}

long komBrezPon(int n, int k){
    if(k > n / 2)
        k = n - k;

    long out = 1;
    for(long i = 0; i < k; i++){
        out *= n - i;
        out /= i + 1;
    }

    return out;
}

long komZPon(int n, int k){
    return komBrezPon(n + k - 1, k);
}

int main(){
    printf("%ld\n", komZPon(5, 20));
    return 0;
}