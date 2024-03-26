const path = require('path')
const { body } = require('express-validator')

let productsValidation = [
    body('name')
        .notEmpty().withMessage("Debe completar el campo nombre del producto").bail()
        .isLength(5).withMessage("El nombre del producto debe contener al menos 5 caractéres"),
    body('price')
        .notEmpty().withMessage("Debe completar el campo precio").bail()
        .trim(),
    body('description')
        .notEmpty().withMessage("Debe completar el campo descripción").bail()
        .isLength({min: 20}).withMessage("El campo descripción tiene un mínimo de 20 caracteres")
        .trim(),
    body('color')
        .notEmpty().withMessage("Debe seleccionar al menos un color")
        .trim(),
    body('size')
        .notEmpty().withMessage("Debe seleccionar al menos un talle")
        .trim(),
    body('quantity')
        .notEmpty().withMessage("Debe completar el campo stock del producto")
        .trim(),
    body('category')
        .notEmpty().withMessage("Debe seleccionar el género del producto").bail()
        .trim(),
    body('productImage')
        .custom((value, {req}) =>{
            let file = req.file;
            if(!file){
                throw new Error ('Debes cargar una imagen del producto');
            } else {
                let fileExt = path.extname(file.originalname);
                let acceptedExt = ['.png', '.jpg', '.jpeg'];
                if(!acceptedExt.includes(fileExt)){
                    throw new Error ('Las extensiones permitidas son .png, .jpg y .jpeg');
                }
            }
            return true;
        })
]

module.exports = productsValidation