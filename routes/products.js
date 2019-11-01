const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');
const Product = require('../models/Product');
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
        // file.filename - return generated filename
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') // I want to store that file
    {
        cb(null, true); // 1 - param - error, 2 - bool
    }
    else {  // I don't want to store that file
        cb(null, false);
    }
}
const upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 16
    },
    fileFilter: fileFilter
})

// @route GET api/products
// @desc Get all users products
// @access Private

router.get('/', auth, async (req, res) => {
    try {
        // In case if we want to show only products 

        // const products = await Product.find({
        //     user: req.user.id
        // }).sort({ date: -1 });

        const products = await Product.find().sort({ date: -1 });
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

});

// @route GET api/products/:id
// @desc Get product by id
// @access Private

router.get('/:id', auth, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

});

// @route POST api/products
// @desc Add new user product
// @access Private

router.post('/', upload.single('productImage'), [auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('location', 'Location is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty()
]], async (req, res) => // using auth for a private route and express-validator as a second for checking  
{
    // console.log(req);
    // console.log(req.body);
    // console.log(req.file);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const { name, location, description, category, price } = req.body;
    try {
        const newProduct = new Product({
            name,
            location,
            description,
            category,
            productImage: req.file.path,
            price,
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
    const { name, location, description, category, price } = req.body;

    // Build product object
    const productFields = {};
    if (name) productFields.name = name;
    if (location) productFields.location = location;
    if (description) productFields.description = description;
    if (category) productFields.category = category;
    if (price) productFields.price = price;
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
        fs.unlink(req.body.productImage,(msg) =>{
            if(msg) throw msg;
            console.log('Photo deleted');
        })  // Deleting photo of our product from storage 
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