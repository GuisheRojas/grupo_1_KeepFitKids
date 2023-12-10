const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {callback(null, path.join(__dirname ,'../../public/img/products'))},
    filename: (req, file,callback) => {callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))}
})
const upload = multer({storage});

const productsController = require('../controllers/productsController');

const {body} = require('express-validator');

let validateFormProducts=[
    body('nameProd')
        .notEmpty().withMessage("Debe completar el campo nombre del producto"),
    body('price')
        .notEmpty().withMessage("Debe completar el campo precio").bail()
        .isFloat({locale: 'es-ES'}).withMessage("Debe completar el campo precio con un número decimal")
        .trim(),
    body('description')
        .notEmpty().withMessage("Debe completar el campo descripción").bail()
        .isLength({min: 50}).withMessage("El campo descripción tiene un mínimo de 50 caracteres")
        .trim(),
    body('color')
        .notEmpty().withMessage("Debe completar el campo color")
        .trim(),
    body('talle')
        .notEmpty().withMessage("Debe completar el campo talle")
        .trim(),
    body('stock')
        .notEmpty().withMessage("Debe completar el campo stock del producto")
        .trim(),
    body('genero')
        .notEmpty().withMessage("Debe completar el campo género del producto").bail()
        .trim()
]

router.get('/detailproduct/:id', productsController.controller.detailproduct);
router.post('/detailproduct/:id', productsController.controller.agregarCarrito);

router.get('/productCart', productsController.controller.productCart);

//
router.get('/productCart/:id', productsController.controller.productCart);
router.delete('/productCart/:id', productsController.controller.eliminarCarrito);

//muestra los productos para nenes
router.get('/nenes', productsController.controller.nenes);

//muestra los productos para nenes
router.get('/nenas', productsController.controller.nenas);

//muestra el listado de productos
//router.get('/list', productsController.controller.listado)

//eliminar un producto del listado de productos

//carga de un nuevo producto
router.get('/getProduct', productsController.controller.getProduct)
router.post('/addProduct', upload.single('productImage'), validateFormProducts, productsController.controller.addProduct)

//edición de un producto
router.get('/editProduct/:id', productsController.controller.editProduct)
router.put('/modifiedProduct/:id', upload.single('productImage'), validateFormProducts, productsController.controller.modifiedProduct)

module.exports = router;