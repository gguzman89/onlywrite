# Download Samba

Una app para la descarga de archivo by Windows. Inicialmente con el puerto 445 por defecto. Hecho en Typescript. Usamos la imagen de Samba para Docker para vincular las carpetas.

A continuacion los pasos para levantar el proyecto clonado.

### Instalacion

1. Clonar el `.env.template` a `.env` y configurar las variables de entorno
2. Ejecutar `npm install` para instalar las dependencias del package.json
3. Si estas en desarrollo `npm run dev`
4. O la opcion de `npm start` 

-----

## Docker compose

> [!NOTE]
> Verificar tener instalado la herramienta completa Docker.
> Archivos que tenes que tener a mano .env, Dockerfile, docker-compose.yml, docker-compose.prod.yml.


### Casa Central :post_office:

1. Usar el branch: STAGING ( a menos que se diga lo contrario )
2. Verificar los PUERTOS en `.env, Dockerfile y docker-compose`
3. Crear la image de Docker :cook:
    - `~ docker build -t name:tag .`
    - volver a correr el mismo comando sin `:tag`. Esto permite versionar la imagen localmente.
    - resolver, cualquier tipo de error durante la creacion de la image.
4. Crear y levantar el contanedor de Docker :rocket:
    - confirmar el archivo _docker-compose.prod.yml_ la seccion `image: name:tag` ( usar la imagen creada anteriormente)
    - `~ docker compose up -d` modo detach para volver a tener control de la terminal
    - `~ docker container ls` ver info de los containers levantados
    - `~ docker compose logs -f -t` estar posicionado en la raiz del proyecto.
5. Verificar el puerto con el Servidor o apuntar el servicio. ( `NginX` )
6. Sugerir cambio o actualizacion en el [Nginx rutas](https://docs.google.com/spreadsheets/d/1TdGw16t3BCZXn5VLKBEWBU4lfl8egMkZoCpmSpd4f4M/edit?usp=sharing)

> [!TIP]
> *.prod.yml correrlo de la siguiente manera `docker compose -f docker-compose.prod.yml up -d`.
> Usamos samba como un servicio que vincula el filesystem de Windows con Linux entre otras funcionalidades.