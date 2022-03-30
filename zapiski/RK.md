
# Racunalniske komunikacije

```
  ___   _      ___   _      ___   _      ___   _      ___   _
 [(_)] |=|    [(_)] |=|    [(_)] |=|    [(_)] |=|    [(_)] |=|
  '-`  |_|     '-`  |_|     '-`  |_|     '-`  |_|     '-`  |_|
 /mmm/  /     /mmm/  /     /mmm/  /     /mmm/  /     /mmm/  /
       |____________|____________|____________|____________|
                             |            |            |
                         ___  \_      ___  \_      ___  \_
                        [(_)] |=|    [(_)] |=|    [(_)] |=|
                         '-`  |_|     '-`  |_|     '-`  |_|
                        /mmm/        /mmm/        /mmm/
```


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
|10.0.0.0 - 10.255.255.255 | 10.0.0.0/8 | 2²⁴ |
|172.16.0.0 - 172.31.255.255 | 172.16.0.0/12 | 2²⁰ |
|192.168.0.0 - 192.168.255.255 | 192.168.0.0/16 | 2¹⁶ |

* usmerjevalnik uporabi NAT, da lokalni naslov preslika v globali

## Traceroute

izvor posilja serijo paketov proti cilju, prvi ima ttl=1, drugi ttl=2...

administrator se lahko odloci, da ne izdaja svojega imena, usmerjavalnik ne odgovarja na pinge

# IPv6

## Sintaksa Ipv6 naslova
**zakaj sploh?**

1. potreben večji naslovni prostor
	temo smo se poskusili izogniti s cider..., a prostora enostavni ni vec
	namesto 32-bitnih naslovov imamo zdaj 128-bitne naslove
	
2. hitrejse usmerjanje
	fiksna glava 40 byte-ov, opcij nimamo.
	fragmentacija ni dovoljena, ker upočasnjuje procesiranje.
	
3. Potrebno zagotavljanje karkovosti storitev
	**oznaka "vrste toka"(flow label) v paketu IPv6**

128 bitov delimo v 8 16 bitnih skupin
zapišemo jih v šesnajstiškem sistemu
vodilne ničle lahko izpustimo(004f v 4f)(0000 v 0)
zaporedne bloke s samimi niclami lahko zapisemo samo z dvopicjem(:0000:0000:0000: => ::)

**Kompatibilnost z IPv4 naslovi**
193.2.72.1 -> ::193.2.72.1

**fragmentacija se ne izvaja vec**
ce je paket preveli, usmerjevalnik zavrze paket in rece "Packet too big"
glava vec ne vsebuje kontrolne vsote, ker je ta enkapsulirane ze v protokolih notraj IP paketa in zavira hitro procesiranje(preracunavanje ob spremembi TTL)
polja za opcije v glavi ni vec, Mozno jih je implementirati kot poseben enkapsuliran protokol (uporaba polja next header)


**Prehod iz IPv4 na IPv6**

- dual stack(dvojni sklad, vozlisca uporabljajo vzporedni implementaciji IPv4 in IPv6)

**kako naprava ugotovi, da mora uporabljati IPv4 ali 6?**: pri povprasevanju za ip, dns streznik(DNS) vrne IPv4 ali IPv6 naslov.

> komur zanas govort IPv6 mu govori IPv6, ostalim govori IPv4,

## tuneliranje
po IPv4 se ne more prenasati Flow Label
**"tunel"**
med usmerjevalnikoma ustvarimo IPv6 tunel

>v tunelu IPv4 carry-ja IPv6 paket

**IPv6 paket znotraj IPv4 paketa**

## Varnost na omrezni plasti

komunikacija poteka neverovano

IPSec: nabor protokolov, ki skrbijo za varno komunikacijo na omreznem nivoju(AH, ESP)

- dogovor o uporabljenih kriptografskih algoritmih in kljucih
- ekriptacija in dekriptacija
- integriteta podatkov
- avtentikacija izvora


> IP scooping hocemo prepreciti

## usmerjanje

> kaj je najboljs pot od posiljatelja do sprejemnika?

**Omrezja modeliramo s teorijo grafov!**
	vozlisca so usmerjevalniki
	
	
Posredovalne tabele:
> ce hoces poslati na tak cilj, poslji na vrata...

uvedemo:
1. ceno poti
2. ceno povezave

> vecja vrednost je drazja, iscemo ceno povezave z najmanjso vrednostjo(oznacimo jo s c).

**Kaj je cena povezave?**
imamo dve kombinaciji lastnosti: centralitirani ali decentralizirani













