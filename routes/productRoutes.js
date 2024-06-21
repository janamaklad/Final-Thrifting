const express = require('express');
const router = express.Router();
const { AddProducts } = require('../controllers/product');
const validateSellForm = require('../middleware/validateSellForm');

router.post('/add-product', validateSellForm, AddProducts);

module.exports = router;
