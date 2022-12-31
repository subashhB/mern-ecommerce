const mongoose = require('mongoose');
require("dotenv").config();
var mongoDBURL = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.dm9hzz7.mongodb.net/mern-ecommerce?retryWrites=true&w=majority`;

mongoose.connect(mongoDBURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  
  var dbconnect = mongoose.connection;
  
  dbconnect.on("error", () => {
    console.log("MongoDB connection Failed");
    console.log(mongoDBURL)
  });
  dbconnect.on("connected", () => {
    console.log("MongoDB connection Successful");
  });
  
  module.exports = mongoose;