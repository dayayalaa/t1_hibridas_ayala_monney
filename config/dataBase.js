const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect('mongodb://localhost:27017/arcana');

const db = mongoose.connection;

db.on('error', () => console.error('Error'));
db.once('open', ()=>{
    console.log('Conexión correcta');
})

module.exports = db;