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

module.exports = router