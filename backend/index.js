const express = require('express');
const app = express();

const mongoose = require('mongoose');
const connectDB = async()=>{
    mongoose.connect('mongodb://localhost:27017/e-comm');
    const productSchema = new mongoose.Schema({});
    const product = mongoose.model('product',productSchema,'products');
    const data = await product.find();
    console.log(data);
}
connectDB();

// app.get('/',(req,res)=>{
//     res.send("app is working");
// });

app.listen(5000);