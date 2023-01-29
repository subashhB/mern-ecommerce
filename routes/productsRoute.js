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

router.post('/addreview', async(req, res) => {
    const {review, productId, currentUser} = req.body
    const product = await Product.findOne({_id: productId})
    const newreview = {
        userId: currentUser._id,
        name: currentUser.name,
        comment: review.comment,
    }
    product.reviews.push(newreview)
    product.save(err=>{
        if(!err){
            res.send('Review Submitted Successfully');
        }else{
            return res.status(400).json({message:'Something went wrong'});
        }
    })
});

router.post('/deleteproduct', (req, res) => {
    Product.findByIdAndDelete(req.body.productId,(err)=>{
        if(err){
            return res.status(400).json({message:'Somthing went wrong'});
        }
        else{
            res.send('Product Deleted')
        }
    })
});

router.post('/addproduct', (req, res) => {
    const {product} = req.body
    const productModel = new Product({
        name: product.name,
        price: parseInt(product.price),
        description: product.description,
        countInStock: parseInt(product.countInStock),
        image: product.imageUrl,
        category: product.category
    })
    productModel.save(err =>{
        if(err){
            return res.status(400).json({message:'Something went Wrong'+err});
        }
        else{
            res.send('New Product Added Successfully')
        }
    })
});


module.exports = router