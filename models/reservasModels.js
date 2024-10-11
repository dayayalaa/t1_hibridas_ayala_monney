const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservasSchema = new Schema({
    user:{
        type: String,
        required: true,
    },
    vuelos:{
        type: String,
        required: true,
    },
    fecha:{
        type: Date,
        default: Date.now,
    }
});

const Reservas = mongoose.model('Reservas', reservasSchema);
module.exports = Reservas;