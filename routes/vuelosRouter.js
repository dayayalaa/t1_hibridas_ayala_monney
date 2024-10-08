const express = require('express');
const router = express.Router();

const {
    obtenerVuelos,
    obtenerVuelosId,
    crearVuelos,
    borraVueloId,
    actualizarVueloId,
    numeroBuscar,
} = require('../controllers/vuelosControllers');

router.get('/', obtenerVuelos);
router.get('/:id', obtenerVuelosId);
router.post('/', crearVuelos);
router.delete('/:id', borraVueloId);
router.put('/:id', actualizarVueloId);
router.get('/buscar', numeroBuscar);

module.exports = router;