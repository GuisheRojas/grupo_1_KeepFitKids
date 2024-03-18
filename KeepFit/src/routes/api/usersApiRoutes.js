const express = require('express');
const router = express.Router();

                            /* CONTROLLER */
                            
const usersApiController = require('../../controllers/api/usersApiController');

router.get('/', usersApiController.list)

router.get('/:id', usersApiController.detail)

module.exports = router;