# VajeSQL

## Like za primerjavo nizov
```sql
BETWEEN ... AND .., IS NULL, LIKE "_%...."
```

## Naloga1

```sql
SELECT id as ID, ime AS "User name", rojen AS Birth 
FROM oseba
Where rojen < "2003-11-03"
```


## Naloga3
```sql
SELECT c.id, c.date, c.header, c.content
FROM cable c
WHERE c.embassy_id = 140
ORDER BY c.date DESC
LIMIT 5
```

## Naloga4

Izpisi vse podatke o ambasadi v ljubljani

```sql
SELECT *
FROM embassy e
WHERE e.name LIKE "%Ljubljana%"
```

## Naloga 6

```sql
SELECT 
FROM facebook f LEFT OUTER JOIN twitter t ON f.oid = t.oid OR f.oid = t.sid

```
