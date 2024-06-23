const express = require('express');
const router = express.Router();
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const Product = require('../models/product');
const PendingProduct = require('../models/pendingProduct');

const upload = multer({ dest: 'uploads/' });

// Define the valid categories
const validCategories = ['women', 'men', 'girls', 'boys', 'baby', 'home'];

router.post('/add-product', 
    upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]),
    [
        body('category')
        .notEmpty().withMessage('Category is required.')
        .custom(value => {
            if (!validCategories.includes(value)) {
                throw new Error('Invalid category selected.');
            }
            return true;
        }),
        body('size').notEmpty().withMessage('Size is required.'),
        body('condition').notEmpty().withMessage('Condition is required.'),
        body('brand').notEmpty().withMessage('Brand is required.'),
        body('price').isFloat({ min: 0.01 }).withMessage('Price must be a valid number.'),
        body('details').notEmpty().withMessage('Details are required.')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Proceed with saving the product to the database
        const { category, size, condition, brand, price, details } = req.body;
        const image1 = req.files['image1'][0];
        const image2 = req.files['image2'][0];


        if (!image1 || !image2) {
            return res.status(400).json({ errors: [{ msg: 'Image files are required.' }] });
        }

        const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedFileTypes.includes(image1.mimetype) || !allowedFileTypes.includes(image2.mimetype)) {
            return res.status(400).json({ errors: [{ msg: 'Invalid image file type. Only JPEG, PNG, GIF, or WebP allowed.' }] });
        }
      
        try {
            // Create a new pending product object
            const images = [image1.path, image2.path]; // Assuming you store image paths

            const newPendingProduct = new PendingProduct({
                category,
                size,
                condition,
                brand,
                price,
                details,
                images,
                user: req.user._id // Assuming you have user authentication in place
            });

    // Save the pending product to the database
    await newPendingProduct.save();

            res.status(201).json({ msg: 'Product submitted for admin approval', product: newPendingProduct });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;