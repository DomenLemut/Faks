
# C in fajli cheatsheet

## 1. POINTER
```c
FILE *fptr;
```
When working with files, you need to declare a pointer of type file. This declaration is needed for communication between the file and the program.
</br>
</br>

## 2. OPEN
```c
ptr = fopen("fileopen","mode");
```
Opening a file is performed using the fopen() function defined in the stdio.h header file.

## 3. CLOSE
    fclose(fptr);

## 4. EXAMPLE

```c
fopen("E:\\cprogram\\oldprogram.bin","rb");
```

<br><br><br>
# 'fread' and 'fwrite' Syntax
<div style = "font-size=30px">
 
```c
fread(addressData, sizeData, numbersData, pointerToFile);
```

</div>

<br><br><br><br>


|Mode | Meaning of Mode | During Inexistence of file |
|:----|:----------------|:---------------------------|
| r  | Open for reading. | If the file does not exist, fopen() returns NULL. |
| rb | Open for writing. | If the file does not exist, fopen() returns NULL. |
| w  | Open for writing. | If the file exists, its contents are overwritten. If the file does not exist, it will be created. |
| wb | Open for writing in binary mode. | If the file exists its contents are overwritten.If the file does not exist, it will be created. |
| a  | Open for append. | If the file does not exist, it will be created. |
| ab | Open for append in binary mode. | If the file does not exist, it will be created. |
| r+ | Open for both reading and writing. | If the file does not exist, fopen() returns NULL. |
| rb+| Open for both reading and writing. | If the file does not exist, fopen() returns NULL. |
| w+ | Open for both reading and writing. | If the file exists, its contents are overwritten.If the file does not exist, it will be created. |
| wb+| Open for both reading and writing in binary mode. | If the file exists, its contents are overwritten.If the file does not exist, it will be created. |
| a+ | Open for both reading and appending. | If the file does not exist, it will be created. |
| ab+| Open for both reading and appending in binary mode. | If the file does not exist, it will be created. |

<br><br><br><br>

## Write example:
```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
   int num;
   FILE *fptr;

   // use appropriate location if you are using MacOS or Linux
   fptr = fopen("C:\\program.txt","w");

   if(fptr == NULL)
   {
      printf("Error!");   
      exit(1);             
   }

   printf("Enter num: ");
   scanf("%d",&num);

   fprintf(fptr,"%d",num);
   fclose(fptr);

   return 0;
}
```
## Write example:
```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
   int num;
   FILE *fptr;

   // use appropriate location if you are using MacOS or Linux
   fptr = fopen("C:\\program.txt","w");

   if(fptr == NULL)
   {
      printf("Error!");   
      exit(1);             
   }

   printf("Enter num: ");
   scanf("%d",&num);

   fprintf(fptr,"%d",num);
   fclose(fptr);

   return 0;
}
```

## Read example:
```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
   int num;
   FILE *fptr;

   if ((fptr = fopen("C:\\program.txt","r")) == NULL){
       printf("Error! opening file");

       // Program exits if the file pointer returns NULL.
       exit(1);
   }

   fscanf(fptr,"%d", &num);

   printf("Value of n=%d", num);
   fclose(fptr); 
  
   return 0;
}
```