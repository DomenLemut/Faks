/*
██████╗ ██████╗  ██████╗  ██████╗     ██████╗  
██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗  
██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝  
██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝  
██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗  
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝  */

#include <stdio.h>
#include <stdlib.h>

/*
//stevilo pove pozicijo kraljice v n vrstici
int [n];
*/
//DN da dela brez rekurzije

int main(int argc, char *argc[]){
    int n;
    if(argc < 2) exit(1);
    //scan from string
    sscanf(args[1], "%d", &n);
    int *cols = (int*)malloc(n*sizeof(int));
    printf("%d\n", queens(cols, 0, n));


}

int queens(int cols[], int i, int n){
    if(i == n){
        // D.N. izpisi desko na zaslon
        return 1;
    } else {
        int all = 0;
        //poskusimo v vsaki vrstici stolpca i
        for(int j = 0; j < n; j++){ 
            int ok = 1;
            for(int k = 0; k < i; k++){
                if(cols[k] == j)
                    ok = 0;
                if(abs(i - k) == abs(j - cols[k]))
                    ok = 0;
            }
            if(ok){
                cols[i] = j;
                all += queens(cols, i + 1, n);
            } 
            return all;
        }
    }


}