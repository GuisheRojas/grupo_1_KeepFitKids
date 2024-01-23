const path = require('path')
const { body } = require('express-validator')

let productsValidation = [
    body('nameProd')
        .notEmpty().withMessage("Debe completar el campo nombre del producto"),
    body('price')
        .notEmpty().withMessage("Debe completar el campo precio").bail()
        .trim(),
    body('description')
        .notEmpty().withMessage("Debe completar el campo descripción").bail()
        .isLength({min: 30}).withMessage("El campo descripción tiene un mínimo de 50 caracteres")
        .trim(),
    body('color')
        .notEmpty().withMessage("Debe seleccionar al menos un color")
        .trim(),
    body('size')
        .notEmpty().withMessage("Debe seleccionar al menos un size")
        .trim(),
    body('stock')
        .notEmpty().withMessage("Debe completar el campo stock del producto")
        .trim(),
    body('genre')
        .notEmpty().withMessage("Debe seleccionar el género del producto").bail()
        .trim(),
    body('productImage')
        .custom((value, {req}) =>{
            let file = req.file;
            if(!file){
                throw new Error ('Debes cargar una imagen del producto');
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

module.exports = productsValidation