const Reservas = require('../models/reservasModels');

//Crear reserva
const crearReserva = async (req, res) => {
    const { vueloId, usuarioId } = req.body;

    try {
        const nuevaReserva = new Reserva({
            vuelo: vueloId,    
            usuario: usuarioId    
        });
        await nuevaReserva.save();
        res.status(201).json({ msg: 'Reserva creada', data: nuevaReserva });
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear la reserva', error });
    }
};

//Obtener reserva
const obtenerReserva = async (req, res) => {
        try {
            const reserva = await Reserva.findById(req.params.id)
            //.populate() trae datos de otros modelos
                .populate('vuelo')   
                .populate('usuario'); 
            res.status(200).json(reserva);
        } catch (error) {
            res.status(500).json({ msg: 'Error al obtener la reserva', error });
        }
};

//Obtener reserva por id
const obtenerReservaId = async (req, res) => {
    const {id} = req.params;

    try{
        const reserva = await Reservas.findById(id);
        res.status(200).json({msg: 'Exito al encontrar la reserva por id', reserva});

        if(!reserva){
            return res.status(404).json({msg:'Reserva no encontrada'});
        }
            res.status(200).json({msg: 'Exito al encontrar la reserva por id', reserva});
    } catch (error){
        res.status(500).json({ msg: 'Error al obtener la reserva por id', error });
    }
};

//Borrar reserva
const borrarReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reserva = await Reservas.findByIdAndDelete(id);
        if (reserva) {
            res.status(200).json({ msg: 'Reserva borrada', data: reserva });
        } else {
            res.status(404).json({ msg: 'Reserva no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ msg: 'Error al borrar la reserva', error });
    }
};

//Actualizar reserva
const actualizarReserva = async (req, res) => {
    const { id } = req.params;
    const { vueloId, usuarioId } = req.body;

    try {
        const reserva = await Reservas.findByIdAndUpdate(id, { vuelo: vueloId, usuario: usuarioId }, { new: true, runValidators: true });

        if (!reserva) {
            return res.status(404).json({ msg: 'Reserva no encontrada' });
        }
        res.status(200).json({ msg: 'Reserva actualizada', data: reserva });
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar la reserva', error });
    }
};

module.exports = {
    crearReserva,
    obtenerReserva,
    obtenerReservaId,
    borrarReserva,
    actualizarReserva,
}