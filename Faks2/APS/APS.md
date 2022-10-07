<img src="img/java.png" alt="drawing" width="100" style="display: block;
  margin-left: auto;
  margin-right: auto"/>

# Iteracija in rekurzija

- **Iteracija**   ->   zanke
- **Rekurzija**   ->   Program, ki kliče samega sebe, dokler ni izpolnjen ustavitveni pogoj.

## Rekurzivna definicija:

1. Rekurzivna spremenljivka
2. Robni pogoj

</br>
</br>


# Primer - Izracun fakultete

## Iterativno

```java
int fakulteta = 1;

for(int i = 1; i <= n; i++)
    fakulteta = fakulteta * i;
```

## Rekurzivno
- Kaj je rekurzivna spremenljivka -> n
- Kaj mi pomaga rešitev manjšega primera== -> Če imam izračunan (n - 1)! lahko izračunam n!
- Kakšen bo robni primer -> (n = 0), 0! = 1
- Kakšen bo splošni primer -> (n > 0), n! = n * (n - 1)!

```java
private int fakulteta(int n) {
    if(n == 0) return 1;
    else { 
        return n * fakulteta(n - 1);
    }
}
```

</br>
</br>

# Ali računalnik lahko izvaja rekurzivne programe?

> Ne.  Treba je rekurzivni algoritem najprej spremeniti v iterativnega, da se lahko izvaja na računalniku.

Malo je tricky odgovor, odvisen od definicije.

# Sklad (Stack)

Sklad je zbirka elementov, kjer elemente vedno - dodajamo in odvzemamo na vrhi sklada.

## Operaciej za ADT STACK 
- MAKENULL - naredi prazen sklad,

# O REKURZIJI

- zahteva veö re#ije kot iteracija in j epomnilniüko bolj zahtevna od iteracije (sklici se shranjujejo na skladu)
- globina rekurzije = potrebna velikost sklada
- rekurzivna koda krajsa
- rek. probleme lahko resujemo tudi z iteracijami:
- vsako repno rekurzijo lahko zamenljamo za iterativno z uproabo sklada

# Repna rekurzija
> Ko se izvajanje repne rekurzije konca, je s tem hkrati konec izvajanja procedure.

Repno rekurzijo lahko preprosto nadomestimo z iterativno zanko.

# Repna rekurzija -> Iteracija

```java
static public void hanoi(char A, char B, char C, int n) {
    if(n > 0) {
        hanoi(A, C, B, n - 1);
    }
}
```
```java
```

**!!!! -> Pri rekurzivni funkciji za izracun fakultete ne govorimo o repni rekurziji**

**Pri rekurzivnem raöunanju fibonaccijevega ütevila govorimo o iterativnem - dinaminem programiranju**
</br>
</br>

# Iterativna resitev fibonaccija
```java 
public static int fib(int n){
    int n1 = 1; n2 = 1; n3;
    for(int i = 2; i < n; i++){
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n2;
}
```


