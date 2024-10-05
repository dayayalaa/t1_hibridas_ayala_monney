const express = require('express');
const routerAPI = require('./routes');

const port = process.env.PORT;
const arcana = express();

//Middleware
arcana.use( express.json());

// Llama a las rutas
routerAPI(arcana);

// Inicia el servidor
arcana.listen( port, () => { 
    console.log(`Servidor en el puerto ${port}`)
});