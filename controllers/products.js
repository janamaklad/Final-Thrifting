const path = require('path'); 
const Products = require('../models/sellProduct'); // Import the 'products' model from the models directory
const upload = require('../uploads/multer'); // Import the Multer middleware for file uploads

const AddProducts = (req, res) => {
    // Handle file upload with multer middleware
    upload.fields([
        { name: 'image1', maxCount: 1 },
        { name: 'image2', maxCount: 1 }
    ])(req, res, (err) => {
        if (err) {
            console.error('Multer error:', err);
            res.status(400).send('Error uploading files');
        } else {
            // Files uploaded successfully, now save product
            const image1 = req.files['image1'][0]; // Assuming single file upload for 'image1'
            const image2 = req.files['image2'][0]; // Assuming single file upload for 'image2'

            const newProduct = new Products({
                category: req.body.category,
                subCategory: req.body.subCategory,
                size: req.body.size,
                condition: req.body.condition,
                brand: req.body.brand,
                price: req.body.price,
                details: req.body.details,
                image1: image1.path, // Full path to saved product image1
                image2: image2.path  // Full path to saved product image2
            });

            newProduct.save()
                .then((result) => {
                    console.log('Product added:', result);
                    res.status(201).send('Product added successfully');
                })
                .catch((err) => {
                    console.error('Error saving product:', err);
                    res.status(500).send('Error adding product');
                });
        }
    });
};

module.exports = AddProducts;
