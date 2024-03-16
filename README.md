# Proyecto Wendy

Proyecto en desarrollo con fines educativos

## Iniciar Proyecto  <sub>Development Modes</sub>

<br>

### Backend / Server


> Antes de inicializar cualquier comando respecto al servidor, es importante recordar que tenemos que entrar a la carpeta del servidor, cuyo nombre es **backend**
>
> ```bash
> cd backend 
> ```
> 

Para ejecutar el servidor de forma local, tenemos dos comandos:

```bash
  docker compose -f docker-compose-dev.yml up --build
```
Este primer comando arranca el servidor y vuelve a construir la imagen del contenedor en docker. Deber ser usado en caso de que la configuración de la imagen haya sido actualizada, es decir, que se haya modificado un *Dockerfile* o un *docker-compose.yml*

```bash
  docker compose -f docker-compose-dev.yml up
```

Este segundo comando arranca el contenedor sin necesidad de volver a construir la imagen. Ideal si ya tenemos el contenedor creado y no queremos volver a construir la imagen desde cero

#### Enviroment

- **PORT**: *number* = Puerto en el cual se ejecutará el Backend.
  `PORT=3000`
- **MONGO_INITDB_ROOT_USERNAME**: *string* = Configuración del contenedor docker para asignar el nombre de usuario para ingresar a la base de datos. `MONGO_INITDB_ROOT_USERNAME=root`
- **MONGO_INITDB_ROOT_PASSWORD**: *string* = Configuración del contenedor docker para asignar la contraseña de usuario para ingresar a la base de datos. `MONGO_INITDB_ROOT_PASSWORD=password`
- **DATABASE_URL**: *string* = URI de conexión MongoDB. Debe tomarse en cuenta las varibles **MONGO_INITDB_ROOT_USERNAME** y **MONGO_INITDB_ROOT_PASSWORD**, definidas previamente. `DATABASE_URL=mongodb://root:password@wendy_db:27017/`

<br>

### Frontend / Client

Se escogió [**Vite**](https://vitejs.dev) como sistema de empaquetado para este proyecto. Esto por su fácil manejo y ecosistema rápido y eficiente

> Antes de inicializar cualquier comando respecto al frontend, es importante recordar que tenemos que entrar a la carpeta del frontend, cuyo nombre es **frontend**
>
> ```bash
> cd frotend
> ```
> 

Para ejecutar el servidor de forma local y en modo desarrollo tenemos el comando:

```bash
  npm run dev
```

Este comando enciende el proyecto en modo desarrollo, permitiendo que tener una previsualización en tiempo real de nuestro proyecto mientras codificamos