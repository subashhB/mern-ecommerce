const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId
    },
    name:{
        type: String,
        required: true
    },
    comment:{
        type: String,
    },
},{
    timeStamps: true
})

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: true,
        default: 0
    },
    reviews: [reviewSchema]
},{
    timeStamps: true
})

const Product = mongoose.model('products',productSchema)

module.exports = Product