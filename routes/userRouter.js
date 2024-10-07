const express = require('express');
const router = express.Router();

const {  crearUser,
    login,
    getUsers,
    getUsersById,
    deleteUserById,
    updateUserById } = require('../controllers/userControllers');


router.get('/', getUsers );
router.post('/', crearUser);
router.post('/login', login);
router.get('/:id', getUsersById);
router.delete('/:id', deleteUserById);
router.put('/:id', updateUserById);

module.exports = router;