import React, { useEffect, useState } from "react";

const ProdList = () => {
    const [prod,setProd] = useState([]);
    useEffect(()=>{
        getProd();
    },[]);
    const getProd = async () =>{
        let result = await fetch('http://localhost:5000/pro');
        result = await result.json();
        setProd(result);
    }
     const handleDelete = async (id,name) =>{
      let result = await fetch(`http://localhost:5000/product/${id}`,{
        method:'DELETE'
      });
      result = await result.json();
      if(result) {
        alert(`Product Named : ${name} , Deleted Successfully`);
        // setProd(prevProd => prevProd.filter(item => item._id !== id));
        getProd();  

      }
      console.log("deleted");

    }
    console.log("Products list : ",prod);
  return (
    <div className="prod_list" style={{ overflowY: 'scroll', maxHeight: '500px' }}>
      <h1>ProdList</h1>
      <ul>
        <li style={{ fontWeight: 'bold' }}>S.No</li>
        <li style={{ fontWeight: 'bold' }}>Name</li>
        <li style={{ fontWeight: 'bold' }}>Price</li>
        <li style={{ fontWeight: 'bold' }}>Category</li>
        <li style={{ fontWeight: 'bold' }}>Company</li>
        <li style={{ fontWeight: 'bold' }}>Operation</li>
        
      </ul>
      {
        // eslint-disable-next-line array-callback-return
        prod && prod.map((item,index)=> 
        <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li><button onClick={()=>handleDelete(item._id,item.name)}>Delete</button></li>
        </ul>)
      }
    </div>
  );
};

export default ProdList;
