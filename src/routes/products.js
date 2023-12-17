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

//hace las validaciones para un producto
let validateFormProducts=[
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
        .notEmpty().withMessage("Debe completar el campo color")
        .trim(),
    body('talle')
        .notEmpty().withMessage("Debe completar el campo talle")
        .trim(),
    body('stock')
        .notEmpty().withMessage("Debe completar el campo stock del producto")
        .trim(),
    body('genero')
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

//muestra el detalle de un producto
router.get('/detailproduct/:id', productsController.controller.detailproduct);

//agrega un producto al carrito
router.post('/detailproduct/:id', productsController.controller.agregarProdCarrito);

//muestra los productos cargados al carrito
router.get('/productCart', productsController.controller.productCart);

//elimina un producto determinado del carrito
router.delete('/productCart/:id', productsController.controller.eliminarProdCarrito);

//muestra los productos para nenes
router.get('/nenes', productsController.controller.nenes);

//muestra los productos para nenes
router.get('/nenas', productsController.controller.nenas);

//muestra el listado de productos
router.get('/list', productsController.controller.listadoProductos)

//elimina un producto del listado de productos
router.delete('/list/:id', productsController.controller.eliminarProd);

//carga un nuevo producto
router.get('/getProduct', productsController.controller.getProduct)
router.post('/addProduct', upload.single('productImage'), validateFormProducts, productsController.controller.addProduct)

//edita un producto
router.get('/editProduct/:id', productsController.controller.editProduct)
router.put('/modifiedProduct/:id', upload.single('productImage'), validateFormProducts, productsController.controller.modifiedProduct)

module.exports = router;