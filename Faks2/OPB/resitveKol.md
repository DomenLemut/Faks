1. 
```sql
select *
from zaposleni
where 1
order by Placa desc
limit 2
```


2. Vsi ki imajo 2. najvisjo placo

```sql
select * 
from zaposleni
where Placa = (
    select max(Placa)
    from zaposleni
    where placa not in (
        select max(Placa) from zaposleni
        )
)
```

3.
```sql
select Priimek
from zaposleni
where ID_delo="Manager" or ID_delo="Clerk"
```

# Resitve kollokvij lanski

1. Northwind - najvisje in druge najvisje place

```sql
select distinct employeeId, LastName, FirstName, Salary
from employees natural join employeeterritories
where Salary >= (
select max(Salary)
from Employees
where Salary not in(
select max(Salary)
from employees)
)
order by salary desc
```

```sql
Select distinct b.ime, b.priimek
from zaposleni as a, zaposleni as b
where a.ID_zaposleni = b.ID_nadrejeni
```
21. Northwind

```sql
SELECT CustomerID, CompanyName, COUNT(OrderID) as "Stevilo Narocil"
FROM customers c JOIN orders o USING(CustomerID)
GROUP BY CustomerID 
HAVING COUNT(OrderID) <= ALL (SELECT COUNT(OrderID) FROM customers c JOIN orders o USING(CustomerID)
GROUP BY CustomerID HAVING COUNT(OrderID) > 1)
```

> Izpišite vse podatke o zaposlenih z največjo plačo.

```sql
SELECT *
FROM zaposleni
WHERE Placa = (
SELECT Max(Placa)
FROM zaposleni
)
```

> Potrebno je pripraviti izpis vseh produktov iz kategorije "Seafood" s podatki, prikazanimi v spodnji tabeli. Atribut priporočena cena se izračuna za tiste produkte, ki jih je v zalogi manj kot 50 in naj bo enak ceni produkta povišan za 30%. Za vse ostale produkte naj priporočena cena ostane enaka.

```sql
SELECT *
FROM products JOIN categories
WHERE categoryname = "Seafood"
```


> Izpišite imena tistih produktov, katerih cena je nižja od povprečja vseh produktov. V rezultat naj gredo le tisti produkti, ki še nikoli niso bili poslani (ShipCountry) v Francijo.
```sql
SELECT distinct ProductName
from products
where UnitPrice < (
select avg(UnitPrice)
from products
)
```

> Izpišite podatke o zaposlenih, ki imajo po višini drugo najvišjo plačo.
```sql
select Ime, Placa
from zaposleni
where Placa = (
select Max(Placa)
from zaposleni
where placa != (
select Max(Placa)
from zaposleni
))
```

> Izpišite število zaposlenih v oddelku "SALES".
```sql
select Count(ID_zaposleni)
from zaposleni join oddelek as o
where o.Ime = "Sales"
```