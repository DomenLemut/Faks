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









