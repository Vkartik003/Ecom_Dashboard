import React from "react";
import { useState } from "react";

const UpdateProduct = () =>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');
   
    const updateProduct = async () =>{
        console.log(name,price,category,company);
        setTimeout(()=>{
            setName('');
            setPrice('');
            setCategory('');
            setCompany('');
        },0);
    }
    
    return(
        <div className="addproduct">
            <h1>Update Product list</h1>
            <input type="text" placeholder="Enter Product Name" value={name} onChange={(e)=>{
                setName(e.target.value)
            }}/>
           
            <input type="text" placeholder="Enter Product Price" value={price} onChange={(e)=>{
                setPrice(e.target.value)
            }} />
           
            <input type="text" placeholder="Enter Product Category" value={category} onChange={(e)=>{
                setCategory(e.target.value)
            }}/>
            
            <input type="text" placeholder="Enter Product Company" value={company} onChange={(e)=>{
                setCompany(e.target.value)
            }}/>
         
            <button type="submit" onClick={updateProduct}>Update Product</button>
            
        </div>
    )
}


export default UpdateProduct;