#include <stdio.h>


int main(){
    unsigned char buffer[10];
    FILE *ptr;

    //open
    ptr = fopen("test.bin","ab");

    FILE *write_ptr;

    fwrite(buffer,sizeof(buffer),1,write_ptr); // write 10 bytes from our buffer


    //read
    fread(buffer,sizeof(buffer),1,ptr); 

    for(int i = 0; i<10; i++)
        printf("%u ", buffer[i]);

    return 0;
    
}

