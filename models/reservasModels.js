const mongoose = require('mongoose');
const Vuelos = require('./vuelosModels');
const User = require('./userModels');
const Schema = mongoose.Schema;

const reservasSchema = new Schema({
    user:{
        type: Schema.ObjectId,
        ref: User,
        required: true,
    },
    vuelos:{
        type: Schema.ObjectId,
        ref: Vuelos,
        required: true,
    },
    fecha:{
        type: Date,
        default: Date.now,
    }
});

const Reservas = mongoose.model('Reservas', reservasSchema);
module.exports = Reservas;