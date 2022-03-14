# Racunalniske komunikacije

## IP protokol(Internet protocol)

>Ip je shit, to se resuje na aplikacijski plasti.

protokol IP:
- naslavljanje 
- oblika datagrama
- delo s paketi

protokol ICHP:
- signalizacija napak
- pomozna obvestila

Usmerjanje:
- izbira poti
- RIP, OSPF BGP

### format paketa IPv4
deli IP paketa:
- VER (4b): verzija IP protokola
- HEADER LENGTH (4b): dolžina glave
(v 32-bitnih besedah), poda, kje se začnejo podatki
- TYPE OF SERVICE (8b): za razlikovanje datagramov, ki
potrebujejo "posebno" obravnavo
- LENGTH (16b): skupna dolžina celega datagrama v
Byte-ih (običajno dolžina 1500B)
- ID, FLAGS, OFFSET (32b): potrebno za IP
fragmentacijo (razbitje podatkov na več delov)
-TTL(time to live)(8b): za preprečitev ciklanja datagramov po
omrežju, vsak usmerjevalnik zmanjša vrednost za 1 
>(po kmecko: ta preprecuje krozenje v sistemu in delanje odvecnega prometa, ce paket krozi v omrezju po 15 prenosih propade)
- UPPER LAYER (PROTOCOL) (8b): številka
enkapsuliranega protokola v podatkih (6-TCP, 17-UDP)
- CHECKSUM (internet checksum)(16b): kontrolna vsota (samo) glave
datagrama, preračuna jo vsak usmerjevalnik
- IP naslovi (32b): naslovi izvora in cilja (začetnega in
končnega sistema)
- OPCIJE (32b): za možne razširitve glave datagrama
(slabosti: večji čas procesiranja, neznana lokacija
začetka podatkov; običajno jih ni, glava dolga 20B)
> ta opcija je slaba in nepotrebna, Bosnic ne supporta :-(
- PODATKI (spremenljiva dolžina)

### Fragmentacija

razbijanje paketa na manjse, ker so paketi preveliki


---
Fragmentacija se lahko zgodi kar na sredi poti, lahko jo uizvede tudi usmerjevalnik.
Fragmente se zdruzi sele obrezna plast prejemnika pred predajo transportni plasti.
> Vsak usmerjevalnik se na poti odloci, a je ta paket prevelik in ga ustrezno fragmentira.

> Fragmenti so razkosani IP paketi

> offseti dolocajo razdelitev paketa, ki prejemniku pomaga, da paket spet zdruzi.

### Napadi z uporabo fragmentacije

* razlicni napadi, ki fragmentacijo izkoriscajo, da onemogocijo delovanje omreznih sistemov (DoS)
- overlapping fragment attack:
napadalec fragmentira z razlicnimi zamiki, pri sestavljanju se lahko ciljni sistem sesuje.
- tiny fragment attack:
framentiranje tudi podatkov v glavi enkapsuliranega protokola   
ni mogoce izvesti varnostnega filtriranja

### IPv4 naslavaljanje

* 32 bitov
obstaja prb. 4 miljarde naslovov   
morajo biti globalno unikatni
* vsaka omrezna kartica ima svoj ip naslov

### Podnaslov omrezja
* 2 dela naslova: naslov omrezja | naslov naprave
* 223.1.3.0 /24 - naslov z 24-bitno masko


### DHCP

4 faze:
* DISCOVER
```
src : 0.0.0.0, 68
dest.: 255.255.255.255, 67
yiaddr: 0.0.0.0
transaction ID: 654
```
* OFFER
```
src: 223.1.2.5, 67
dest: 255.255.255.255, 68
yiaddrr: 223.1.2.4
transaction ID: 654
Lifetime: 3600 secs
```
* REQUEST
```
src: 0.0.0.0, 68
dest:: 255.255.255.255, 67
yiaddrr: 223.1.2.4
transaction ID: 655
Lifetime: 3600 secs
```
* ACK
```
src: 223.1.2.5, 67
dest: 255.255.255.255, 68
yiaddrr: 223.1.2.4
transaction ID: 655
Lifetime: 3600 secs
```
### NAT(Network Address Translation)

* preslikovanje IP naslovov(pre - naslavljanje) se uvede zaradi pomanjkanja IPv4 naslovnega prostora
* namesto, da "trosimo" unikatne javne (globalne) naslove, uporabljamo raje lokalne naslove, ki so lahko ponovljivi med razlicnimi podjetji (ne nastopajo v javnemm internetu)
* zasebni naslovni prostor

|Naslovi | Omrežje/maska | Št. naslovov |
| --- | --- | --- | 
|10.0.0.0 | 10.255.255.255 | 10.0.0.0/8 2 24 |
|172.16.0.0 | 172.31.255.255 | 172.16.0.0/12 220 |
|192.168.0.0 | 192.168.255.255 | 192.168.0.0/16 2 16 |

* usmerjevalnik uporabi NAT, da lokalni naslov preslika v globalni

















