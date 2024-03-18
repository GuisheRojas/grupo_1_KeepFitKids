const path = require('path')
const { body } = require('express-validator')

const registerValidation=[
    body('email')
        .notEmpty().withMessage("Debe completar el campo Email").bail()
        .isEmail().withMessage("Debe ser un mail valido"),
    body('name')
        .notEmpty().withMessage("Debe completar el campo Nombre de usuario").bail()
        .isLength({min: 3}).withMessage("El campo Nombre de usuario tiene un mínimo de 3 caracteres"),
    body('first_name')
        .notEmpty().withMessage("Debe completar el campo Nombre").bail()
        .isLength({min: 3}).withMessage("El campo Nombre tiene un mínimo de 3 caracteres"),
    body('last_name')
        .notEmpty().withMessage("Debe completar el campo apellido").bail()
        .isLength({min: 3}).withMessage("El campo Apellido tiene un mínimo de 3 caracteres.").bail()
        .trim(),
    body('password')
        .notEmpty().withMessage("Debe completar el campo contraseña").bail()
        .isLength({min: 8}).withMessage("La contraseña debe tener un mínimo de 8 caracteres.").bail()
        .custom((value) => {
            const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])[A-Za-z\d$@$.-_!%?&]{8,}$/;
            if (passwordRegex.test(value)) {
              throw new Error('La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial');
            }
            return true;
          }),
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