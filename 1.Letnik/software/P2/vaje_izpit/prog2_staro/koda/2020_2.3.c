#include <stdio.h>

int main(){

    return 0;
}

/*
Napišite program, ki prebere logični izraz in izpiše njegovo vrednost — bodisi T (resnica) bodisi F
(neresnica). V izrazu lahko nastopata dvojiška operatorja & (konjunkcija) in | (disjunkcija), eniški
operator ! (negacija) ter konstanti T (resnica) in F (neresnica). Izraz je zapisan v t.i. preﬁksni
obliki, kar pomeni, da je najprej naveden operator, nato pa po vrsti njegovi operandi (brez vmesnih
presledkov). Na primer, izraz &T|!TF je sestavljen iz operatorja & in operandov T in |!TF. Drugi
operand je izraz, sestavljen iz operatorja | in operandov !T (operator !, operand T) in F.
Vhodni izraz je sestavljen iz kvečjemu 1000 znakov.

Sledi primer vhoda in pripadajočega izhoda:

& - konjunkcija
| - disjunkcija
! - negacija
T - resnica
F - neresnica

&T|!TF

iz tega sledi: F
*/