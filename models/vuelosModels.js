const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vuelosSchema = new Schema({
    numeroVuelo: {
        type: String,
        required: true, 
        unique: true 
    },
    origen: {
        type: String,
        required: true 
    },
    destino: {
        type: String,
        required: true 
    },
    fechaSalida: {
        type: Date,
        required: true 
    },
    fechaLlegada: {
        type: Date,
        required: true 
    },
    duracion: {
        type: Number, 
        required: true 
    },
    aerolinea: {
        type: String,
        required: true 
    },
    numeroAsientosDisponibles: {
        type: Number,
        required: true 
    },
    precio: {
        type: Number, 
        required: true 
    },
    escala: {
        type: Boolean, 
        default: false 
    },
    lugarEscala: {
        type: [String], 
        default: [] 
    },
});


const Vuelos = mongoose.model('Vuelos', vuelosSchema);
module.exports = Vuelos; 
