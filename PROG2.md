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

***

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
---


	
***
```

                       .,,uod8B8bou,,.
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
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

        
		

		

		

		
		 
	


