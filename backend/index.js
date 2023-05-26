const express = require('express');
// const { default: mongoose } = require('mongoose');
require('./db/config');
const User = require('./db/User');
const app = express();

// using middleware  to control the data we send postman to nodejs 
app.use(express.json());

app.post('/register',async (req,res)=>{ // test it on postman 
    //use of async as the ---save--- method return promise 
    // res.send("api calling...");
    //for inserting the data from postman to mongoDB..
    let user = new User(req.body);//User is the model here
    let result = await user.save(); // it returs promise 
    res.send(result);//to get the data we send through postman... it will be useful in react 

})

// const mongoose = require('mongoose');
// const connectDB = async()=>{
//     mongoose.connect('mongodb://localhost:27017/e-comm');
//     const productSchema = new mongoose.Schema({}); // exmpty as we have to fetch things...
//     //schema use for crud ops, 
//     const product = mongoose.model('product',productSchema);
//     //to interact with the fields we use model..
//     // const product = mongoose.model('product',productSchema,'products');
//     //if your collection name is Jugnu by default the mongoos will look for jugnus (Lower capped and plural). To overcome this and tell mongoose that you want to use your own custom collection give the third parameter the same as your collection name. It will fix this issue. // const Jugnu = mongoose.model('Jugnu', jugnuSchema,'Jugnu');


//     const data = await product.find();
//     console.log(data);
// }
// connectDB();

// app.get('/',(req,res)=>{
//     res.send("app is working");
// });

app.listen(5000);