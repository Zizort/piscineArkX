const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {type: String},
    price: {type: Number, required: true, min: 0},
    description: {type: String},
    inStock: {type: Boolean, default: true},
    createdAt: {type: Date, immutable: true, default: ()=> Date.now()},
    category: {
        type: String,
        enum: ['ab', 'bc', 'cd'], // Predefined values
        required: true
     },
    isDeleted: {type: Boolean, default: false},
    expirationDate: {type: Date }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
