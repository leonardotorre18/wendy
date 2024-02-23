# Proyecto Wendy

Proyecto en desarrollo con fines educativos

## Iniciar Proyecto  <sub>Development Modes</sub>

<br>dsfasdf
dsfasdfsadf
### Backend / Server


> Antes de inicializar cualquier comando respecto al servidor, es importante recordar que tenemos que entrar a la carpeta del servidor, cuyo nombre es **backend**
>
> ```bash
> cd backend 
> ```
> 

Para ejecutar el servidor dedsa f s forma local, tenemos dos comandos:
sdf  f
```bash
  docker compose -f docker-compose-dev.yml up --builddsfasdfads
```
Este primsd dfdser comando arranca el servidor y vuelve a construir la imagen del contenedor en docker. Deber ser usado en caso de que la configuración de la imagen haya sido actualizada, es decir, que se haya modificado un *Dockerfile* o un *docker-compose.yml*

```bash
  docker compose -f docker-compose-dev.yml up
```

Este segundo comando arranca el contenedor sin necesidad de volver a construir la imagen. Ideal si ya tenemos el contenedor creado y no queremos volver a construir la imagen desde cero

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