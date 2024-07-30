// src/controllers/productController.js
const Product = require('../models/productModel.js')

// Create (POST)
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
};
// Read/View (GET)
exports.getProducts = async (req, res) => {
    try {
       

        //  logic to find
        const products = await Product.find();
        res.status(200).json(products);


    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

// Get by ID (GET)
exports.getProductById = async (req, res) => {
    try {
       
        // logic here
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
};

// Update (PUT)
exports.updateProduct = async (req, res) => {
    try {
       
        //  logic here
        const product = await Product.findByIdAndUpdate(req
            .params.id, req.body, { new: true });
        res.status(200).json(product);


    } catch (error) {
        res.status(400).json({ message: 'Error updating product', error });
    }
};

// Delete (DELETE)
exports.deleteProduct = async (req, res) => {
    try {
       
        // logic here 
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully' });



    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};
