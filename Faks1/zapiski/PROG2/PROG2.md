				██████╗ ██████╗  ██████╗  ██████╗     ██████╗  
				██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗  
				██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝  
				██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝  
				██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗  
				╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝                                           
****************************************************************************************
**Domen Lemut**  
**FRI - prvi letnik**  
**Zapiski pri predmetu Programiranje 2**  
**solsko leto 2021/2022**	
****************************************************************************************

<script>
.body{
	background-color: red;
}

.html{
	background-color: red;
}
.md{
	background-color:red;
}
</script>
</br>
</br>
</br>
</br>
</br>
</br>

# 11.3.2022 (3. predavanje):

## INT, FLOAT, STEVILSKI TIPI...



zapis 0.1 v dvojiskem sistemu:

0.1 = 0*1/2 + 0*1/4 + 0*1/8 + 1*1/16 + 1*1/32 + ...  
(0.1 nima koncne predstavitve v dvojiskem sistemu)  
=> ne moremo ga natancno predstaviti s float tipom (tak zapis ni tocen).  


Primer (z nenatancnostjo floata nikoli ne dosezemo zeljene vrednosti):

```c
float x = 0.1;
while (x! = 1.0) x = x + 0.1;
```

ta zanka se nikoli ne zakljuci.

NEENAKOST ENAKIH FLOAT IN DOUBLE STEVIL:  
Pri floatih in doublih tudi ne velja vedno primer


a + (b + c) = (a + b) + c

		
in tako nas lahko za dolocena stevila koda:

```c
if(a + (b + c) == (a + b) + c){}
else {}
```
			
vrze v else{} zanko.

## PRINTF FUNKCIJA:



printf:(%d, %ld, %u, %lu, %f, %lf) 
	    
```c
printf(%d, %ld,%u, %lu,%f, %lf);
```
			
## LOGICNI TIP (bool):

```c
#include<stdbool.h>
			
bool b;
b = true;
//ali
b = false;
```
			
s tem dela tudi pogoj:

```c
if(b) == if(b==true)
```
ubistvu dela po principu:
```c
if(1) == if(true);
if(0) == if(false);
```

## OPERATORJI AND IN OR;


> (&& || !) - (in, ali, negator)

```c
int x = 1;  //zapis .....0001
int y = 3;  //zapis .....0011
(x & y) == true;
(x | y) == true;
```
						
x & y , x | y => pogleda zadnji bit in izracuna logicno vrednost.


## SPREMENLJIVKE IN PODATKOVNI TIPI:


> RAM si morajo programi v racunalniku razdeliti, svoj del dobi tudi (./a.out)
	
- en del programa rezerviran za **strojno kodo programa**, preostanek je razdeljen na tri podrocja: 
- prostor za **staticne spremenljivke** (in konstante), -**dovolj prostora**
- **sklad** => (kos pomnilnika, na katerega nizamo podatke), -**malo prostora**
- **kopica** => (rezervni kos pomnilnika za podatke). -**veliko prostora**
	   
[link do razlage](https://aticleworld.com/memory-layout-of-c-program/)


---
</br>
</br>   
</br>
</br>
</br>
</br>

# 18.3.2022 (4. predavanje):

- auto
- return
- static*
- register*


## static
static omogoca, da spremenljivko zapisemo v nek konkreten register    

```c
#include <stdio.h>

int x;
static int y; //med staticnimi spremenljivkami

int f(int a, int b){
	int ax;
	static int by; //med staticnimi spremenljivkami
	.
	.
	.
}
```

> static spremenljivko vrze med staticne spremenljivke, nato pa jo se malo "skrije"

**Zakaj bi hoteli tako spremenljivko imeti?**    
:   Ker je aktivna med celim izvajanjem programa, in je vidna le lokalno.

```c
inf fac(int n){

	/*ce spremenljivka ni static, se program ne normalno izvede,
	ce pa jo deklariramo zunaj zanke, je prvic dostopna vsem, pa tudi se lokalno povecuje;
	*/
	
	static int num.calls = 0; 
	num.cells = num.cells + 1;
	if(num.cals == 1000) exit(2);
	
	if(n = -1) 
		return 1;
	else 
		return n * fac(n-1);
}
```

## register

```c
inf fac(int n){

	int f = 1; //register int f = 1;
	for(int i = 1; i <= n; i++)
		f = f * i;
	return f;
}
```

> register je malo useless, za prog2 ga ne boste rabli, le za kasno uprasanje na ustnem

**Glavno je vedeti, da register in static poveta, kam mora dati spremenljivke**

## kopica

> Da spravimo kaj na kopico potrebujemo kazalec.

vsebovani so 64 bitni naslovi   

**"kazalec je spremenljivka, ki vsebuje naslov"**

Za p vzamemo referenco na i:
```c
int i = 17;
int *p;
p = &i; //p je naslov i-ja
```

Izpise nam, kam kaze p:

```c
#include <stdio.h>

int main(){
	int i; int *p;
	i = 17; p = &i;
	printf("i = %d @ %016\n", i, &i);
	printf("p = %016lx @ %016\n", (unsigned long int) p, &p);
	printf("%d\n", *p);
	return 0;
}
```

## Dolzina int, char...
```c
int i; //4 bytes
int *pi; //8 bytes

char c;  //1 byte
char *pc; //8 bytes
```

> **V c-ju lahko tako naredimo packarijo:**
`*((int*)pc)`

**Semanticen prepad**
:   v spremenljivko lahko nekaj spravimo, a ne vemo kaj je tam shranjeno.

```c
int i; int *pi;
i = 17;
pi = &i;

printf("%d\n", i); //17
*pi = 18;

printf("%d\n", i); //18

i = 19;
printf("%d\n", *p); //19

```

---
**Za nazaj**
```c
int c; //staticna spremenljivka

int f(int a){
	int b; //na skladu
	return a + b + c;
}
```
> v javi bi se napaka zaznala, v c - ju pa se gladko prevede.

Koliko je vrednost b?
:   ne vemo

**kopica**

> Da lahko uporabljamo kopico rabimo kazalce, ki kazejo na prostor na kopici.

```c
#include <stdlilo.h>

malloc
free
```

```c
int *p;

p = (int*)malloc(sizeof(int)); 
// na koncu stevilo bajtov, ki jih potrebujemo v malloc, najlepse je, da damo sizeof(int);
```
---
</br>
</br>   
</br>
</br>
</br>
</br>

# 25.3.2022 (5. predavanje):
## Kazalci in Tabele

```c
int  *pi; pi = (int*) malloc(sizeof(int[100]));
```
> ce imate kazalec se lahko vedno delate, kot da ta kaze na tabelo

**pi kaze na zacetek tabele**


```c
i = 17;
*p = 19; 
int t[1000];
p = &(t[0]);

p[0] = 31; //je enako kot 
t[0] = 31;

p[1] = 107; //enako kot
t[1] = 107;

p[j] = p + j * sizeof(int);
```

> ce gremo izven kazalcev vrednosti spremenljivk, ne moremo vedeti,    
kaj se tocno tam nahaja, zato se temu nacinu pisanja kode raje izogibamo

```c
int f(int *t){...}
int f(int t[100]){...}
int f(int t[]){...}
```

- f(n) => funkcija f prejme le naslov tabele, natancneje: naslov 0- tega elementa tabele
- f(pi) => funkcija prejme naslov, ki je shranjen v spremenjlivki pi

> namesto t.lenght lahko rocno ugotovimo dolzino tabele s

**vracanje spremenljive iz funkcije** 
za return spremenljivke oziroma tabele, ki jo deklariramo v funkciji, potrebujemo static deklaracijo spremenljivke.   

```c
int n[100];
int *p1 = findfirst3div7(n, 100);
int *p2 = findfirst3div7(&(n[50]), 50);
```	

```c
int* findalldiv7(int t[], int len_t, int *len_7){
	int *t7 = (int*)malloc(sizeof(int[len_t]));
	*len7 = 0;
	for(int i = 0; i < len.t; i++){
		if(t[i] % 7 == 0){
			t7[*len7] = t[i];
			(*len7) = (*len) + 1;
		}
	}

}
```	 
---
</br>
</br>   
</br>
</br>
</br>
</br>

# 1.4.2022 (6. predavanje):

## NIZI V C-ju

niz v c-ju = tabela znakov, ki ima na koncu znak \0

**#include<string.h>**

 
```c
#include<string.h>
int strlen(char*); 

char str1[100];

----------------------------------

char str1[4],str2[4];
str1[0] = 'A';
str1[1] = 'B';
str1[2] = 'C';
str1[3] = '\0';

str2[0] = 'a';
str2[1] = 'b';
str2[2] = '\0';

strlen(str1) => 3
strlen(str2) => 2

str2[2] = 'c';
strlen(str2) => ?
```
```
strcpy(s1, "RACUNALNISTVO"); //14 bajtov - 13 zakov plus znak za zakljucek
```

## Vecdimenzionalne tabele

```
int a[100][200];
```

V pomniliku: V kos pomnilnika, ki je namenjen tabeli, tabelo shranimo po vrsticah,   
V zgornjem primeru bi recimo shranili tabelo po 100 nizih dolzine 200 

> "Desni indeks tece najhitreje"


**izracunavanje mesta shranjevanja v tabeli**

```c
&(a[i][j]) = a + i * sizeof(int[200]) + j * sizeof(int);
```

```c
int f(int x[100][200]){}

//je isto kot
int f(int x[0][200]){}
//zaradi prej izpeljane formule
```
**3 dimenzije:**
V tri dimenzije se to prevede kot
```c
int g(int y[][100][200]){}
```
Drugace receno, lahko izpustimo le prvo dimenzijo vecdimentionalne tabele, ko jo dodjamo v funkcijo.


**TABELA S KAZALCI (kot jo poznamo v javi):**
```c
int **p
pa = (int**)malloc(100*sizeof(int*));
for(int i = 0; i < 100; i++)
	pa[i] = (int*)malloc(200*sizeof(int));

//potem lahko recemo
pa[i][j];
pa[2][7];
```

> kazalce lahko dajemo na kopico, dejanske vrednosti tabele pa na sklad, c nam to omogoca

Ta nacin je mogoce pocasnejsi, ko imamo veliko stevilo dostopov do pomnilnika, se to pozna.

**Kako poslati tako tabelo v funkcijo?**
```c
int f(int **p){
	pa;
	pa[2];
	p[2][7];
	---------------------
	pa + 2 * sizeof(int);
	--------------------- 
}
```

**V Javi:**
```java
public static void main(String [] args){...}
```
**V C - ju:**
```c
//do zdaj
int main(){...}

//lahko tudi
int main(int argc, char *argc[]){...}
```

```bash
$ .a/a.out a b c
```
```c
argc = 4
//imamo 4 razlicne...
```
> v main metodi brez argumentov se zgodi tocno isto, a do tega nimamo dostopa.

## PROBLEM N KRALJIC NA DESKO N x N
...

</br>
</br>   
</br>
</br>
</br>
</br>

# 8.4.2022 (7. predavanje):

```c
void combs(int *tab, int m, int n, int k, int *t){
	if(n == 0){
		for(int i = m - 1; i >= 0; i--){
			printf("%d ", tab[i]);
			printf("\n");
		}

	} else{
		for(int i = 1; i <=k ; i++){
			t[0] = i;
			combs(tab, n - 1, k, t + 1);
		}
	}
}
```

**NO M and no *t**
```c
void perms(int *tab, int n, int j){
	if(j < n){
		for(int i = j; i < n; i++){
			int tmp;
			tmp = tab[i]; tab[i] = tab[j]; tab[j] = tmp;
			perms(tabb, n, j + 1);
		}
	} else {
		for(int i = 0; i < n; i++)
			pritf("%d ", tab[i]);
		printf("\n");
	}
}
```

</br>
</br>   
</br>
</br>
</br>
</br>

# 15.4.2022 (8. predavanje):

## Sudoku Solver



```c
//Dosti je skopiranega iz mojga obstojecega java Sudoku solver programa.

include <stdio.h>
include <stdbool.h>

#define DIM 9 //dimenzija sudokuja
#define BOX 3 //dimenzija box-a

int sudoku[DIM][DIM] = {{1,0,0,0,0,0,5,6,7},...,{4,0,0,0,0,4,5,6,9}}

//check if number already exists in box with element (x, y)
bool NumInBox(int [][] sudoku, int x, int y, int num){
	//zacetni in koncni parametri boxa
	int strX = (x / BOX) * BOX;
	int endX = strX + BOX;
	int strY = (y / BOX) * BOX;
	int endY = strY + BOX;
	
	for(int currX = strX; x < endX; currX++){
		for(int currY = strY; y < endY; currY++){
			if(sudoku[currX][currY] == num)
				return true;
		}
	}
	
	return false;
}

//check if number already exists in row x
bool NumInRow(int [][] sudoku, int x, int num){
	for(int i = 0; i < dimension; i++){
		if(sudoku[x][i] == num)
			return true;
	}
	
	return false;

}

//check if number already exists in collumn y
bool NumInColl(int [][] sudoku, int y, int num){
	for(int i = 0; i < dimension; i++){
		if(sudoku[i][y] == num)
			return true;
	}
	
	return false;
}

void PrintSudoku(int [][] sudoku){
	for(int x = 0; x < DIM; x++){
		for(int y = 0, y < DIM; y++){
			printf("%d", sudoku[x][y]);
		}
		printf("\n");
	}
}

//solve sudoku
int solve(int s[DIM][DIM], int i, int j){
	if(i == DIM)
		//izpise se rešitev, return 1
	if(s[i][j] != 0) return solve(s, j == 8 ? i+1:i, j == 8 ? 0: j + 1);

	int n = 0;

	for(int m = 1; m <= DIM; m++){
		//preveri vse pogoje

		s[i][j] = m;
		n = n + solve(s, j == 8?i + 1:i, j == 8?0:j + 1);
		s[i][j] = 0;
	}
	return n;
}


```

</br>
</br>   
</br>
</br>
</br>
</br>

# 6.5.2022 (10. predavanje):

```c
char** board;

int di[8]={+2,+1,-1,-2,-2,-1,+1,+2}
int dj[8]={+1,+2,+2,+1,-1,-2,-2,-1}

board = (char**) malloc (sizeof(char*) * n1)
for(int i = 0; i < n1; i++){
	board[i]=(char*)malloc(sizeof(char)*n2)
	for(int j = 0; j < n2; j++)
		board[i][j] = ' ';
}

int knight(char **board, int i, int j, int n1, int n2){
	if(board[i][j] == 'x')
		return 0;
	int max = 0;
	
	board[i][j] == 'x';
	for(int m = 0; m < 8; m++){
		int ii = i + di[m];
		int jj = j + dj[m];

		if((0 <= ii) && (ii < n1) 
		&& (0 <= jj) && (jj < n2)) {
			int len = knight(board, ii, jj, n1, n2);
			if(len > max)
				max = len;
		}
	}
	board[i][j] = ' ';
	return max + 1;

}

knight(board, 0, 0, n1, n2);

```

**hardware verzija**

```c
unsigned long int board = 0;

board = board | (1nl << (i * n2 + j));

```
</br>
</br>
</br>

# 20.5.2022

## <div style="color: violet">C predprocesor</div>

<div style="color: red">Poenostavljena slika:</div>

```
prog.c ––––> [prevajalnik] ––––> a.out
```

```bash
$ gcc prog.c
```

<div style="color: red">Dejanska slika:</div>

```
prog.c ––––> [c predprocesor] ––––> [c prevajalnik] ––––> [povezovalnik] ––––> a.out
					|						|					|
					V                   	V					V
             prevede izvorno       prevede izvorno         doda stat.
			 kodo                   kodo                   knjižnico
```


</br>
</br>
</br>


**Prevajanje**

```c
# include < ... >
# include " ... "
```


> <div style="color: pink; font-size: 18px">v header datotekah so prototipi funkcij</div>

</br>

```c
# include <studio.h>
# include "prog.c"
-------------------------------------
prog.c:
-------------------------------------
int main{printf ("HW\n");}
-------------------------------------
```

### #define (MACROS)

```c
#define N 1000

int i = N; // => int i = 1000;
char *s = "NEXT"; //=> char *s = "NEXT"
int N = 10; //=> int 1000 = 10; !NAPAKA

#define STRLEN 100 + 1
char s[STRLEN]
```
> <div style="color: pink; font-size: 18px">Imajo pa macroji tudi grdo lastnost</div>
</br>

```c
if(i > 2*STRLEN){...} //=>

if(i > 2*(100+1)){...}

// v tem primeru je treba vedno pisati oklepaje
```

</br>

### mozno je tudi:
```C
#define MAX(N1, N2)  N1>N2?N1:N2

int i = 5;
if(MAX(i,8)==8){...} //=> if(i>8?i:8==8){...}
```
ali...
```C
#define PLUSONE(X) X+1

PLUSONE(2*i) //=>2*i+1

//boljse

#define PLUSONE(X) ((X)+1)
#define MAX(N1,N) ((N1)>(N2)?(N1):(N2))
```

```C
#if
#ifdef
#ifndef
...
#else
...
#endif
```

```C
#define N 5
#if N>3
	int i;
#else
	double i;
#endif
```

</br>

## stdio.h:
```C
#ifndef __STDIO__
#define __STDIO__

–––––––––––––––––––––
–––––––––––––––––––––
–––––––––––––––––––––
–––––––––––––––––––––
–––––––––––––––––––––
–––––––––––––––––––––
–––––––––––––––––––––

#endif
```




---   
</br>
</br>
</br>

```
                       .,,uod8B8bou,,.
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
         ,=m8BBBBBBBBBBBBBBBRWTF?!||||||||||||||
         !...:!TVBBBRPFT||||||||||!!^^""'   ||||
         !.......:!?|||||!!^^""'            ||||
         !.........||||                     ||||
         !.........||||  ##                 ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         `.........||||                    ,||||
          .;.......||||               _.-!!|||||
   .,uodWBBBBb.....||||       _.-!!|||||||||!:'
!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   `.
!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     `.
!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"`;:::       `.
!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
`..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
  `..........:::::::::::::::::::::::;iof688888888888b.     `YBBBP^'
    `........::::::::::::::::;iof688888888888888888888b.     `
      `......:::::::::;iof688888888888888888888888888888b.
        `....:::;iof688888888888888888888888888888888899fT!
          `..::!8888888888888888888888888888888899fT|!^"'
            `' !!988888888888888888888888899fT|!^"'
                `!!8888888888888888899fT|!^"'
                  `!988888888899fT|!^"'
                    `!9899fT|!^"'
                      `!^"'
```



		

		

		
		 
	


