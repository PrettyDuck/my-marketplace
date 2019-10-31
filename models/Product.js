const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    productImage:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category:
    {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('product', ProductSchema);