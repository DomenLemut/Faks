# Kompleksnost algoritmov

## Velikostni red kompleksnosti

- asimptotična zgornja meja Ο
- spodnja meja Ω
- stroga meja θ

$T (n)  O( g (n))  c, n0  0 : n  n0  c  g (n)  T (n)  0

> Pri dovolj velikem n je kompleksnost nasega programa navzgor omejana s funkcijo g(n)

- poljubna konstatnta c.

**Pogoste kompleksnosti:** log n, n, n log n, n² , n³ , n⁴ ,2^n , n!, n^n

## Racunanje z O(0)

- eliminacija konstante

$$c > 0 => O(c * f(n)) = O(f(n))$$
- vsota

$$ O(f(n)) + O(g(n)) = O(max(f(n), g(n)))$$
- prevladujoöa funkcija

$$(for every)n * n0 : f (n) * g (n) * O( f (n)) * O( g (n)) * O( f (n))$$

- produkt

$$O(f(n)) * O(g(n)) = O( f (n) * g (n))$$
- tranzitivnost

$$f(n) = O(g(n)), g(n) = O(h(n)) => f(n) = O(h(n))$$

- refleksivnost

$$f(n) = O(f(n))$$

</br></br></br>

### Primeri:
$2n² + nlogn$

n² raste hitreje, zato lahko nlogn izpustim, rezultat je $O(n²)$

> vbistvu locimo enacbo na faktorje, faktor, ki najhitreje raste je casovna zahtevnost

</br></br></br>

## Parametri kompleksnosti

1. **osnovne operacije:** $O(1)$
2.**pri zaporedju ukazov** seštevamo zahtevnosti
3. **pri pogojih** štejemo kompleksnost izračuna
pogoja in maksimum vseh možnih izbir
4. **pri zankah** seštejemo kompleksnost izračuna
pogoja in enkratne izvedbe zanke ter pomnožimo s
številom izvajanja zanke
5. **pri rekurziji** izrazimo zahtevnost kot rekurenčno
enačbo

</br></br></br></br>

## Doloci casovno zahtevnost
### Primer 1:
```java
s = 0;
for (int i = 1; i <= n; i++)
    for (int j = 1; j <= n; j++)
        s = s + t[i][j];
```

1. dolocimo velikost problema -> to je n
2. $$O(1) + (O(1) + O(1) + (O(1) * O(1) + O(1) + O(1)) * n)) * n$$
3. $$O(1) + O(1) = O(2) = O(1)$$
4. $$O((4n + 2)n + 1) = O(4n²) = O(n²)$$
5. casovna zahtevnost n²

</br>
</br>

### Primer 2:
```java
void p(int n, int m, int k) {
    s = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j += k)
            s = s + t[i][j];
}
```

> tukaj je situacija drugacna, velikost problema dolocajo spremenljivke n, m in k

</br>

**Resitev je $O(n m/k)$**

</br>
Operacije, kot so dostop do pomnilnika zanemarimo, ker pr aps delamo izklucno abstraktne stvari, go f yourself hardware. 😊

</br></br>
### Primer 3: rekurzija

```java
void p(int n, int m){
    if (m > 0)
        for (int i = 1; i <= n; i++)
            p(n, m-1);
}
```
</br>

$$T(n, 0) = 0(1)$$
$$T(n, m) = 0(1) + (O(1) + O(1) + T(n, m - 1)) * n$$
$$T(n, m) = O(n * T(n, m - 1)) = O(n * n * T(n, m - 2))$$
$$= 0(n * n * n * T(n, m- 3)) = O(n^m * O(1)) = O(n^m)$$

