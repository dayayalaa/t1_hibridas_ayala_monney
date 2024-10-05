const User = require('../models/userModels');
const bcrypt = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const claveSecreta = process.env.SECRETKEY;
const salt = 10;

const crearUser = async (req , res) => {
    const {nombre , email , contraseña} = req.body;
    if (!nombre || !email || !contraseña){
        res.status(400).json({msg: 'Faltan parametros obligatorios', data: {nombre, email , contraseña} })
    }
    const contraseñaHash = await bcrypt.hash(contraseña , salt );

    try{
        const newUser = new User ({ nombre, email , contraseña: contraseñaHash})
        await newUser.save();
    } catch (error){
        console.error(error);
        res.status(500).json({ msg: 'Ups! Tenemos un error! :C' , data: {}})
    }

    }

    const login = async (req , res) => {
       try{
        const { email , contraseña} = req.body;
        const user = await User.findOne({ email});
        if( !user){
            res.status(401).json({msg: 'El email no existe', data: {}});
        }
        const contraseñaOk = await bcrypt.compare (contraseña, userr.contraseña);
        if( !contraseñaOk){
            res.status(401).json({ msg: 'La contraseña es incorrecta', data: {} });
        }
        const data = {
            userId: user._id,
            name: user.name
        }
        const token = jwt.sign(data, claveSecreta , {expiresIn: '1h'});
        console.log(token);
        res.status(200).json({ msg:'success', data:{ jwt: token}});
       } catch(error) {
            console.error(error);
            res.status(500).json({ msg:'Tenemos un error :c', data:{}});
        }
       }

const getUsers = async (req , res) => {
    const users = await User.find();
    res.status(200).json({ msg: 'Ok' , data: users});
}
    
    


module.exports = {crearUser , login , getUsers }


