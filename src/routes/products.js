const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js');
const { route } = require('./user.js');

router.get('/detailproduct/:idDetail', productsController.detailproduct);

router.get('/productCart/:idDetail', productsController.productCart);

router.get('/nenes', productsController.nenes);

router.get('/nenas', productsController.nenas);

router.get("/formproduct", productsController.formProduct)

router.post('/addProduct', productsController.addProduct)

router.put('/editProduct', productsController.editProduct)

module.exports = router;