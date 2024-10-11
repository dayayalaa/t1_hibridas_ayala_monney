const express = require('express');
const router = express.Router();

const {
    obtenerVuelos,
    obtenerVuelosId,
    crearVuelos,
    borraVueloId,
    actualizarVueloId,
    numeroBuscar,
    filtrarVuelosPorDestino, 
    filtrarVuelosPorAerolinea 
} = require('../controllers/vuelosControllers');

router.get('/', obtenerVuelos);
router.get('/:id', obtenerVuelosId);
router.post('/', crearVuelos);
router.delete('/:id', borraVueloId);
router.put('/:id', actualizarVueloId);
router.get('/buscar/:numeroVuelo', numeroBuscar);


//filtros 
router.get('/filtrar/destino/:destino', filtrarVuelosPorDestino); 
router.get('/filtrar/aerolinea/:aerolinea', filtrarVuelosPorAerolinea);

module.exports = router;