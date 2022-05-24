# Arhitektura racunalniskih sistemov Vaje

> racunanje je natancno dokler nimamo overflowa (preliva).
> realnih stevil v racunalniku ne moremo predstaviti, lahko se temu le priblizamo


15.3.2022
## Kaj so ukazi?

so informacije, ki jih znajo izvajati procesorji.


* UKAZI - zaporedje bitov, sestavljena iz 
- informacije o operaciji - katero informacijo naj izvede
- in informacije o pomnilniski besedi- kje so operandi

* Turingov stroj

* Neumanov model(postulati):
- CPE(cpu)
- pomnilnik
- vhodno - izhodni sistem

(primarni vrstni red) ukazi v pomnilniku napisani en za drugim in cpu naj jih izvaja v taksnem redu
(sekundarni vrstni red) "program counter"

* Kje so pa operandi?
Naj bo pomnilnik sestavljen iz predalov.  
"pomnilniska beseda" - vedno en izmed predalov hrani n bitov, natancnjeje 8 bitov  
vsega prostora -"predalov" je 2 na 32 oz. 2 na 64

> Von neumanovo ozko grlo... Pomnlinik je pocasnejsi od procesorja, to ga omejuje.

* Ukaze, do katerih dostopamo pogosto jih hranimo v CPU - registri, to je majhen pomnilnik(8, 16, 32 registrov)

LOAD/STORE ukazi preklapljajo podatke med pomnilnikom in registri  

Ukazi imajo lahko razlicno kolicino informacije, ki jo nosijo v sebi. Primer a = b + c nosi 4 informacije
- kmalu so naredili vse ukaze enako dolge (vsi razen Intel)

## Load/Store:

zraven potrebujemo se informacijo v registru aka. v kateri register prenasamo podatke. Za to porabimo 5 bitov to je 2⁵ = 32.

informacije o pomnilniski besedi imao m biten naslov pomnilniske besede.  

Pri tem preidemo mejo 32 bitov, ki jih imamo na voljo v load/store.   

Te zato naslove hranimo posredno v enem izmed 32 registrov   

// poglej si zapis registrov in load/ store

* LOAD :
1. 1B : LB
2. 2B : LH
3. 4B : LW

pri Load Byte(LB) obstaja tudi verzija LBU, ki pomeni load byte unsigned

* Pravilo debelega konca(BIG ENDIAN) => proti bitu 0 - tega uporablja hip
* Pravilo tankega konca(LITTLE ENDIAN) => od bita 0 - tega uporabljata ARM in Intel

* STORE :
1. SB
2. SH
3. SW

# ASEMBLER:




# Vaje 3.5.2022


## Zmogljivost CPE

najmanjsa enota casa je en urina perioda, to je cas od ene fronte do druge.    
=> Koliko urinih period traja izvajanje enega ukaza 
(clocks per instruction)   **CPI**

> CPI mora biti cimanjsi

Na to pa vpliva arhitektura:
- dostop do pomnilnika (to izboljsamo z vecjim stevilom registrov)
  
Na to vpliva tudi arhitektura(AKA fizicna zgradba procesorja):
- Isti tipi ukazov imajo podoben CPI, skratka CPI je odvisen od tipa ukazov

```
CPI = Σ(i) CPI(i) x p(i) 
```

```
CPI = (stevilo ukazov / cas * frekvenca)⁻¹
```

### Koliko (milijonov) ukazov izvede CPE v 1s?

enota: **MIPS - milion instructions per second**

```
MIPS = f(cpe) / CPI * 10⁶
```

### Koliko casa CPE izvaja program? 
```
CPE(cas) = N / MIPS * 10⁶ = N * CPI / f(CPE)
```

> CPI ni odvisen od tehnologije, medtem ko druga dva sta odvisna (CLOCK SPEED PROCESORJA)

## Naloga:

Ce imamo procesor, ki deluje s hitrostjo f = 1 GHz
- L/S ukazi  = 5 CPI
- AL ukazi = 4 CPI
- kontrolni ukazi = 3 CPI
- (B, J...)

200 L/S ukazov
500 AL ukazov
100 kontorlnih ukazov

Izracunaj MIPS!

```
pogostost L/S = 1/4
pogostost AL = 5/8
pogostost kontrolnih = 1/8

CPI = 2/8 * 5 + 5/8 * 4 + 1/8 * 3 = 4.125 => dobre stiri periode rabimo za izvedbo enega ukaza
```

**MIPS = ?**

```
MIPS = 10³ s⁻¹ / 4.125 = 242,42 
```

MIPS SE POVECA ZA 1%

 nov MIPS = MIPS + 1%
 
 ```
 nov MIPS = 242,42 * 1,01 = 245
 ```

**x = ?**

nov CPI = ?

```
nov CPI = 0,004 * 10³ = 4
 ```

```
nov CPI = (200 - x) * 5 / 800 - x + 500 * 4 / 800 - x + 100 * 3 / 800 - x = 4 

100 odvecnih ukazov
```

## Naloga 2:

```
LW R1, B(R0)
ADD R2, R2, R1
```

Kako bi z anim ukazom napisali omenljeno?? 

```
ADD R2, B(R0)
```

novi CPI  = 1,02 CPI

 novi t (CPE) = 1,01 t (CPE)

 LOAD = 15%   
 ADD = 20%   
 OSTALI = 65%    

 novi CPE t  <= CPE t

(N - x) * novi CPI / nova f <= N * CPI / f

```
(100 - x) * 1,02 * 1,1 <= 100

x >= 100 - 100/ 1,122 = 89
```

d (delez) = 11/15 = 73%


## Amdalov zakon

> Bsicly zakon, ki pove, da na razlicne dele resevanja problema lahko vplivamo drugace

```
S(n) = razlika t / novi t = 1 / (1 - f) + f/N
```
## Cevovod

(tekoci trak) => pipeline


**Primer:**
Ce imamo tekoci trak in ob tekocem traku n delavcev.

Koliko casa rabimo za proizvodnjo N pralnih strojev.

t je enota enega delavca

t(m) = N * t + (N - 1)t

