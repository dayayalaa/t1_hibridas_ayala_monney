const Vuelos = require('../models/vuelosModels');

// Obtener vuelos
const obtenerVuelos = async (req, res) => {
    try{
        const vuelo = await Vuelos.find();
        res.status(200).json({msg: 'Exito en la obtencion de vuelos', vuelo});
    }
    catch (error){
        res.status(500).json({msg: 'Error en la obtencion de vuelos', error: error.message});
    }
}

const obtenerVuelosId = async (req, res) => {
    const { id } = req.params;

    try {
        const vuelo = await Vuelos.findById(id);

        if (!vuelo) {
            return res.status(404).json({ msg: 'Vuelo no encontrado' });
        }

        res.status(200).json({ msg: 'Éxito en la obtención de vuelo por ID', vuelo });
    } catch (error) {
        res.status(500).json({ msg: 'Error en la obtención de vuelos por id', error: error.message  });
    }
};

//Craer vuelos
const crearVuelos = async (req, res) => {
    const { numeroVuelo, origen, destino, fechaSalida, fechaLlegada, duracion, aerolinea, numeroAsientosDisponibles, precio, escala, lugarEscala } = req.body;


    if(!numeroVuelo || !origen || !destino || !fechaSalida || !fechaLlegada || !duracion || !aerolinea || !numeroAsientosDisponibles || !precio){
        return res.status(400).json({
            msg: 'Faltan parámetros',
            data: { numeroVuelo, origen, destino, fechaSalida, fechaLlegada, duracion, aerolinea, numeroAsientosDisponibles, precio, escala, lugarEscala }
        });
    }

    try {
        const nuevoVuelo = new Vuelos({
            numeroVuelo,
            origen,
            destino,
            fechaSalida,
            fechaLlegada,
            duracion,
            aerolinea,
            numeroAsientosDisponibles,
            precio,
            escala,
            lugarEscala
        });
        await nuevoVuelo.save();
        res.status(201).json({ msg: 'Vuelo creado', data: nuevoVuelo }); 
    } catch (error) {
        console.error(error); 
        res.status(500).json({ msg: 'Error en la creación del vuelo', error: error.message });
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
        res.status(500).json({ msg: 'Hay un error al eliminar el vuelo', data: {}});
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
        res.status(500).json({ msg: 'Hay un error al actualizar el vuelo', data: {}});
    }
}

//Buscar por numero de vuelo (nombre)
const numeroBuscar = async (req, res) => {
    const { numeroVuelo } = req.params;

    try {
        if (numeroVuelo) {
            const vuelo = await Vuelos.findOne({ numeroVuelo: numeroVuelo });
            
            if (!vuelo) {
                return res.status(404).json({ mensaje: 'Vuelo no encontrado' });
            }

            return res.json(vuelo);
        } else {
            const vuelos = await Vuelos.find();
            res.json(vuelos);
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en la obtención de vuelos por numero', error: error.message });
    }
};


//Filtra por destino
const filtrarVuelosPorDestino = async (req, res) => {
    const { destino } = req.params; 

    if (!destino) {
        return res.status(400).json({ msg: 'Falta el parámetro de destino' });
    }

    try {
        const vuelos = await Vuelos.find({ destino }); 

        if (vuelos.length === 0) {
            return res.status(404).json({ msg: 'No se encontro vuelos en ese destino' });
        }
        res.status(200).json({ msg: 'Vuelos encontrados', vuelos });
    } catch (error) {
        res.status(500).json({ msg: 'Erro en obtener los datos', error: error.message });
    }
};


// Filtra por aerolinea
const filtrarVuelosPorAerolinea = async (req, res) => {
    const { aerolinea } = req.params; 

    if (!aerolinea) {
        return res.status(400).json({ msg: 'Falta el parámetro de aerolínea' });
    }

    try {
        const vuelos = await Vuelos.find({ aerolinea }); 

        if (vuelos.length === 0) {
            return res.status(404).json({ msg: 'No se encontro vuelos en esa aerolinea' });
        }

        res.status(200).json({ msg: 'Se obtuvo los datos ', vuelos });
    } catch (error) {
        res.status(500).json({ msg: 'Error en obtener los datos de la aerolinea', error: error.message });
    }
};


module.exports = {
    obtenerVuelos,
    obtenerVuelosId,
    crearVuelos,
    borraVueloId,
    actualizarVueloId,
    numeroBuscar,
    filtrarVuelosPorDestino,
    filtrarVuelosPorAerolinea
};