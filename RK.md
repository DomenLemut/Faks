# Racunalniske komunikacije

### IP protokol(Internet protocol)

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

###### format paketa IPv4
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

###### Fragmentacija

razbijanje paketa na manjse, ker so paketi preveliki
---
Fragmentacija se lahko zgodi kar na sredi poti, lahko jo uizvede tudi usmerjevalnik.
Fragmente se zdruzi sele obrezna plast prejemnika pred predajo transportni plasti.
> Vsak usmerjevalnik se na poti odloci, a je ta paket prevelik in ga ustrezno fragmentira.

> Fragmenti so razkosani IP paketi















