import React, { useEffect } from "react";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";


const UpdateProduct = () =>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');
   const params = useParams();
   const navigate = useNavigate();

   useEffect(()=>{
    getProdDetail();
   },[]);
   const getProdDetail = async ()=>{
    console.log(params);
    let result = await fetch(`http://localhost:5000/uproduct/${params.id}`);
    result = await result.json();
    console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);

   }
    const updateProduct = async () =>{
        console.log(name,price,category,company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'PUT',
            body:JSON.stringify({name,price,company,category}),
            headers:{
                'Content-Type':'application/json',
            }
        })
        result = await result.json();
        console.log(result);
        alert("Product Updated Successfully");
        navigate('/products');
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