const Vuelos = require('../models/vuelosModels');

// Obtener vuelos
const obtenerVuelos = async (req, res) => {
    try{
        const vuelos = await Vuelos.find();
        res.status(200).json({msg: 'Exito en la obtencion de vuelos', vuelos});
    }
    catch (error){
        res.status(500).json({msg: 'Error en la obtencion de vuelos', error});
    }
}

const obtenerVuelosId = async (req, res) =>{
    const {id} = req.params;

    try{
        const vuelos = await Vuelos.findById(id);
        res.status(200).json({msg: 'Exito en la obtencion de vuelos por id', vuelos});

        if (!vuelo) {
            return res.status(404).json({ msg: 'Vuelo no encontrado' });
        }
        res.status(200).json({ msg: 'Éxito en la obtención de vuelo por ID', vuelo });
    }
    catch (error){
        res.status(500).json({msg: 'Error en la obtencion de vuelos por id', error});
    }
}

//Craer vuelos
const crearVuelos = async (req, res) => {
    const { numeroVuelo, origen, destino, fechaSalida, fechaLlegada, duracion, aerolinea, numeroAsientosDisponibles, precio, escala, lugarEscala } = req.body;

    if( !numeroVuelo || !origen || !destino || !fechaSalida || !fechaLlegada || !duracion, aerolinea || !numeroAsientosDisponibles || !precio || !escala || !lugarEscala ){
        res.status(400).json({
            msg: 'Faltan parametros',
            data:{ numeroVuelo, origen, destino, fechaSalida, fechaLlegada, duracion, aerolinea, numeroAsientosDisponibles, precio, escala, lugarEscala }
        });
    }

    try{
        const nuevoVuelo = new Vuelos({ numeroVuelo, origen, destino, fechaSalida, fechaLlegada, duracion, aerolinea, numeroAsientosDisponibles, precio, escala, lugarEscala });
        await nuevoVuelo.save();
        res.status(200).json({ msg: 'Vuelo creado', data: nuevoVuelo});
    }
    catch (error){
        res.status(500).json({msg: 'Error en la creacion del vuelo', error});
    }
}

//Borrar por Id
const borraVueloId = async (req, res) =>{
    const {id} = req.params;

    try{
        const vuelo = await Vuelos.findByIdAndDelete(id);
        if( vuelo ){
            res.status(200).json({ msg: "Se borro", data: vuelo});
        } else {
            res.status(404).json({ msg: "No se encontro el vuelo ", data: { }});

        }
    }
    catch (error){
        console.log(error);
        res.status(500).json({ msg: 'Hasy un error al eliminar el vuelo', data: {}});
    }
}

//Actualizar
const actualizarVueloId = async (req, res) => {
    const { id } = req.params;
    const { numeroVuelo, origen, destino, fechaSalida, fechaLlegada, duracion, aerolinea, numeroAsientosDisponibles, precio, escala, lugarEscala } = req.body;
    
    try{
        const vuelo = await Vuelos.findByIdAndUpdate(id, { numeroVuelo, origen, destino, fechaSalida, fechaLlegada, duracion, aerolinea, numeroAsientosDisponibles, precio, escala, lugarEscala }, { new: true });
    
    if( vuelo ){
        res.status(200).json({ msg: "Se actualizo", data: vuelo});
    } else {
        res.status(404).json({ msg: "No se encontro el vuelo", data: { }});

    }
    }
    catch (error){
        console.log(error);
        res.status(500).json({ msg: 'Hasy un error al actualizar el vuelo', data: {}});
    }
}

module.exports = {
    obtenerVuelos,
    obtenerVuelosId,
    crearVuelos,
    borraVueloId,
    actualizarVueloId
};