const express = require('express');
const router = express.Router();

                            /* CONTROLLER */
                            
const { productsController } = require('../controllers/productsController');


                            /* MIDDLEWARES */

let authMiddleware = require("../middlewares/users/authMiddleware")

const upload = require('../middlewares/products/multerMiddleware')

const huespedMiddleware = require('../middlewares/users/huespedMiddleware');

//hace las validaciones para un producto
const productsValidation = require('../middlewares/products/productsValidationMiddleware')


                            /* RUTAS */

//muestra los resultados de una búsqueda
router.get('/resultssearch', productsController.search)

//muestra el detalle de un producto
router.get('/detailproduct/:id', productsController.detailproduct);

//agrega un producto al carrito
router.post('/detailproduct/:id', authMiddleware, productsController.agregarProdCarrito);

//muestra los productos cargados al carrito
router.get('/productCart',productsController.productCart);

//elimina un producto determinado del carrito
router.delete('/productCart/:id', productsController.eliminarProdCarrito);

//muestra los productos para nenes
router.get('/nenes', productsController.nenes);

//muestra los productos para nenes
router.get('/nenas', productsController.nenas);

//muestra el listado de productos
router.get('/list', productsController.listadoProductos)

//elimina un producto del listado de productos
router.delete('/list/:id', productsController.eliminarProd);

//carga un nuevo producto
router.get('/getProduct', productsController.getProduct)
router.post('/addProduct', upload.single('productImage'), productsValidation, productsController.addProduct)

//edita un producto
router.get('/editProduct/:id', productsController.editProduct)
router.put('/modifiedProduct/:id', upload.single('productImage'), productsValidation, productsController.modifiedProduct)

module.exports = router;