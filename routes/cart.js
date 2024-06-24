const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/', shopController.getAllProducts);
router.get('/products/:prodId', shopController.getProductDetails);
router.post('/add-to-cart', shopController.addToCart);
router.post('/remove', (req, res) => {
    const { item } = req.body;
    cart = cart.filter(cartItem => cartItem !== item);
    res.redirect('/cart');
});
router.get('/error-demo', (req, res, next) => {
    throw new Error('This is to test error handling in Express');
});

module.exports = router;
