██████╗ ██████╗  ██████╗  ██████╗     ██████╗ 
██╔══██╗██╔══██╗██╔═══██╗██╔════╝     ╚════██╗
██████╔╝██████╔╝██║   ██║██║  ███╗     █████╔╝
██╔═══╝ ██╔══██╗██║   ██║██║   ██║    ██╔═══╝ 
██║     ██║  ██║╚██████╔╝╚██████╔╝    ███████╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝     ╚══════╝
-----------------------------------------------------------------------------------------

Domen Lemut
FRI - prvi letnik
Zapiski pri predmetu Programiranje 2
solsko leto 2021/2022
								
-----------------------------------------------------------------------------------------
11.3.2022:

INT, FLOAT, STEVILSKI TIPI...
.........................................................................................

zapis 0.1 v dvojiskem sistemu:

	0.1 = 0*1/2 + 0*1/4 + 0*1/8 + 1*1/16 + 1*1/32 + ...
	(0.1 nima koncne predstavitve v dvojiskem sistemu)
	=> ne moremo ga natancno predstaviti s float tipom (tak zapis ni tocen).


Primer (z nenatancnostjo floata nikoli ne dosezemo zeljene vrednosti):

			float x = 0.1;
			while (x! = 1.0) x = x + 0.1;
	-ta zanka se nikoli ne zakljuci.

NEENAKOST ENAKIH FLOAT IN DOUBLE STEVIL:
Pri floatih in doublih tudi ne velja vedno primer

			a + (b + c) = (a + b) + c
		
in tako nas lahko za dolocena stevila koda:

			if(a + (b + c) == (a + b) + c)
				{}
			else 
				{}
			
vrze v else{} zanko.

.........................................................................................
PRINTF FUNKCIJA:

printf:(%d, %ld, -
	    %u, %lu, -
	    %f, %lf) -
			printf(%d, %ld,%u, %lu,%f, %lf);
			
logicni tip (bool):
			#include<stdbool.h>
			
			bool b;
			b = true;
			//ali
			b = false;
			
s tem dela tudi pogoj:
			if(b)
			//je isto kot
			if(b==true)

ubistvu dela po principu:
			if(1) == if(true);
			if(0) == if(false);

.........................................................................................
OPERATORJI AND IN OR;
(&& || !) - (in, ali, negator)
			int x = 1;  //zapis .....0001
			int y = 3;  //zapis .....0011
			(x & y) == true;
			(x | y) == true;
						
x & y , x | y => pogleda zadnji bit in izracuna logicno vrednost.
.........................................................................................
SPREMENLJIVKE IN PODATKOVNI TIPI:
	RAM si morajo programi v racunalniku razdeliti, svoj del dobi tudi (./a.out)
	
	$en del programa rezerviran za strojno kodo programa,
	$preostanek je razdeljen na tri podrocja: 
	   prostor za staticne spremenljivke (in konstante), -dovolj prostora
	   sklad => (kos pomnilnika, na katerega nizamo podatke), -malo prostora
	   kopica => (rezervni kos pomnilnika za podatke). -veliko prostora
	   
	   (link: https://aticleworld.com/memory-layout-of-c-program/ )
	   
	   
	   
	   
	
	   
	    
	
	


                   
		

		

		

		
		 
	


