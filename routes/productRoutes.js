const express = require('express');
const router = express.Router();
const app=express();
const  AddProducts  = require('../controllers/products.js');
const validateSellForm = require('../middleware/validateSellForm');
const Product = require('../models/sellProduct');

app.post('/add-product', validateSellForm, AddProducts);

module.exports = app;
