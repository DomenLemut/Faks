<head>
    <link rel="stylesheet" type="text/css" href="../.style/md_style.css" />
</head>

# ARM - Cortex

> prvo predavanje

## RISC IN ZASNOVA

**ARM temelji na RISC tehnologiji, samo en pomnilniski operand je lahko v ukazih. Po RISC-u ima zadostno stevilo registrov.**

`Tako naj bi bil RISC res veliko boljsi kot cisc CISC...?`

### PROGRAMSKI MODEL CPE:

Ima 16 splosno namenskih registrov (R0 - R15), pri tem imajo specificni registri dolocen namen(R13 - STACK POINTER, R14 - LINK REGISTER, R15 - PROGRAM COUNTER), vsi pa so 32 bitni.

ortogonalnost iz ARS-a (ukazi se enako kodirajo, so enako dolgi...)

## PREKINITVE

Glavni program sploh ne sme zaznati, da se je prekinitveno servisni podprogram sploh izvedel
Registri morajo biti enaki kot so bili prej. Temu recemo `TRANSPARENTNOST`.

Resitve tega problema sta da vse **`registre, uporabljene med izvedbo`** prekinitveno servisnega programa shranimo na sklad, druga pa je da vse **`registre`** pred izvajanjem prekinitveno servisnega podprograma vrzemo na sklad.

`Pri preklopu se zagotovo se umazejo R12, R13, R14, R15, zraven pa se zaradi posiljanja argumentov v podprograme umazejo tudi R0 - R3. Vse te rabimo dati nujno na sklad.`

### OSTALI REGISTRI

imamo dva razlicna stack pointerja, `MSP(Main stack pointer) in PSP(Processor stack pointer)`. Pri tem je `MSP` namenjen kodi iz operacijskega sistema, `PSP` pa je namenjen kodi iz zunanjih programih.

imamo se dva registra, do katerih lahko dostopamo le s posebnimi ukazi: `CR() in PSR(program status register)`

**PSR ima 4 zastave**: Z,N,C,V (zero, negative, carry, overflow)

**CR ima S(SPSEL) bit**: bit Select bit (ta bit multipleksira med MSP in PSP spack poinnterji s fizicnim multiplekserjem). Tega navadno nastavlja le CPE, odvisno od nivoja priviligiranosti.

**CR ima nPRV bit**

### NIVOJI PRIVILIGIRANOSTI

V tem sistemu imamo dva nivoja to sta: `Visji (Handler mode) - namenjen PSP` (Obstajajo ukazi, ki jih procesor lahko izvaja le v visjem nacinu proviligiranosti in `Nizji (Thread mode)` - namenjen MSP

## SKLAD

#### **ARM ABI** : FULL DESCENDING

- SP kaze na zadnji vstavljen podatek

- Sklad narasca v smeri padajocih naslovov

#### **PUSH REG:**

```
SP <- SP - 4 (ADDI R13, R13, -4)
M[SP] <- reg (sw O(R13), reg) "(STR)"
```

> drugo predavanje

### Ukazi za delo s skladom

Imamo dva ukaza, to sta `LDMFD`, ki deluje kot **POP** ukaz, in `STMFD`, ki deluje kot **PUSH** ukaz.

RISC procesorji nimajo ukazov za delo s skladom.

### Vstop v prekinitev

Ko procesor dobi prekinitveno zahtevo, `CPE rabi izvedeti, kdo ga je prekinil`. Za ta namen ima Cortex `254 ID-jev vira` (od 1 do 254).

1. **Izvede ukaze** do vklučno stopnje EX v cevovodu.

2. CPE hardwersko (brez izvajanja ukazov) **na sklad porine naslednje registre**: PSR, PC, LR, R12, R3, R2, R1, R0. (to je del konteksta, ki se hardwaresko shrani in programerja za to ni treba skbeti.)
3. ```
   PC <- M [4 * ID]
   ```
   <small>(ID je identifikator vira prekinitve, ki ga je prejel CPE, 4 \* ID je naslov v vektorju prekinitvenih vektorjev, M je pomnilnik, PC je program counter) </small>

S posebnim ukazom `IRED` se vrnemo iz prekinitveno servisnega podprograma.

Vrnitev iz Prekinitveno servisnega podprograma:

```
pc <- lr
lr <- M[sp]
sp <- sp + 4 (ali 8)
```