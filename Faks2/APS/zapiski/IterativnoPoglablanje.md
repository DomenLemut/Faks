# Dinamicno programiranje

> Zacnemo pri majhnih proglemih, ki jih potem gradimo v vecje resitve

(primer je recimo iterativno resevanje fibonnacijevega zaporedja)

##  Primer (binomski koeficienti)

$$ \binom {n} {k}  = \binom {n-1} {k} + \binom {n - 1} {k - 1} $$

## Greedy search

> Pozresno iskanje

Poznamo vec tipov:
- Iskanje v snopu
- Lokalna optimizacija
- Gradientno iskanje
- Stohasticni algoritmi
     - Simulirano ohlajanje
     - Genetski algoritmi
  
> Pozresno iskanje je "kratkovidno", zato je resitev samo priblizna.

Tako izredno hitro napredujemo.

V praksi se izkaze, da so resitve dovolj dobre, drugace lahko resitev se malo popravimo s nadaljnim iskanjem.

## Beam search

Ideja je taka... Iskanje bomo razsirili na k novih poti. 

## Lokalna optimizacija

Na zacetku nakljucno izberem zacetno stanje. 

```
ponavljaj
    nakljucno izberi stanje;
    ponavljaj
        naredi najboljso od moznih sprememb;
    dokler so se izboljsave;
dokler ni potekel dodeljen cas;
```

## Gradientno iskanje

Iskanje z odvodi... Glede na naklon izberemo smer, ki se bolj splaca(hocemo priti na vrh)

> Je posplositev pozresnega iskanja na prostore -> na ta nacin je tudi ta nacin kratkoviden!

</br></br></br>

# Resevanje problemov

1. Kako izraziti algoritem
2. Kako zasnovati algoritem
3. Kako analizirati algoritem
4. Kako analizitati algoritem

## Kako izraziti algoritem

- Diagram poteka
- Psevdokoda
- Programski jezik

## Kako zasnovati algoritem

1. Razumevanje problema
2. Abstrakcija problema
3. Izbira notacije
4. Razbitje na podprobleme
5. Podobnost med problemi
6. Izbira preiskovalne strategije

## Kako analizirati algoritem
Analizirati je potrebno:
 1. Casovno zahtevost


