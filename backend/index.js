const express = require("express");
const cors = require("cors");
// const { default: mongoose } = require('mongoose');
require("./db/config");
const User = require("./db/User");
const Product = require('./db/Products');
const app = express();

// using middleware  to control the data we send postman to nodejs
app.use(express.json());
app.use(cors()); // we use it when we get error for requesting data from frontend API ... it gives error bcoz of security issues.. as request from two diff ports(front n backend) ..it blocks the request...it is a backend error and not frontend error..

app.post("/register", async (req, res) => {
  // test it on postman
  //use of async as the ---save--- method return promise
  // res.send("api calling...");
  //for inserting the data from postman to mongoDB..
  let user = new User(req.body); //User is the model here
  let result = await user.save(); // it returns promise
  result = result.toObject(); // 
  delete result.password;
  //The reason for converting the result to an object is likely to manipulate or remove certain properties before sending the response back. In this case, it appears that the intention is to remove the password property from the result object before sending it as a response.
// By converting the result to an object using toObject(), you can modify or delete properties on the object because toObject() returns a plain JavaScript object that is not directly connected to the underlying Mongoose document. This allows you to safely modify the object without affecting the original Mongoose document or triggering unintended side effects
  res.send(result); //to get the data we send through postman... it will be useful in react
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) { // here we are checking if user has entered correct password n email both then login 
    let user = await User.findOne(req.body).select("-password"); // we are finding that user with req.body and saving it in variable 
    if (user) { // if user is correct then send resp or login the user
      res.send(user);
    } else {
      res.status(404).send({ error: 'User not found' });
    }
  } else {
    res.status(404).send({ error: 'User not found' });
  }
});

//add product
app.post('/products',async (req,res)=>{
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
})

//list product 
app.get('/pro',async (req,res)=>{
  let prod = await Product.find();
  if(prod.length > 0)
  {
    res.send(prod)
  }else{
    res.send({result : "No products found"});
  }

})

//delete product
app.delete('/product/:id',async (req,res)=>{
  const result = await Product.deleteOne({_id:req.params.id});
  res.send(result);
})
//update pro
app.get("/uproduct/:id",async(req,res)=>{
  let result = await Product.findOne({_id:req.params.id});
  if(result)
  {
    res.send(result);
  }
  else{
    res.send({result : "No product found"});
  }
  })
//update api
app.put("/product/:id",async(req,res)=>{
  let result = await Product.updateOne({_id:req.params.id},{$set:req.body});
  res.send(result);
})

//search pro
app.get("/search/:key",async(req,res)=>{
  let result = await Product.find({
    $or:[
      {name : {$regex:req.params.key}},
      {price:{$regex:req.params.key}},
      {company:{$regex:req.params.key}},
      {category:{$regex:req.params.key}},
      
    ]
  })
  res.send(result);
})
//The search query is constructed using the $or operator, which allows multiple conditions to be specified. In this case, the conditions are based on the provided keyword. The $regex operator is used for pattern matching, allowing case-insensitive partial matching.



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
