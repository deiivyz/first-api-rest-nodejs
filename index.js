// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'
 
// Cargamos el m�dulo de mongoose para poder conectarnos a MongoDB
const mongoose = require('mongoose');
 
// Le indicamos a Mongoose que haremos la conexi�n con Promesas
mongoose.Promise = global.Promise;
 
// Cargamos el fichero app.js con la configuraci�n de Express
const app = require('./app');
 
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
const port = 3800;

// Usamos el m�todo connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb://localhost:27017/first_database', {useNewUrlParser: true})
        .then(() => {
            // Cuando se realiza la conexi�n, lanzamos este mensaje por consola
            console.log('La conexi�n a MongoDB se ha realizado correctamente!!');
 
            // CREAR EL SERVIDOR WEB CON NODEJS
            app.listen(port, () => {
                console.log('El servidor esta corriendo en localhost:3800');
            });
        })
        .catch(err => console.log(err));
        // Si no se conecta correctamente escupimos el error