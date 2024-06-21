const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    size: { 
        type: String, 
        required: function() {
            return ['women', 'men', 'girls', 'boys','baby'].includes(this.category); //size field only required for these categories
        } 
    },
    condition: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    details: { type: String, required: true },
    image1: { type: String, required: true }, 
    image2: { type: String, required: true }  
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
