const express = require('express');
const router = express.Router();

const {
    crearReserva,
    obtenerReserva,
    obtenerReservaId,
    borrarReserva,
    actualizarReserva,
} = require('../controllers/reservasController');

router.get('/', obtenerReserva);
router.get('/:id', obtenerReservaId);
router.post('/', crearReserva);
router.delete('/:id', borrarReserva);
router.put('/:id', actualizarReserva);

module.exports = router;