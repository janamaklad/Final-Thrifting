const { body } = require('express-validator');

const validateSellForm = [
    body('category').notEmpty().withMessage('Category is required'),
    body('subCategory').notEmpty().withMessage('Subcategory is required'),
    body('size').notEmpty().withMessage('Size is required'),
    body('condition').notEmpty().withMessage('Condition is required'),
    body('brand').notEmpty().withMessage('Brand is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('price').notEmpty().withMessage('Price is required'),
    body('details').notEmpty().withMessage('Details are required'),
    body('image1').custom((value, { req }) => {
        if (!req.files || !req.files['image1']) {
            throw new Error('Image 1 is required');
            const file = req.files['image1'][0];
            const validMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (!validMimeTypes.includes(file.mimetype)) {
                throw new Error('Image 1 must be a valid image file (jpg, png, gif)');
            }}
        return true;
    }),
    body('image2').custom((value, { req }) => {
        if (!req.files || !req.files['image2']) {
            throw new Error('Image 2 is required');
        }
        const file = req.files['image2'][0];
        const validMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!validMimeTypes.includes(file.mimetype)) {
            throw new Error('Image 2 must be a valid image file (jpg, png, gif)');
        }
        return true;
    })
];

module.exports = validateSellForm;
