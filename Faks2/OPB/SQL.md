
![Theta](img/sql.png)

# Ukazi 
- Ukazi iz skupine DML:  ```SELECT, INSERT, UPDATE, DELETE```
- Ukazi iz skupine DDL: ```CREATE, ALTER, SET TRANSACTION,...```

SQL sestavljata dve skupini ukazov:
1. Skupina ukazov za DDL (Data Definition Language) za opredelitev
strukture podatkovne baze in
1. Skupina ukazov za DML (Data Manipulation Language) za
poizvedovanje in ažuriranje podatkov.

```sql
create table oseba (
    EMŠO number (13),
    ime char(20),
    priimek char(20)
)
```

```sql
select ime, priimek
from oseba
where ime = 'Tine'
order by priimek
```

> Do 1999 SQL brez ukazov za kontrolni tok - potrebno obvladati s programskim jezikom ali interaktivno.

</br></br>

# Stavki skupine SQL DML:

1. DML skupina zajema SQL stavke za manipulacijo s podatki
1. SELECT - Izbira
1. INSERT - Dodajanje
1. DELETE - Brisanje
1. UPDATE - Spreminjanje
> Sintaksa SELECT stavka najbolj kompleksna


</br></br>
## SELECT stavek...
```sql
SELECT [DISTINCT | ALL]
{* | [columnExpression [AS newName]] [,...] }
FROM TableName [alias] [, ...]
[WHERE condition]
[GROUP BY columnList]
[HAVING condition]
[ORDER BY columnList]
```
> SELECT Določa stolpce, ki naj se pojavijo v izhodni relaciji

1. ```FROM``` Določa tabele za poizvedbo
1. ```WHERE``` Filtrira vrstice
1. ```GROUP``` BY Združuje vrstice po vrednostih izbranih stolpcev
1. ```HAVING``` Filtrira skupine glede na določene pogoje
1. ```ORDER BY``` Določa vrstni red vrstic na izhodu

## Primeri na podlagi sheme employlees 
```
employees(emp_no, birth_date, first_name, last_name, gender,
hire_date)
titles(emp_no, title, from_date, to_date)
salaries(emp_no, salary, from_date, to_date)
dept_emp(emp_no, dept_no, from_date, to_date)
departments(dept_no, dept_name)
dept_manager(dept_no, emp_no, from_date, to_date
```

## Pravila formtiranja SQL primerov:

- SQL izrazi so neobčutljivi na velikost črk.
- Barve niso predpisane.
- Rezervirane besede SQL ne smemo uporabljati za definicije
podatkovnih objektov (tabel, stolpcev itn.)
- Sintaksa, ki jo bomo uporabljali za primere:

```sql
select * from employees where ime = 'Marko'
```

## Enostaven izpis...
- Izpiši vse podatke o zaposlenih
```sql
select * from employees;
```
- Izpiši imena in priimke zaposlenih

```sql
select first_name, last_name from employees;
```

- Izpiši starost delavcev ob zaposlitivi

```sql
select first_name, last_name, birth_date, hire_date, DATEDIFF(hire_date birth_date)/365 as 'Starost ob zaposlitvi' from employees;
```

je enako kot

```sql
select first_name, last_name, YEAR(hire_date)-YEAR(birth_date) as 'Starost ob zaposlitvi' from employees;
```

> SQL ne loci velikih in malih crk pri sintaksi

### Iskanje z uporabo BETWEEN
- Izpiši zaposlene rojene med 30. in 31. decembrom 1953.
```sql
select * from employees where birth_date between '1955-12-30' and '1955-12-31';
```

-Izpiši podatke o delovnih mestih, kjer gre za delovno mesto staff
ali senior staff.
```sql
select * from titles where title in ('Staff’, 'Senior Staff');
```

## Iskanje po članstvu množice
- Izpiši podatke o delovnih mestih, kjer gre za delovno mesto staff
ali senior staff.

```sql
select * from titles
where title in ('Staff’, 'Senior Staff');
```

## Iskanje z vzorcem
- Izpiši vse zaposlene, ki se pišejo na ‘B’ in so se rodili prvega v
mesecu v šestdesetih letih.

```sql
select * from employees
where last_name like 'B%' and
birth_date like '_ _6_ _ _ _ _01';
```

## NULL

```sql
select * from employees
where hire_date is null;
```

## Sortiranje vrstic v izhodni relaciji
- Izpiši podatke o zaposlenih sortirane po priimku naraščujoče in po
datumu rojstva padajoče.

```sql
select emp_no, last_name, birth_date
from employees
order by last_name, birth_date desc;
```