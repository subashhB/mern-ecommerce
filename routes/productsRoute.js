const express = require("express");
const router = express.Router();
const Product = require("../models/productModel")

router.get('/getallproducts', (req,res) =>{
    Product.find({}, (err,docs)=>{
        if(!err){
            return res.send(docs)
        }
        else{
            return res.status(400).json({message: 'Something went Wrong'})
        }
    })
});

router.post('/getproductbyid', (req,res)=>{
    Product.findById({_id: req.body.productId},(err,docs)=>{
        if(!err){
            return res.send(docs)
        }
        else{
            return res.status(400).json({message:'Something went Wrong'})
        }
    })
});

module.exports = router