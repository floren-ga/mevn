# Creación de un proyecto con node/express

## En primer lugar se crea una estructura de carpetas
- controllers 
- middelwares
- models
- public
- routes
- services

#### package.json

npm init

#### Instalar express

```javascript
npm install express --save 
// --save: para que lo guarde en package.json

```
#### Instalar nodemon

```javascript
npm install nodemon -D   
// -D: dependencia de desarrollo

```
#### crear index.js

```
const express = require("express");
const app = express();

// Asignar puerto dinámicamente por la máquina que ejecute el script
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(app.get("port"));
});
```

#### Middelwares
MORGAN: Es un middleware para la captura de solicitudes HTTP para Node. js para su posterior registro y seguimiento

```javascript
npm install morgan --save
 
```

CORS: permite hacer peticiones desde otras computadoras a nuestro servidor

```javascript
npm install cors --save
 
```
#### Instalación de babel
Babel es una herramienta que nos permite transformar nuestro código JS de última generación (o con funcionalidades extras) a JS que cualquier navegador o versión de Node.js entienda.

```javascript
npm install babel-cli --save
npm install babel-preset-env babel-preset-stage-3 --save
 
```
Es preciso crear en este momento un fichero de configuración de *babel*. Para ello, en la raíz del proyecto creamos el fichero *.babelrc*. Y escribimos lo siguiente en él:

```
 {
  "presets": [
    "env", 
    "stage-3"
  ]
}
```

Una vez hecho esto, en el fichero *package.json* hacemos un cambio en *scripts*: 

```
 "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js --exec babel-node"
  },
```
Desde la consola, para arrancar el servidor, ejecutamos: 

```
 npm run dev
```

#### Pasar el código de EcmaScript 5 a la versión 6:

```javascript
//  Hasta ahora el fichero index.js  contenía este código:

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// middelwares:
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Asignar puerto dinámicamente por la máquina que ejecute el script
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(app.get("port"));
});

// Con EcmaScript 6 quedaría así:

import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// middelwares:
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Asignar puerto dinámicamente por la máquina que ejecute el script
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(app.get("port"));
});

```

#### Mostrar el fichero index.html

Se añade un fichero en la carpeta *public* denominado *index.html*.

En el fichero *index.js* añadimos la siguiente línea:

```javascript
 // Esta ruta permite saber dónde está la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));
```

Una vez hecho esto se visualizará en localhost:3000 la página *index.html*.


## BASE DE DATOS MONGODB

#### Instalación de mongoose

```javascript
 npm install mongoose --save

// Conexión a la bbdd:
mongoose.Promise = global.Promise;
const dbUrl = "mongodb://localhost:27017/dbmedia";
mongoose
  .connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then((mongoose) => console.log("Conectando a la BBDD en el puerto 27017"))
  .catch(console.log(err));

```

## Crear un modelo

Ver el fichero `models/categoria.js`

## Crear un controlador

Ver el fichero `controllers/CategoriaController.js`


## RUTAS


```javascript
// Este enrutador permite que el middelware devuelva promesas
npm install express-promise-router --save
```


### Encriptar contraseña

```javascript
 npm install bcryptjs --save
```


### Login - usuarios

Dentro del controlador del usuario se añade la función *login*
En nuestro proyecto, lo guardaremos en la carpeta *services*

Seguridad con token.
El usuario se loguea. Si es correcto el usuario y la password, el servidor generará un token, que envía al cliente (navegador). Este lo usará para todas las peticiones que haga al servidor, que lo verificará.

```javascript
npm install jsonwebtoken --save
 
```

### Crear middelware

En la carpeta middelware se crea un fichero denominado `auth.js` que se compone de 4 funciones: 

```
  verifyUsuario: async (req, res, next) => {},
  verifyAdministrador: async (req, res, next) => {},
  verifyAlmacenero: async (req, res, next) => {},
  verifyVendedor: async (req, res, next) => {},

```

Una vez implementadas las funciones, se utilizará este middelware en el fichero `routes/usurio.js`.

Utilizando el middelware anterior, lo usaremos también para restringir el uso de las rutas de categorías y artículos para usuarios autorizados.


 Añadir el modelo Persona

 Añadir el controlador PersonaController

 Añadir `routes/persona.js`.

Añadir el modelo Ingreso;
Añadir el controlador IngresoController;
  - añadir función aumentarStock()
  - añadir función disminuirStock()
  - añadir el método grafico12meses

Añadir el model Articulo;
Añadir el controlador ArticuloController;
  - añadir método queryCodigo -> para buscar por código de barras


Añadir modelo venta.js
Añadir controlador VentaController.js
  - Añadir el método grafico12meses


Última lección Udemy:  sección 11 - 42.