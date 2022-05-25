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

# Omrezje

## Kaj je omrezje?
- fizična defininicija: resurs, ki je zmožen povezovanja velikega števila naprav,
- storitvena definicija: infrastruktura, ki nudi storitve (porazdeljenim) aplikacijam
(www, VoIP, email, igre, P2P, elektronsko poslovanje)

### Komponente omrezja
1. koncni sistemi
2. jedro omrezja
3. komunikacijske povezave

### Koncni sistemi
- udeleženci v omrežju: namizni računalniki, strežniki,
mobilni računalniki
- vloge v omrežju glede na storitve: vloga odjemalca,
strežnika ali mešana (P2P)

končni sistemi morajo dostopati do omrežja:
- klicni dostop (56 kbps)
- DSL
- kabelski dostop
- optični dostop (FTTH - Fiber To The Home)
- Ethernet
- brezžični dostop (Wide-Area Wireless

## Dostop do omrezja

Klicni dostop:
- počasen, 56 kbps, preko telefonskega omrežja,
- zasedenost telefona med uporabo

DSL:
 - tudi uporablja telefonsko infrastrukturo (0-4 kHz telefon, 4-50 kHz upstream, 50 kHz - 1 MHz
downstream), individualen dostop!
- nekaj 100 Mbps navzven/navznoter (upstream/downstream)

Kabelski dostop:
- uporablja TV infrastrukturo, ne telefonske
- več odjemalcev si deli dostop do skupnega vozlišča
- npr. 120 Mbps navznoter, 10 Mbps navzven

Opticen dostop:
- optična povezava od ponudnika do doma ("skoraj" direktno, zagotovljena hitrost prenosa)
- visoke hitrosti prenosov: nekaj 10/100 Mbps (npr. 100/100 Mbps)

Ethernet:
- običajno na javnih zavodih, univerzah, ...
- priklop preko ethernet stikala
- 10 Mbs, 100 Mbps, 1 Gbps, 10 Gbps,
100 Gbps Ethernet, ...

Wifi:
- (deljen in neusmerjen medij!)
- 802.11b/g (WiFi): 11 ali 54 Mbps
- 802.11n/ac/ax (WiFi, v razvoju): 600 Mbps, 1300 Mbps, 10 Gbps

3G/4G/LTE/5G
- uporaba central mobilnih operaterjev
- ~2 Mbps (3G)*, 100 Mbps – 1 Gbps(4G)*
- 5G (1 - 10Gbps)

## ISO/OSI model

1. ### fizična:
    prenos bitov po komunikacijskem kanalu (kodiranje,
multipleksiranje)
1. ### povezavna:
    okvirjanje bitov, kontrola pretoka, popravljanje napak,
asinhrona/sinhrona komunikacija
1. ### omrežna: 
   usmerjanje, posredovanje, izogibanje zamašitvam
2. ### transportna:
    zanesljivost prenosa, učinkovitost
3. ### sejna:
     logično povezovanje procesov znotraj aplikacij (aplikacijsko
multipleksiranje, pogosto implementirano v aplikaciji)
1. ### predstavitvena:
    kodiranje podatkov, kompresija, sintaksa
2. ### aplikacijska:
    podatki aplikacije, storitve HTTP, SMTP itd.

# Fizicna plast

## Prenosni mediji:
- zvita parica
- kooksialni kabel
- opticno vlakno
- brezzicne povezave

> sj majo use smisu, no further explanation

### frekvenčna karakteristika: kakšne frekvence lahko medij prenese
- Govor: 300 do 7000 Hz
- Telefonski kanal: 500 do 3600 Hz
- Hi-fi oprema: 100 do 20.000 Hz

## modulacija:
> nacin kodiranja digitalnega signala

vrste:
- amplitudna modulacija (npr. za zvok: glasen pisk=1, tih
pisk=0)
- frekvenčna modulacija (npr. za zvok: visok pisk=1, nizek
pisk=0)
- fazna: sprememba faze za določen fazni kot pomeni
spremembo signala.

> Najbolj used je kvadratna modulacija, ki je kombinacija kvadratne in fazne modulacije.

</br>
</br>
</br>
</br>

# Povezavna plast

## **enota, ki se prenaša na povezavni plasti je OKVIR (angl. frame)!!**
</br>

## NALOGA povezavne plasti:
prenos okvirja po povezavi med sosednjima vozliščema (računalnik, usmerjevalnik) upoštevajoč tip medija

</br>

## STORITVE povezavne plasti:
1. okvirjanje datagramov: podatkom višje plasti se doda glava in določi struktura
2. zaznavanje in odpravljanje napak: z dodatnimi biti lahko zaznavamo, ali je
prišlo do napake pri prenosu okvirja; v določenih primerih jo lahko odpravimo
1. dostop do medija: če je medij deljen, se uporablja MAC protokol (media access
control) in ustrezno naslavljanje udeležencev
4. zagotavljanje zanesljive dostave: uporaba potrjevanja in ponovnega pošiljanja
v primeru napake pri prenosu na povezavi
5. kontrola pretoka: usklajevanje hitrosti pošiljanja glede na procesorske
sposobnosti prejemnika

</br>

## Kaj je okvir?

- "enota" podatkov na povezavni plasti
- opredeljuje začetek in konec prenesenih podatkov
- podatkom doda glavo (header) in rep (trailer), ki so potrebni za uspešen prenos
  
</br>

## Protokoli na povezavni plasti
primeri:
- Ethernet
- wireless LAN (802.11)
- token ring
- PPP

</br>

## Zaznavanje in odpravljanje napak
- **(EDC - Error
Detection Code)**
- Podatkom (D) dodamo še dodatne bite za preverjanje pravilnosti 
- protokol za popravljanje ni popoln, lahko spregleda napake,
- več EDC bitov omogoča boljšo detekcijo/popravljanje

</br>

### Parnost
- na koncu imamo paritveni bit, ki pove, a je stevilo enicc sodo ali liho

</br>

### Hammingova koda
Primer: podatek=0101, dodamo 3 kontrolne bite
- izračun kontrolnih bitov s sodo paritetno shemo

</br>

### CRC

Zaznavanje in odpravljanje napak (5/5)
- uporaba kontrolnih vsot:
- CRC (angl. Cyclic Redundancy Check): matematična metoda, ki uporablja polinome.
Uporablja r dodatnih bitov, sposobna zaznati in popraviti napake do r+1 bitov
- kasneje (transportna plast) bomo spoznali še eno kontrolno vsoto - Internetna kontrolna
vsota

</br>

## Storitve povezavne plasti
povezavna plast izvaja:
1. **okvirjanje datagramov:** 
   
   podatkom višje plasti se doda glava in določi struktura
2. **zaznavanje in odpravljanje napak:**
   
     z dodatnimi biti lahko zaznavamo, ali je prišlo do
napake pri prenosu okvirja; v določenih primerih jo lahko odpravimo
1. **dostop do medija:** 
    
    če je medij deljen, se uporablja MAC protokol (media access
control) in ustrezno naslavljanje udeležencev
1. **zagotavljanje zanesljive dostave:** 
   
   uporaba potrjevanja in ponovnega pošiljanja v
primeru napake pri prenosu na povezavi
1. **kontrola pretoka:**
   
    usklajevanje hitrosti pošiljanja glede na procesorske sposobnosti
prejemnika

</br>

## Protokoli za dostop do skupinskega medija
</br>

### dve vrsti povezav:
- dvotočkovna (point-to-point) povezava: vsaka povezava ima le enega pošiljatelja in
prejemnika (npr. protokola PPP, HDLC)
- oddajna (broadcast) povezava: deljeni medij, več vozlišč komunicira naenkrat (npr.
Ethernet, Wireless LAN)

</br>

To pomeni, da imamo ali deljen kanal ali pa nakljucen dostop
=> Kanal si lahko delimo po frekvencah ali pa po casu ali pa si ga sploh ne delimo

- TDMA(Time devision management protocol)
- FDMA(Frequency...)

</br>

## Protokoli za naklucen dostop
Določajo kako **zaznati** in **ukrepati** ob koliziji.

Primeri MAC protokolov za nakljucni dostop:
1. ALOHA
2. razsekana ALOHA
3. CSMA, CSMA/CD, CSMA/CA

</br>

## ALOHA
paket je ranljiv ves čas oddajanja (čas je zvezen)
- preprost, ni sinhronizacije
- obravnavanje kolizije:
- paket se pošlje do konca  </br>
  **(!) in ponovno pošlje po preteku naključnega intervala časa**

</br>

## Razsekana ALOHA
čas je razsekan na enake časovne intervale (v katerih je možno poslati 1 okvir)
- vozlišča so sinhronizirana, pošiljajo samo ob začetku intervalov,


če pride do kolizije:
- vozlišče pošlje ponovno okvir v naslednjem intervalu z verjetnostjo p


**+ vozlišče lahko uporablja celo hitrost R, enostaven**

**- prazni/kolizijski intervali so neuporabni, potrebna je sinhronizacija časa**

</br>

## CSMA

### **Carrier Sense Multiple Access**
- vztrajni: če je kanal zaseden, posluša dokler se ne sprosti
- nevztrajni: šele po času ponovno prisluhne
- p-vztrajni: vztrajno posluša, ko se kanal sprosti, z verjetnostjo p odda paket
- princip:
- poslušaj, ali že kdo govori, preden spregovoriš (zaznavaj druge pošiljatelje)


> zakaj je sploh potrebno zaznavanje kolizij, če velja princip poslušanja obstoječih govorcev?

**odgovor:** 
zaradi propagacijske zakasnitve signalaskozi prostor medija

</br>

## CSMA/CD

- **zaznavanje kolizij (CD) omogoči prekinitev
komunikacije v primeru kolizije in s tem hitrejšo
sprostitev kanala**

> princip: če vskočiš komu v besedo, nehaj govoriti (prekini kolizijo)
- uporaba jam signala za obveščanje ostalih
vozlišč, naj ne pošiljajo
- Primer: 802.3 Ethernet

</br>

---

# MAC naslovi

 > ### naprave morajo razpoznati, ali je okvir na mediju namenjen njim
 </br>

- namen naslova: naprave opazujejo okvirje na mediju in sprejmejo le tiste, ki so naslovljene na njih


- vsaka naprava ima unikaten naslov

- naslov FF-FF-FF-FF-FF-FF je poseben, pomeni
"broadcast" (prejemniki so vse naprave)

## Vendar pa ...
(tega uradno še ne vemo...) naslavljanje računalnikov Internetu poteka z uporabo IP naslovov (in ne MAC!), ki so na omrežni plasti:
1. MAC naslovi so fizični in stalni za napravo (podobno kot je EMŠO stalen),
2. IP naslovi so logični in zamenljivi oziroma odvisni od lokacije priklopa (podobno kot je poštni naslov spremenljiv)

### **primer:** 
- naprava A želi poslati podatke napravi B. Za pošiljanje jo naslovi z naslovom IP
- naprave B in preda datagram povezavni plasti, ki je zadolžena, da jo dostavi.
- Povezavna plast mora napravo B nasloviti z naslovom MAC. **Kako priti do njega?**
- **Potrebujemo ARP!!!: Address Resolution Protocol!**

## **ARP** - Address Resolution Protocol
Vsako vozlišče ima tabelo ARP (preslikovalna tabela naslovov IP v naslove MAC), ki vsebuje 3 podatke:
**<naslov IP | naslov MAC | TTL (20 min)>**
- ARP deluje samo na lokalnem podomrežju in ne v celem internetu
  
**Kako se tabela ARP napolni?** => uporaba **paketov ARP query**

## Nastanek tabele ARP
> ### A želi poslati datagram vozlišču B, od katerega naslova MAC še nima v tabeli ARP. A naredi naslednje:
1. A pošlje paket za ARP poizvedbo (ARP request/query), ki ga naslovi na vse vmesnike (broadcast, FF-FF-FF-FF-
FF-FF) in ki vsebuje naslov IP vozlišča B "Kakšen je MAC naslov za napravo z naslovom IPxxx?"

1. ARP poizvedbo prejmejo vsa vozlišča, priključena na medij
(... nadaljevanje...)

3. iz naslova IP v poizvedbi vmesnik B zazna, da paket sprašuje po njem
   
4. B odgovori vmesniku A z odgovorom ARP (ARP response), v katerem pošlje svoj naslov MAC (pri tem naslovi samo vozlišče A).
1. A shrani novi podatek v svojo tabelo
</br>

> tabela ARP nastaja torej po principu plug&play

</br>

> Analogija: Profesor zavpije v predavalnici: "Kakšen je EMŠO študenta, ki sedi na tretjem sedežu v drugi vrsti?"

# Aktivna oprema - naprave

- **REPEATER**: ponavljalec (ojačevalec) signala na fizični plasti
  
- **HUB**: razdelilec/zvezdišče, ponavlja signal na vseh ostalih vratih (ista hitrost), ne shranjuje okvirjev,
ista kolizijska domena

- **SWITCH**: omrežno stikalo, preklaplja med priključenimi segmenti, shranjuje okvirje in aktivno ukrepa
na podlagi vsebine

### NALOGE: 
**posredovanje, poplavljanje in filtriranje**






---
---
---
---
---
---


## IP protokol(Internet protocol)

>Interet protokol je shit, svinjarijo se resuje na aplikacijski plasti.

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


> po kmecko: ta preprecuje krozenje v sistemu in delanje odvecnega prometa, ce paket krozi v omrezju po 15 prenosih propade


- UPPER LAYER (PROTOCOL) (8b): številka
enkapsuliranega protokola v podatkih (6-TCP, 17-UDP)
- CHECKSUM (internet checksum)(16b): kontrolna vsota (samo) glave
datagrama, preračuna jo vsak usmerjevalnik
- IP naslovi (32b): naslovi izvora in cilja (začetnega in
končnega sistema)
- OPCIJE (32b): za možne razširitve glave datagrama
(slabosti: večji čas procesiranja, neznana lokacija
začetka podatkov; običajno jih ni, glava dolga 20B)

> ta opcija je slaba in nepotrebna, Bosnic ne supporta :(

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
1. **DISCOVER**
```
src : 0.0.0.0, 68
dest.: 255.255.255.255, 67
yiaddr: 0.0.0.0
transaction ID: 654
```
2. **OFFER**
```
src: 223.1.2.5, 67
dest: 255.255.255.255, 68
yiaddrr: 223.1.2.4
transaction ID: 654
Lifetime: 3600 secs
```
3. **REQUEST**
```
src: 0.0.0.0, 68
dest:: 255.255.255.255, 67
yiaddrr: 223.1.2.4
transaction ID: 655
Lifetime: 3600 secs
```
4. **ACK**
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

## RWND - recieve window

**nadzor pretoka - flow control**
Po prvem sendu si pošiljatelja izmenjata tudi rwnd.

**nadzor zasičenja - congestion control**
zasicenje je stanje omrezja ko prevec posiljateljev posilja prevec podatkov.    
Zacnejo se dogajati stvari kot je naprimer izguba segmentov in velike zakasnitve.
</br>
</br>
> Goodput - uspesno poslan promet (paketi na sekundo)

</br>

tega najbrs nikoli nismo doziveli, ker obstaja congestion control
</br>
</br>

> ARPANET je primer omrezja, ki je veckrat dozivel nasicenje

za cakalni interval in ponovno posiljanje skrbi Transportna plast. 

- Scenarij 1:
segment oddamo le, ko j prostor v vrsti.

- Scenarij 2: dogajajo se izgube paketov in ponovna posiljanja

- Scenarij 3: ponovna posiljanja tudi zaradi velikih zakasnitev.

**pri vec usmerjevalnikih je potreben le en neuspesen hop, da je potrebno ponovno posiljanje.**

</br>

**Kaj se da narediti?**

### TCP nadzor nasicenja 

za vsako uspesno prejeto potrditev lahko povec hitrost, drugace jo zmanjsa.

> Deluje kot AIMD algoritem - additive increase multiplicative decrease

### Pocasen zacetek -  slow start

cwnd = 1

- za vsako prejeto potrditev povecaj cwnd za * 2
(gre za eksponentno rast)

- Ko pride do prve zgube se cwnd ponovno nastavi na 1.

- Naslednjic slow start gre do prve meje, nato prestavimo na pocasnejse narascanje cwnd - ja. Natancneje za eno enoto MSS - ja. Temu delu pravimo congestion avoidance.

**kaj se zgodi, ce pride do izgube?**

**3x podvojeni ACK**: prheod v fazo hitre obnove "fast recovery", v katero preideta pocasen zacetek in izogibanje zasicenju ob prejemu 3 ponovljenih ACK.

### **Verzije TCP po casovnici:**
1. **TCP Tahoe**
2. **TCP Reno**
3. **TCP Vegas**
</br>

> "UDP je kot prijatelj, ki prevec govori"

**MSS = MTU - 40**

</br>
</br>
</br>

## Uvod v aplikacijsko plast:

### Omrežne aplikacije:
**arhitekture aplikacij:**
- streznik in odjemalec
- peer-to-pear(P2P)
- mešana arhitektura

</br>

**Skype**

# Predavanje 25.4.2022

## http:

pojavi  se v 90ih, omogoca:
1. dostop do vsebin na zahtevo
2. vsak lahko oglasuje
3. iskanja, povezave, grafika, vmesniki, multimedija

- RFC 1945 (HTTP 1.0)
- RFC 2616 (HTTP 1.1)

**DELOVANJE:**
- odjemalec naslovi  TCP zahtevo n avrata 80 strezika
- streznik vrne http odgovor
- TCP poskrbi za potrditve...

**Zanimivost => telnet...**

**zahteva:**
```
GET /index.html 
```

Statusne spremenljivke:
1. Information (1xx)
2. Successful (2xx)
3. Rediection (3xx)
4. Client Error (4xx)
5. Server Error (5xx)

> Po rokovanju je 5s odprta povezava, nato se zapre.

> HTTP ne pomni povezav

**PROBLEM:    varovanje zasebnosti !!**

## Piškotki: 
Indentifikator, ki ga strežnik dodeli uporabniku in ga uporabnik lokalno shrani. 

## Medstreznik (proxy)

odgovarja ne zahteve namesto streznikov, ima svoje kopije spletnih strani (ce je nima, jo zahteva od pravega streznika)

**Zakaj medstrezniki?**

igra vlogo odjemalca in streznika

- odjemalec sam ne ve, da mora sprasevati proxi streznik, zato je treba nastaviti proxi.

**pogojna zahteva:**      
if-modified-since:

## Elektronska posta

**Struktura odjemalec - streznik**

**Protokol SMTP**

- Simple mail transfer protocol

- star vec kot 30 let

- UPORABLJA TCP VRATA 25

- ukazi in telo sporocila morata biti kodirana s 7-bit ascii.


