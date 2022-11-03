# VajeSQL

## Like za primerjavo nizov
```sql
BETWEEN ... AND .., IS NULL, LIKE "_%...."
```

## Vaja1

```sql
SELECT id as ID, ime AS "User name", rojen AS Birth 
FROM oseba
Where rojen < "2003-11-03"
```