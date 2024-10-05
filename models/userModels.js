const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: {
        type: String,
    }, 
    email: { 
        type: String,
        required: true,
        unique: true,
    },
    contraseña:{
        type: String,
        required: true,
    },
    rols: { 
        type: String,
        enum: ['user', 'admin'],
        default: 'user'

    },
    created:{
        type: Date,
        default : Date.now,
    }
});


const User = mongoose.model('User', userSchema);
module.exports = User;


