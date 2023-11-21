const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js');
const { route } = require('./user.js');

router.get('/detailProduct', productsController.detailProduct);

router.get('/productCart', productsController.productCart);

router.get('/nenes', productsController.nenes);

router.get('/nenas', productsController.nenas);

module.exports = router;