const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservasSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true,
    },
    vuelos: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Vuelos', 
        required: true,
    },
    fecha: {
        type: Date,
        default: Date.now,
    }
});

const Reservas = mongoose.model('Reservas', reservasSchema);
module.exports = Reservas;
