const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/register', (req,res)=>{
    User.find({email: req.body.email},(err,docs)=>{
        if(docs.length>0){
            return res.status(400).json({message:'Something went wrong.'})
        }
        else{
            const newuser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            newuser.save(err=>{
                if(!err){
                    res.send('User Registration Successfull')
                }
                else{
                    res.send('Something went wrong')
                }
            })
        }
        if(err){
            return res.status(400).json({message:'Something went wrong.'})
        }
    })
});

router.post("/login", (req,res)=>{
    User.find({email: req.body.email, password: req.body.password},(err,docs)=>{
        if(docs.length>0){
            const user={
                name: docs[0].name,
                email: docs[0].email,
                _id: docs[0]._id
            };
            res.send(user);
        }
        else{
            return res.status(400).json({message:'Invalid Credentials'})
        }
    })
})

router.post('/update', (req, res) => {
    const {userId, updatedUser} = req.body;
    console.log(updatedUser)
    User.findByIdAndUpdate({_id: userId}, {
        name: updatedUser.name,
        email: updatedUser.email,
        password: updatedUser.password
    },(err)=>{
        if(!err){
            res.send('User Details Updated Successfully')
        }else{
            return res.status(400).json({message:'Somthing went wrong'});
        }

    })
});

router.get('/getallusers', (req, res) => {
    User.find({}, (err, docs)=>{
        if(err){
            return res.status(400).json({message:'Somthing went wrong'});
        }
        else{
            res.send(docs);
        }
    })
});

router.post('/deleteuser', (req, res) => {
    User.findByIdAndDelete(req.body.userId, (err)=>{
        if(err){
            return res.status(400).json({message:'Something went wrong'});
        }
        else{
            res.send('User Deleted!');
        }
    })
}); 

module.exports = router