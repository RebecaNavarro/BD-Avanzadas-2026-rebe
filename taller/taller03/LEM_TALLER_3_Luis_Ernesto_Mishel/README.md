# 🛡️ Taller 3: DevOps vs Hacker - Defender la Base de Datos

Este repositorio contiene los scripts y documentación necesarios para proteger, ofuscar y restaurar la base de datos `dvdrental` ante accesos sospechosos. Cumple con 4 misiones esenciales como parte del plan de defensa ante el "hacker desconocido" (posiblemente Huguito o el Hindú vengador).

---

## 🧩 Misión 1: Backups Automáticos

### 🎯 Objetivo
Realizar un respaldo periódico de la base de datos `dvdrental` usando `pg_dump`.

### 📝 Script
El archivo `backup.js` realiza lo siguiente:
- Ejecuta `pg_dump` desde Node.js.
- Guarda el archivo con nombre basado en la fecha y hora actual.

### 📦 Requisitos
- Node.js
- PostgreSQL instalado y accesible desde CLI

### 📁 Ejecución
```bash
node backup.js
```

---

## 🧩 Misión 2: Ofuscamiento de Datos

### 🎯 Objetivo
En caso de brecha de seguridad, anonimizar los datos personales de la base de datos para proteger la identidad de los clientes, empleados y locaciones.

### 📄 Script
El archivo `anonimizar.sql` incluye:
- Reemplazo de nombres, apellidos y correos electrónicos con datos ficticios.
- Anonimización de direcciones, ciudades y países.
- Ofuscación de contraseñas con hash MD5 (solo con fines demostrativos).

### 📁 Ejecución
```bash
psql -U postgres -d dvdrental -f anonimizar.sql
```

⚠️ **Asegúrate de tener una copia de respaldo antes de ejecutar este script.**

---

## 🧩 Misión 3: Restauración desde Backups

### 🎯 Objetivo
Restaurar la base de datos desde el último backup disponible.

### 📁 Ejecución
```bash
pg_restore -U postgres -d dvdrental -1 backups/dvdrental-ULTIMO_TIMESTAMP.backup
```

- Reemplaza `ULTIMO_TIMESTAMP` por el nombre del archivo más reciente.
- Asegúrate de que la base de datos `dvdrental` exista antes de ejecutar.
- Puedes automatizar la restauración con un script adicional si se desea.

---

## 🧩 Misión 4: Limpieza Automática de Backups (cada 2 días)

### 🎯 Objetivo
Eliminar backups antiguos (más de 2 días) para evitar sobrecarga en el sistema.

### 📄 Script
Archivo: `cleanup.js`
- Elimina todos los archivos `.backup` en `/backups` que tengan más de 2 días.

### 📁 Ejecución Manual
```bash
node cleanup.js
```

### 🕒 Automatización con cron
Abre el configurador de cron:
```bash
crontab -e
```

Añade esta línea para ejecutar el script cada 2 días:
```bash
0 0 */2 * * /usr/bin/node /ruta/completa/cleanup.js
```

Ajusta la ruta a donde tengas tu script.

---

## 📝 Notas Adicionales
- Asegúrate de configurar las variables de entorno necesarias para la conexión a PostgreSQL (ej. `PGUSER`, `PGPASSWORD`, `PGHOST`, etc.).
- Mantén los scripts y backups en un directorio seguro con permisos restringidos.
- Los scripts están diseñados para entornos controlados; adapta las rutas y configuraciones según tu entorno.