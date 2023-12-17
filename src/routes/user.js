const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

//registra a un usuario
router.get('/register', userController.register);
router.post('/register', userController.singUp)

//inicia la sesión de un usuario
router.get('/login', userController.login);
router.post('/singIn', userController.singIn)

module.exports = router;