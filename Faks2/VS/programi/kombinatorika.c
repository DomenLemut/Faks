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

void System(int type, int n, int k) {
    switch (type)
    {
    case 0:
        printf("kombinacije brez ponavljanja (%lu  %lu) => %lu\n", n, k, komBrezPon(n, k));
        break;
    case 1:
        printf("kombinacije z ponavljanjem (%lu  %lu) => % lu\n", n, k, komZPon(n, k));
        break;
    }
}

int main(){
    System(0, 14, 6);
    return 0;
}