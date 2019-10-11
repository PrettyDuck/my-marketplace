const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Product = require('../models/Product');

// @route GET api/products
// @desc Get all user products
// @access Private

router.get('/', auth, async (req, res) => {
    try {
        const products = await Product.find({
            user: req.user.id
        }).sort({ date: -1 });
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

});

// @route POST api/products
// @desc Add new user product
// @access Private

router.post('/', [auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty()
]], async (req, res) => // using auth for a private route and express-validator as a second for checking  
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const { name, description, price, location } = req.body;
    try {
        const newProduct = new Product({
            name,
            description,
            price,
            location,
            user: req.user.id
        });
        const product = await newProduct.save();
        res.json(product)
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// @route PUT api/products/:id
// @desc Update user product
// @access Private

router.put('/:id', auth, async (req, res) => {
    const { name, description, price, location } = req.body;

    // Build product object
    const productFields = {};
    if (name) productFields.name = name;
    if (description) productFields.description = description;
    if (price) productFields.price = price;
    if (location) productFields.location = location;
    try {
        let product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });
        // Make sure that user owns products
        if (product.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not autorized' });
        }
        product = await Product.findByIdAndUpdate(req.params.id,
            { $set: productFields },
            { new: true });
        res.json(product);
    } catch (error) {
        console.error(errors.message);
        res.status(500).send('Server Error');
    }
});

// @route DELETE api/products/:id
// @desc Delete user product
// @access Private

router.delete('/:id', auth, async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });

        // Make sure that user owns products
        if (product.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not autorized' });
        }
        product = await Product.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Product removed' });
    } catch (err) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;