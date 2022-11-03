# Bernullijev obrazec

> Bernulijev obrazec je namenjen dolocanju verjetnosti, da ob podatku, kaksna je verjetnost, da se skupini zgodi dogodek, ugotovimo, kaksna je verjetnost, da bi se isti dogodek dogodil drugacnemu delu skupine

### Primer:
> navadno predmet pade 30% ljudi, mi pa hocemo ugotoviti, kaksna je verjetnost, da med 50imi ljudmi pade predmet 20 ljudi. 

**$(p = 0.3, k = 20, n = 50)$**
$rezultat = 0,037038763$



## Enacba

$$\large P(n, k , p) = \binom{n}{k}p^k (1 - p)^n⁻^k$$



</br>

## Razlaga: 

- k = stevilo uspesnih primerov
- n = stevilo vseh primerov

- p = moznost, da se primerom zgodi dogodek A
  
</br>

### Detaljna obrazlozitev

 1. $p^k$   moznost uspeha pri uspesnih 
 2. $(1 - p)^k⁻^n$  moznost uspeha v ostalih primerih
 3. $\binom{n}{k}$ stevilo kombinacij po k nad n