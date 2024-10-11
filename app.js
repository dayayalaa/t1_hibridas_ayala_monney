const express = require('express');
const routerAPI = require('./routes/index.js');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

const port = process.env.PORT;
const api = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => console.error('Error al conectar con MongoDB'));
db.once('open', () => {
    console.log('Conexión a MongoDB correcta');
});

// Importar modelos
const Vuelos = require('./models/vuelosModels');
const Users = require('./models/userModels');
const Reservas = require('./models/reservasModels');

// Función para importar datos
const importData = async () => {
    try {
        const vuelosData = JSON.parse(fs.readFileSync('./data/arcana.vuelos.json', 'utf-8'));
        console.log('Vuelos:', vuelosData);

        const usersData = JSON.parse(fs.readFileSync('./data/arcana.users.json', 'utf-8'));
        console.log('Usuarios:', usersData);

        const reservasData = JSON.parse(fs.readFileSync('./data/arcana.reservas.json', 'utf-8'));
        console.log('Reservas:', reservasData);

        //Importar 
        await Vuelos.deleteMany();
        await Vuelos.create(vuelosData);
        console.log('Vuelos importados exitosamente');

        await Users.deleteMany();
        await Users.create(usersData);
        console.log('Usuarios importados exitosamente');

        await Reservas.deleteMany();
        await Reservas.create(reservasData);
        console.log('Reservas importadas exitosamente');

    } catch (error) {
        console.error('Error al importar datos:', error);
    }
};

importData();

api.use(express.json());
api.use(express.static('public'));

routerAPI(api);

api.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
