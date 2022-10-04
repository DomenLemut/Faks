# C structures

## Zahtevana knjižnica:
```c
#include <string.h>
```
<br>
<br>

## Example:
```c
#include <stdio.h>
#include <string.h>
 
struct Books {
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
};
 
int main() {
struct Books Book1;        /* Declare Book1 of type Book */
struct Books Book2;        /* Declare Book2 of type Book */

/* book 1 specification */
strcpy( Book1.title, "C Programming");
strcpy( Book1.author, "Nuha Ali"); 
strcpy( Book1.subject, "C Programming Tutorial");
Book1.book_id = 6495407;

/* book 2 specification */
strcpy( Book2.title, "Telecom Billing");
strcpy( Book2.author, "Zara Ali");
strcpy( Book2.subject, "Telecom Billing Tutorial");
Book2.book_id = 6495700;

/* print Book1 info */
printf( "Book 1 title : %s\n", Book1.title);
printf( "Book 1 author : %s\n", Book1.author);
printf( "Book 1 subject : %s\n", Book1.subject);
printf( "Book 1 book_id : %d\n", Book1.book_id);

/* print Book2 info */
printf( "Book 2 title : %s\n", Book2.title);
printf( "Book 2 author : %s\n", Book2.author);
printf( "Book 2 subject : %s\n", Book2.subject);
printf( "Book 2 book_id : %d\n", Book2.book_id);

return 0;
}
```

## You can also pass a struct as an argument to a function:
```c
void printBook( struct Books book );

void printBook( struct Books book ) {

   printf( "Book title : %s\n", book.title);
   printf( "Book author : %s\n", book.author);
   printf( "Book subject : %s\n", book.subject);
   printf( "Book book_id : %d\n", book.book_id);
}
```

<br>
<br>
<br>
<br>

## Pointers to structures:

## 1. Define pointer:
You can define pointers to structures in the same way as you define pointer to any other variable
```c
struct Books *struct_pointer;
```

## 2. Store the address:
Now, you can store the address of a structure variable in the above defined pointer variable.

To fid the address:
```c
struct_pointer = &Book1;
```

## 3. Access the pointer
To access the members of a structure using a pointer to that structure, you must use the -> operator as follows

```c
struct_pointer->title;
```