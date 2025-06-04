Rebeca Navarro, Miguel Quenta, Zein Tonconi

# Misioón 1 

La solución está en: backup.js

# Misión 2

```sql
update staff set 
	first_name = 'first_name',
	last_name = 'last_name',
	email = 'email',
	picture = 'picture',
	username = 'username',
	password = 'password';

update customer set
	first_name = 'first_name',
	last_name = 'last_name',
	email = 'email';

update address set
	address = 'address',
	address2 = 'address2',
	phone = 'phone';
```

# Misión 3

1. Primer paso, después de crear el backup, revisamos en docker.

ls
 ## backup_2025-06-04T18:5.dump
 backup_29_05_2025.dump
'backup_29_05_2025.dump'$'\033''[D'$'\033''[D'$'\033''[D'$'\033''[D'$'\033''[D'$'\033''[D'$'\033''[D'$'\033\033''[B'$'\033''[B'$'\033''[B'$'\033''[B'$'\033''[B'$'\033''[A'$'\033''[A'
 backup_2905.dump
 backup.dump

2. Segundo paso, realizamos el siguiente comando para crear una nueva base de datos:

docker exec -u postgres bdavanzada-postgres createdb -U rebe taller_3

3. Tercer paso, restauramos la copia que creamos en esta nueva base de datos:

docker exec -u postgres bdavanzada-postgres pg_restore -U rebe -d taller_3 /tmp/backup_2025-06-04T18:5.dump

# Misión 4

La solución está en: delete.js