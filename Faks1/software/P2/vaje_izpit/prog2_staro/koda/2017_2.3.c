#include <stdio.h>
#include <stdbool.h>

int n;
int count = 1;

char reverseBraces(char braces){
    if(braces == '(')
        return ')';
    else if(braces == '{')
        return '}';
    else if(braces == '[')
        return ']';
    else return '0';
}

bool frontBraces(char ch){
    if(ch == '(' || ch == '{' || ch == '[')
        return true;
    return false;
}

int findIfCorrect(char * string, char search){
    if(count < n){
        if(frontBraces(string[count])){
            count++;
            findIfCorrect(string, string[count - 1]);
        }   
        else{
            if(string[count] == reverseBraces(search))
                count++;
                if(count < n - 1){
                    findIfCorrect(string, string[count]);
                }
                else if(count >= n - 1)
                    return 1;
            return 0;
        }
    }
    return 0;
}

int main(){
    // scanf("%d", &n);

    char string [3]= "{}(";

    n = 3;
    
    printf("%d\n", findIfCorrect(string, string[0]));

    return 0;
}

// {[]}()