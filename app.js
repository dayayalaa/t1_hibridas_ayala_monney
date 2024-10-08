const express = require('express');
const routerAPI = require('./routes/index.js');
require('dotenv').config();

const port = process.env.PORT;
const api = express();

//Middleware
api.use( express.json());

// Llama a las rutas
api.get('/', (req, res) => {
    res.status(200).send('<h1> HOLAAA </h1>');
})

routerAPI(api);

// Inicia el servidor
api.listen( port, () => { 
    console.log(`Servidor en el puerto ${port}`)
});