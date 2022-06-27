#include <stdio.h>

int main(){
    char * niz;
    niz = "Hakdsakfjhas l948357244 fajdfha 7312";
    char ch;
    int count = 0;
    int num = 0;
    int sum = 0;

    while(ch != '\0'){
        ch = niz[count];
        count++;
        while(ch - '0' >= 0 && ch - '0' <= 9){
            num *= 10;
            num += ch - '0';
            count++;
            ch = niz[count];
        }
        sum += num;
        num = 0;
    }

    printf("sum: %d\n", sum);

    return 0;
}