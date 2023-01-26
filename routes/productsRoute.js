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



module.exports = router