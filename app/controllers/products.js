let productModel = require("../models/products");

// Function to get all products
module.exports.create = async (req, res) => {
    try {
        res.json({
            success: true,
            message: "Welcome to dress store application",
        });
    } catch (error) {
        next(error);
    }
};

// Function to get all products
module.exports.getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get a product by ID
module.exports.getProductById = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to add a new product
// module.exports.addProduct = async (req, res) => {
//     const newProduct = new productModel(req.body);
//     try {
//         const savedProduct = await newProduct.save();
//         res.status(201).json(savedProduct);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };
module.exports.addProduct = async (req, res) => {
    const newProduct = new productModel(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error("Error while adding product:", error); // This line logs the error to the console
        res.status(400).json({ message: error.message });
    }
};

// Function to update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedProduct == null) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Function to delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
        if (deletedProduct == null) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};