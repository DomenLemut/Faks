# Arhitektura racunalniskih sistemov Vaje

> racunanje je natancno dokler nimamo overflowa (preliva).
> realnih stevil v racunalniku ne moremo predstaviti, lahko se temu le priblizamo


15.3.2022
## Kaj so ukazi?

so informacije, ki jih znajo izvajati procesorji.


* UKAZI - zaporedje bitov, sestavljena iz 
- informacije o operaciji - katero informacijo naj izvede
- in informacije - kje so operandi

* Turingov stroj

* Neumanov model(postulati):
- CPE(cpu)
- pomnilnik
- vhodno - izhodni sistem

(primarni vrstni red) ukazi v pomnilniku napisani en za drugim in cpu naj jih izvaja v taksnem redu
(sekundarni vrstni red) "program counter"

*Kje so pa operandi?
*Naj bo pomnilnik sestavljen iz predalov.
*"pomnilniska beseda" - vedno en izmed predalov hrani n bitov, natancnjeje 8 bitov
*vsega prostora -"predalov" je 2 na 32 oz. 2 na 64

> Von neumanovo ozko grlo... Pomnlinik je pocasnejsi od procesorja, to ga omejuje.

* Ukaze, do katerih dostopamo pogosto jih hranimo v CPU - registri, to je majhen pomnilnik(8, 16, 32 bitov)



