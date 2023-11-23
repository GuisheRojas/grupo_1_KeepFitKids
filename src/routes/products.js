const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const { route } = require('./user');

router.get('/detailproduct/:id', productsController.controller.detailproduct);

router.get('/productCart', productsController.controller.productCart);

router.get('/productCart/:id', productsController.controller.productCart);

router.get('/nenes', productsController.controller.nenes);

router.get('/nenas', productsController.controller.nenas);

router.get("/formproduct", productsController.controller.formProduct)

module.exports = router;