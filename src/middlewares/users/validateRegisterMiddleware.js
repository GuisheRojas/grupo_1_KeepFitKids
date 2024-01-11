const path = require('path')
const { check } = require('express-validator')

const registerValidation=[
    check('email')
        .notEmpty().withMessage("Debe completar el campo Email").bail()
        .isEmail().withMessage("Debe ser un mail valido"),
    check('password')
        .notEmpty().withMessage("Debe completar el campo contraseña").bail()
        .isLength({min: 6}).withMessage("Minimo 6 carateres"),
    check('name')
        .notEmpty().withMessage("Debe completar el campo Nombre").bail()
        .isLength({min: 3}).withMessage("El campo Nombre tiene un mínimo de 5 caracteres"),
    check('lastname')
        .notEmpty().withMessage("Debe completar el campo apellido").bail()
        .trim(),
    check('avatar')
        .custom((value, {req}) =>{
            let file = req.file;
            if(!file){
                throw new Error ('Debes cargar una imagen del usuario');
            } else {
                let fileExt = path.extname(file.originalname);
                let acceptedExt = ['.png', '.jpg', '.gif'];
                if(!acceptedExt.includes(fileExt)){
                    throw new Error ('Las extensiones permitidas son .png, .jpg');
                }
            }
            return true;
        })
]

module.exports = registerValidation