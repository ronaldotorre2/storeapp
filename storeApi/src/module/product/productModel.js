/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Entity.........: product
 * ---------------------------------------------------------*/

const mongoose = require('../../config/database');

const ProductModel = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    codebar:{
        type: String,
        required: true,
    },
    keywords:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', ProductModel);

module.exports = Product;