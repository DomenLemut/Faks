# Razčlenitev IP protokola

<img width="350" src="IPscr.png" >


## VER (4b): 
verzija IP protokola

## HEADER LENGTH (4b):
 dolžina glave
(v 32-bitnih besedah), poda, kje se začnejo podatki

## TYPE OF SERVICE (8b): za razlikovanje datagramov, ki
potrebujejo "posebno" obravnavo

## LENGTH (16b): skupna dolžina celega datagrama v
Byte-ih (običajno dolžina 1500B)

## ID, FLAGS, OFFSET (32b): potrebno za IP
fragmentacijo (razbitje podatkov na več delov)
TL (8b): za preprečitev ciklanja datagramov po
omrežju, vsak usmerjevalnik zmanjša vrednost za 1

## UPPER LAYER (PROTOCOL) (8b): številka
enkapsuliranega protokola v podatkih (6-TCP, 17-UDP)

## CHECKSUM (16b): kontrolna vsota (samo) glave
datagrama, preračuna jo vsak usmerjevalnik

## IP naslovi (32b): naslovi izvora in cilja (začetnega in
končnega sistema)

## OPCIJE (32b): za možne razširitve glave datagrama
(slabosti: večji čas procesiranja, neznana lokacija
začetka podatkov; običajno jih ni, glava dolga 20B)

## PODATKI (spremenljiva dolžina)

<br>
<br>
<br>
<br>
<br>

# Fragmentacija:

-> flags in offset<br>
+length

bita v zastavicah (FLAGS):
- DF: don't fragment
- MF: more fragments

fragmente združi omrežna plast in preda transportni.

> Dos attack je primer uporabe fragmentacije

## Podomrežje:
nslov podomrežja je prvih 20 bitov ipv4 naslova, nadaljnih 12 bitov je naslov podomrežja.



