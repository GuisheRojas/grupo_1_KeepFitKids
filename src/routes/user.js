const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Controller
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

//Middlewares - SILVINA - VIDEO
//const upload = require('../middlewares/multerMiddleware');
//const validations = require('../middlewares/validateRegisterMiddleware');

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {callback(null, path.join(__dirname ,'../../public/img/users'))},
    filename: (req, file,callback) => {callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))}
})
const upload = multer({storage});

const {body} = require('express-validator');

//hace las validaciones para un usuario
const validateFormUser=[
    body('name')
        .notEmpty().withMessage("Debe completar el campo Nombre").bail()
        .isLength({min: 5}).withMessage("El campo Nombre tiene un mínimo de 5 caracteres"),
        
    body('lastname')
        .notEmpty().withMessage("Debe completar el campo apellido").bail()
        .trim(),
    body('email')
        .notEmpty().withMessage("Debe completar el campo Email").bail()
        .isEmail().withMessage("Debe ser un mail valido"),
    body('password')
        .notEmpty().withMessage("Debe completar el campo contraseña").bail()
        .isLength({min: 6}).withMessage("Minimo 6 carateres")
        .trim(),
        
    body('avatar')
        .custom((value, {req}) =>{
            let file = req.file;
            if(!file){
                throw new Error ('Debes cargar una imagen del usuario');
            } else {
                let fileExt = path.extname(file.originalname);
                let acceptedExt = ['.png', '.jpg'];
                if(!acceptedExt.includes(fileExt)){
                    throw new Error ('Las extensiones permitidas son .png, .jpg');
                }
            }
            return true;
        })
]


// 
//registra a un usuario
router.get('/register', userController.register);
router.post('/register', userController.singUp);

//procesa a un usuario
router.post('/register', upload.single('avatar'), validateFormUser, userController.processRegisterUser);

//inicia la sesión de un usuario
router.get('/login', userController.login);
router.post('/singIn', singInValidation, guestMiddleware, userController.singIn)

//module.exports = upload;
module.exports = router;