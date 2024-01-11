const {check} = require('express-validator')

let singInValidation = [
    check('email')
        .notEmpty().withMessage('Debe ingresar un email')
        .isEmail().withMessage('Formato de email invalido'),
    check('password')
        .notEmpty().withMessage('Debe ingresar una contraseña')
]

module.exports = singInValidation