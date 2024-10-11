const Reservas = require('../models/reservasModels');

// Crear reserva
const crearReserva = async (req, res) => {
    const { vuelos, user } = req.body;

    // Validar IDs
    if (!mongoose.Types.ObjectId.isValid(vuelos) || !mongoose.Types.ObjectId.isValid(user)) {
        return res.status(400).json({ msg: 'ID de vuelos o user no válido' });
    }

    try {
        const nuevaReserva = new Reservas({
            vuelos,
            user
        });
        await nuevaReserva.save();
        res.status(201).json({ msg: 'Reserva creada', data: nuevaReserva });
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear la reserva', error: error.message });
    }
};

// Obtener reserva
const obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reservas.find()
            .populate('vuelos')
            .populate('user');

        res.status(200).json({ msg: 'Reservas obtenidas', data: reservas });
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener las reservas', error: error.message });
    }
};


// Obtener una reserva por ID
const obtenerReservaId = async (req, res) => {
    const { id } = req.params;

    try {
        const reserva = await Reservas.findById(id)
            .populate('vuelos')
            .populate('user');

        if (!reserva) {
            return res.status(404).json({ msg: 'Reserva no encontrada' });
        }

        res.status(200).json({ msg: 'Reserva obtenida', data: reserva });
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener la reserva', error: error.message });
    }
};

// Borrar reserva
const borrarReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reserva = await Reservas.findByIdAndDelete(id);
        if (!reserva) {
            return res.status(404).json({ msg: 'Reserva no encontrada' });
        }
        res.status(200).json({ msg: 'Reserva borrada', data: reserva });
    } catch (error) {
        res.status(500).json({ msg: 'Error al borrar la reserva', error: error.message });
    }
};

// Actualizar reserva
const actualizarReserva = async (req, res) => {
    const { id } = req.params;
    const { vuelos, user } = req.body;

    try {
        const reserva = await Reservas.findByIdAndUpdate(id, { vuelos, user }, { new: true, runValidators: true });

        if (!reserva) {
            return res.status(404).json({ msg: 'Reserva no encontrada' });
        }

        res.status(200).json({ msg: 'Reserva actualizada', data: reserva });
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar la reserva', error: error.message });
    }
};

module.exports = {
    crearReserva,
    obtenerReservas,  
    obtenerReservaId,
    borrarReserva,
    actualizarReserva,
};
