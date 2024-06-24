const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getAllProducts = (req, res, next) => {
    const products = Product.findAll();
    res.render('cart', { products });
};

exports.getProductDetails = (req, res, next) => {
    const product = Product.findById(req.params.prodId);
    res.render('product-details', { prod: product, pageTitle: product.name });
};

exports.addToCart = (req, res, next) => {
    const productId = req.body.id;
    const product = Product.findById(productId);
    if (product) {
        Cart.save(product);
        console.log(Cart.getCart());
        res.end('Saved successfully');
    } else {
        res.end('Product not found');
    }
};
