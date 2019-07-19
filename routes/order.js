const express = require('express');

const router = express.Router();

const orderController = require('../controllers/order');

const auth = require('../configs/auth');

// router.get('/', auth.verifyToken, bookController.getIndexBook);

router.post('/', auth.verifyToken, orderController.createOrder);

module.exports = router;