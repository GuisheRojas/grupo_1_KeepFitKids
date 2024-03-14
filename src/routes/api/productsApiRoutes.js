const express = require('express');
const router = express.Router();

                            /* CONTROLLER */
                            
const productsApiController = require('../../controllers/api/productsApiController');

router.get('/list', productsApiController.list)

router.get('/detail/:id', productsApiController.detail)


module.exports = router;