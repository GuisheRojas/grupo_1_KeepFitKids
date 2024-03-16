const express = require('express');
const router = express.Router();

                            /* CONTROLLER */
                            
const productsApiController = require('../../controllers/api/productsApiController');

router.get('/', productsApiController.list)

router.get('/:id', productsApiController.detail)


module.exports = router;