const express = require('express');
const routerAPI = require('./routes/index.js');
require('dotenv').config();

const port = process.env.PORT;
const arcana = express();

//Middleware
arcana.use( express.json());

// Llama a las rutas
arcana.get('/', (req, res) => {
    res.status(200).send('<h1> HOLAAA </h1>');
})

routerAPI(arcana);

// Inicia el servidor
arcana.listen( port, () => { 
    console.log(`Servidor en el puerto ${port}`)
});