const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/detailproduct/:id', productsController.controller.detailproduct);
router.post('/detailproduct/:id', productsController.controller.agregarCarrito);

router.get('/productCart', productsController.controller.productCart);

router.get('/productCart/:id', productsController.controller.productCart);

router.get('/nenes', productsController.controller.nenes);

router.get('/nenas', productsController.controller.nenas);

router.get('/getProduct', productsController.controller.getProduct)
router.post('/addProduct', productsController.controller.addProduct)

router.get('/editProduct', productsController.controller.editProduct)
router.post('/modifiedProduct', productsController.controller.modifiedProduct)

module.exports = router;