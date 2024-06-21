const express = require('express');
const router = express.Router();
const app=express();
const { AddProducts } = require('../controllers/product');
const validateSellForm = require('../middleware/validateSellForm');
const Product = require('../models/sellProduct');

app.post('/add-product', validateSellForm, AddProducts);

module.exports = app;
