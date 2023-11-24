const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

router.get('/register', userController.register);
router.post('/register', userController.singUp)

router.get('/login', userController.login);
router.post('/singIn', userController.singIn)

module.exports = router;