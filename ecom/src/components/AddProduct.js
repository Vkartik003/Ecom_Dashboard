import React from "react";
import { useState } from "react";

const AddProduct = () =>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');
    const [error,setError] = useState(false);
    const handleProduct = async () =>{
        console.log(name,price,category,company);
        if(!name || !price || !category || !company) {
            setError(true);            
            return false;
        }
        const realId = JSON.parse(localStorage.getItem('user'));
        const userId = realId._id;
        console.log("userID : " ,userId);
        let result = await fetch('http://localhost:5000/products',{
            method:'POST',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':'application/json',
                // 'Accept':'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        setTimeout(()=>{
            setName('');
            setPrice('');
            setCategory('');
            setCompany('');
        },0);
    }
    
    return(
        <div className="addproduct">
            <h1>Add Product list</h1>
            <input type="text" placeholder="Enter Product Name" value={name} onChange={(e)=>{
                setName(e.target.value)
            }}/>
            {error && !name && <span className="invalid">Enter Valid Name</span>}
            <input type="text" placeholder="Enter Product Price" value={price} onChange={(e)=>{
                setPrice(e.target.value)
            }} />
            {error && !price && <span className="invalid">Enter Valid Price</span>}
            <input type="text" placeholder="Enter Product Category" value={category} onChange={(e)=>{
                setCategory(e.target.value)
            }}/>
            {error && !category && <span className="invalid">Enter Valid Category</span>}
            <input type="text" placeholder="Enter Product Company" value={company} onChange={(e)=>{
                setCompany(e.target.value)
            }}/>
            {error && !company && <span className="invalid">Enter Valid Company</span>}
            <button type="submit" onClick={handleProduct}>Add Product</button>
            
        </div>
    )
}


export default AddProduct;