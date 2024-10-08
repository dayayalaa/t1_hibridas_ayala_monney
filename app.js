const express = require('express');
const routerAPI = require('./routes/index.js');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT;
const api = express();

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('error', () => console.error('Error'));
db.once('open', ()=>{
    console.log('Conexión correcta');
})

module.exports = db;

api.use( express.json());
api.use(  express.static('public') );

// Llama a las rutas
api.get('/', (req, res) => {
    res.status(200).send('<h1> HOLAAA </h1>');
})

routerAPI(api);

// Inicia el servidor
api.listen( port, () => { 
    console.log(`Servidor en el puerto ${port}`)
});