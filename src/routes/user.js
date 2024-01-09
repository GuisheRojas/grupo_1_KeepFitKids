const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

const {check} = require('express-validator');
const guestMiddleware = require('../middlewares/guestMiddleware.js');

let singInValidation = [
    check('email')
        .notEmpty().withMessage('Debe ingresar un email')
        .isEmail().withMessage('Formato de email invalido'),
    check('password')
        .notEmpty().withMessage('Debe ingresar una contraseña')
]

//registra a un usuario
router.get('/register', userController.register);
router.post('/register', userController.singUp)

//inicia la sesión de un usuario
router.get('/login', userController.login);
router.post('/singIn', singInValidation, guestMiddleware, userController.singIn)

module.exports = router;