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

//carga de un nuevo producto
router.get('/getProduct', productsController.controller.getProduct)
router.post('/addProduct', upload.single('productImage'), productsController.controller.addProduct)

//edición de un producto
router.get('/editProduct', productsController.controller.editProduct)
router.put('/modifiedProduct', upload.single('productImage'), productsController.controller.modifiedProduct)

module.exports = router;