const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

                            /* CONTROLLER */
const userController = require('../controllers/userController');


                            /* MIDDLEWARES */

const guestMiddleware = require('../middlewares/users/guestMiddleware');

//hace las validaciones para iniciar sesión
const singInValidation = require('../middlewares/users/singInValidationMiddleware');

const upload = require('../middlewares/users/multerMiddleware')

//hace las validaciones para el registro de un usuario
const registerValidation = require('../middlewares/users/validateRegisterMiddleware')


                            /* RUTAS */

//registra a un usuario
router.get('/register', guestMiddleware, userController.register);

//procesa a un usuario
router.post('/register', registerValidation, upload.single('avatar'), userController.processRegisterUser);

//inicia la sesión de un usuario
router.get('/login', guestMiddleware, userController.login);
router.post('/singIn', singInValidation, userController.singIn)

//module.exports = upload;
module.exports = router;