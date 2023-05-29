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
    console.log("Products list : ",prod);
  return (
    <div className="prod_list">
      <h1>ProdList</h1>
      <ul>
        <li style={{ fontWeight: 'bold' }}>S.No</li>
        <li style={{ fontWeight: 'bold' }}>Name</li>
        <li style={{ fontWeight: 'bold' }}>Price</li>
        <li style={{ fontWeight: 'bold' }}>Category</li>
        <li style={{ fontWeight: 'bold' }}>Company</li>
      </ul>
      {
        prod.map((item,index)=>
        <ul>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
        </ul>)
      }
    </div>
  );
};

export default ProdList;
