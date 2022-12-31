const express = require("express");

const app = express();

require("dotenv").config();

var dbconnection = require("./db");
var productsRoute = require("./routes/productsRoute");

app.use('/api/products', productsRoute)

app.get("/", (req,res) =>{
    res.send("This is from backend.");
});

const port = process.env.PORT;
app.listen(port, ()=> console.log("Node Js Server Started."));