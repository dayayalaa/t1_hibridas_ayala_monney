const express = require('express');
const router = express.Router();

const {
    obtenerVuelos,
    obtenerVuelosId,
    crearVuelos,
    borraVueloId,
    actualizarVueloId
} = require('../controllers/vuelosControllers');

router.get('/', obtenerVuelos);
router.get('/:id', obtenerVuelosId);
router.post('/', crearVuelos);
router.delete('/:id', borraVueloId);
router.put('/:id', actualizarVueloId);

module.exports = router;