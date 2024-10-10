const express = require('express');
const router = express.Router();

const {
    crearReserva,
    obtenerReservas,
    obtenerReservaId,
    borrarReserva,
    actualizarReserva,
} = require('../controllers/reservasController');

router.get('/', obtenerReservas);
router.get('/:id', obtenerReservaId);
router.post('/', crearReserva);
router.delete('/:id', borrarReserva);
router.put('/:id', actualizarReserva);

module.exports = router;