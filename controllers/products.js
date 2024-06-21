const path = require('path');
const router = express.Router();
const Products = require('../models/sellProduct');
const upload = require('../middleware/multer'); 
const { validationResult } = require('express-validator');
const validateSellForm = require('../middleware/validateSellForm.js');

router.post('/add-product', upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 }
]), validateSellForm, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const image1 = req.files['image1'][0];
    const image2 = req.files['image2'][0];

    const newProduct = new Products({
        category: req.body.category,
        subCategory: req.body.subCategory,
        size: req.body.size,
        condition: req.body.condition,
        brand: req.body.brand,
        price: req.body.price,
        details: req.body.details,
        image1: image1.path,
        image2: image2.path
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
});

module.exports = router;





