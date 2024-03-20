const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

    /* CONTROLLER */
const userController = require('../controllers/userController');

    /* MIDDLEWARES */

const guestMiddleware = require('../middlewares/users/guestMiddleware');
const authMiddleware = require('../middlewares/users/authMiddleware');

//hace las validaciones para iniciar sesión
const singInValidation = require('../middlewares/users/singInValidationMiddleware');
const upload = require('../middlewares/users/multerMiddleware');

//hace las validaciones para el registro de un usuario
const registerValidation = require('../middlewares/users/validateRegisterMiddleware');

    /* RUTAS */

//registra a un usuario
router.get('/register', guestMiddleware, userController.register);

//procesa a un usuario
router.post('/register', upload.single('avatar'), registerValidation, userController.processRegisterUser);

//inicia la sesión de un usuario
router.get('/login', guestMiddleware, userController.login);
router.post('/login', singInValidation, userController.singIn);
// router.post('/login', userController.singIn);


//accede al perfil del usuario
router.get('/profile',authMiddleware, userController.profile);

//muestra el formulario de edición de la información del usuario
router.get('/editProfile', authMiddleware, userController.editProfile);
router.post('/editProfile', authMiddleware, upload.single('avatar'), registerValidation, userController.editedProfile);
router.post('/logOut', authMiddleware, userController.logOut);

//module.exports = upload
module.exports = router;