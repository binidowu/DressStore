let productModel = require("../models/products");

module.exports.create = async function (req, res, next) {
    try {
        res.json({
            success: true,
            message: "Welcome to dress store application",
        });
    } catch (error) {
        next(error);
    }
};