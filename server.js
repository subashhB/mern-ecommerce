const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();

var dbconnection = require("./db");
var productsRoute = require("./routes/productsRoute");
var userRoute = require("./routes/userRoute");
app.use(bodyParser.json());
app.use('/api/users/', userRoute)
app.use('/api/products/', productsRoute)

app.get("/", (req,res) =>{
    res.send("This is from backend.");
});

const port = process.env.PORT;
app.listen(port, ()=> console.log("Node Js Server Started."));