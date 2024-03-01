const path = require('path')
const { body } = require('express-validator')

const registerValidation=[
    body('email')
        .notEmpty().withMessage("Debe completar el campo Email").bail()
        .isEmail().withMessage("Debe ser un mail valido"),
    body('password')
        .notEmpty().withMessage("Debe completar el campo contraseña").bail()
        .isLength({min: 6}).withMessage("La contraseña debe tener minimo 6 caracteres"),
    body('name')
        .notEmpty().withMessage("Debe completar el campo Nombre").bail()
        .isLength({min: 3}).withMessage("El campo Nombre tiene un mínimo de 3 caracteres"),
    body('first_name')
        .notEmpty().withMessage("Debe completar el campo Nombre").bail()
        .isLength({min: 3}).withMessage("El campo Nombre tiene un mínimo de 3 caracteres"),
    body('last_name')
        .notEmpty().withMessage("Debe completar el campo apellido").bail().isLength({min: 3}).withMessage("El campo Apellido tiene un mínimo de 3 caracteres.").bail()
        .trim(),
    body('avatar')
        .custom((value, {req}) =>{
            let file = req.file;
            if(file){
                let fileExt = path.extname(file.originalname);
                let acceptedExt = ['.png', '.jpg', '.gif', '.jpeg'];
                if(!acceptedExt.includes(fileExt)){
                    throw new Error ('Las extensiones permitidas son .png, .jpg');
                }
            }
            return true;
        })
]

module.exports = registerValidation