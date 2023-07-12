# Primer Proyecto Back-End con NodeJS by: @DatBrian

## Descripción del proyecto:
#### Proyecto de práctica en el que se realizó la implementación de un Back-End completo hecho con Node.JS el cual administra una base de datos relacional en una ejemplificación de sistema de gestión de usuarios y citas, productos entre otros.

---

## Técnologías utilizadas:
#### Para este proyecto se utilizó el entorno de ejecución **NodeJS** con su framework [ExpressJS](https://expressjs.com/). Para la base de datos se utilizó **MySQL** y la librería [mysql2](https://github.com/sidorares/node-mysql2) para la implementación de la misma en el código y todo el código está en **TypeScript** para proporcionar un tipado estático.
##### (El resto de dependencias se podrán visualizar en el archivo package.json que en su mayoría son de desarrollo ya que las necesarias para producción son las que se mencionan anteriormente.)

---

## Estructura y Configuración:
### **Directorio Raíz:**
#### En el directorio raíz se encuentran los archivos principales de configuración sin entrar aún al código.
#### ![Alt text](./screenshots/estructura.png)
- #### Dentro de la carpeta [build](build) se encuentra todo el código TypeScript transpilado a JavaScript.

- #### La carpeta [node_modules](node_modules) es la que se creará al inicializar el proyecto y contiene todas los archivos necesarios para las dependencias que se vayan a utilizar.

- #### La carpeta [src](src) contiene todo el código del proyecto.

- #### El archivo .env-example es el que se utilizará más adelante para configurar las variables de entorno.

- #### El archivo [package.json](package.json) al igual que la carpeta [node_modules](node_modules) se creará automáticamente al inicializar el proyecto y aqui se podrán realizar configuraciones del mismo y de las dependencias que este contiene.

- #### El archivo [tsconfig.json](tsconfig.json) es el archivo que contiene todas las configuraciones necesaarias para que **TypeScript** funcione correctamente.

### **Carpeta del proyecto ([src](src)):**
![Alt text](./screenshots/src.png)

- `index.ts`: Archivo principal que inicializa la aplicación y configura las rutas.
- `app.ts`: Archivo principal que configura la aplicación Express y establece las rutas y middlewares.
- `common/`: Carpeta que contiene funciones comunes y una clase de enrutador común.
- `config/`: Carpeta que contiene archivos de configuración, como `ConnectDataSource.ts` para la conexión a la base de datos y `EnvConfig.ts` para las variables de entorno.
- `controllers/`: Carpeta que contiene los controladores de cada entidad, como `CitasController.ts`.
- `db/`: Carpeta que contiene la lógica de conexión a la base de datos y el manejo del datasource, como `Connection.ts` y `DataSource.ts`.
- `interfaces/`: Carpeta que contiene las interfaces utilizadas en el proyecto, como `RoutesInterface.ts`.
- `middlewares/`: Carpeta que contiene los middlewares utilizados en las rutas, como `ValidateMiddlewareDTO.ts`.
- `model/`: Carpeta que contiene los modelos de datos, como DTO y entidades.
- `model/dto/`: Carpeta que contiene los objetos de transferencia de datos (DTO), como `CitasDTO.ts`.
- `model/entities/`: Carpeta que contiene las entidades del dominio, como `CitasEntity.ts`.
- `services/`: Carpeta que contiene la lógica de negocio, como `Service.ts`.
- `repositories/`: Carpeta que contiene los repositorios de datos, como `CitasRepository.ts` en los que se realizan las consultas.
- `routes/`: Carpeta que contiene las rutas de la aplicación, como `CitasRoutes.ts`.

## **Inicialización:**

1. Primero debes encontrarte en la carpeta del proyecto luego de clonar el repositorio.

2. Ejecuta el siguiente comando para instalar todas las dependencias:

```
npm install
```

3. Importa la base de datos: en el directorio raíz encontrarás un archivo [backup.sql](backup.sql) el cual solo tendrás que ejecutarlo en una consola de mysql.

4. Cambia el nombre del archivo [.env-example](.env-example) a **.env**

5. Dentro del archivo **.evn** configura las variables de entorno según tus configuraciones.

6. Ejecuta el siguiente comando para inicializar todos los servicios y en la consola se mostrarán las demás instrucciones:

```
npm run start:dev
```

## Ruta de archivos:
#### Aquí se muestra como funciona el proyecto y la ruta que recorren los datos y peticiones dentro de la estructura previamente explicada:

1. Al realizar la petición al servidor la ruta de la solicitud se compara con las rutas definidas en [app.ts](./src/app.ts) las cuales se llaman en el archivo principal [index.ts](./src/index.ts).

2. Ya en el archivo [app.ts](./src/app.ts) se configuran las rutas llamando al respectivo archivo de clase dependiendo de la ruta especificada anteriormente como por ejemplo [Routes.ts](./src/routes/CitasRoutes.ts)

3. Ya en los archivos de rutas específicos se definirán los métodos disponibles y llamará al controlador de esa ruta cuando se llame a su respectivo **path**.

4. En el controlador se definen los métodos que se van a utilizar en la consulta y llama al archivo de servicio.

5. En el archivo de servicio se realizará toda la lógica de negocio necesaria para llamar al archivo de repositorio el que realizará las consultas y interactuará con la base de datos.

# **EndPoints:**

## GET:

**https://{host}:{port}/api/v1/{citas}**
