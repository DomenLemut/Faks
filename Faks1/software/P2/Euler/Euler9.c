#include <stdio.h>
#include <stdbool.h>

void pythagoreanTriplets(int sum)
{
 
    int a, b, c = 0;
 
    int m = 2;

    while (true){
        for(int n = 1; n < m; ++n) {

            a = m * m - n * n;
            b = 2 * m * n;
            c = m * m + n * n;
 			
            if(a + b + c == sum){
                printf("a: %d b: %d c: %d\n", a, b, c);
                printf("[a * b * c]: %d\n", a*b*c);
                return;
            }
            
        }
        m++;
    }
}
 
// Driver Code
int main(){
    pythagoreanTriplets(1000);
    return 0;
}
