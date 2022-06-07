#include <stdio.h>

int main(){
    int a = 1000;
    int b = 2000;
    int c = 3000;
    int d = 4000;
    printf("%p\n%p\n%p\n%p", &a, &b, &c, &d);
    return 0;
}