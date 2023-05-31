import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

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
    // const handleUpdate = () =>{
    //   console.log('updated');
    // }
    console.log("Products list : ",prod);

    const searchprod = async(event)=>{
      let key = (event.target.value);
      if(key)
      {
        let result = await fetch(`http://localhost:5000/search/${key}`);
        result = await result.json();
        if(result)
        {
          setProd(result);
        }
      }else{
        getProd();
      }
    }
  return (
    <div className="prod_list" style={{ overflowY: 'scroll', maxHeight: '500px' }}>
      <h1>ProdList</h1>
      <input type="text" placeholder="Search Products..." className="search_prod" onChange={searchprod}/>
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
        prod.length>0 ? prod.map((item,index)=> 
        <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button onClick={()=>handleDelete(item._id,item.name)}>Delete</button>
              <button><Link to={"/update/"+item._id} className="link-style">Update</Link></button>
            </li>
            
            {/* In React, when you use onClick={deleteProduct(item._id)}, it means you are immediately invoking the deleteProduct function during the rendering phase instead of assigning it as an event handler.

To prevent the function from being called immediately and instead be executed when the button is clicked, you need to wrap the deleteProduct function inside an arrow function or another function call.

Here's the difference between the two approaches:

Incorrect Approach: onClick={deleteProduct(item._id)}

In this approach, the deleteProduct function is immediately invoked during the rendering phase, and the return value (which is expected to be a function) is assigned as the event handler. This results in the function being called automatically.
Correct Approach: onClick={() => deleteProduct(item._id)}

In this approach, an arrow function is used as a wrapper around the deleteProduct function. The arrow function acts as the event handler and, when invoked, calls the deleteProduct function with the specified item._id. This way, the function is not executed during the rendering phase but is instead executed when the button is clicked.
Using the correct approach ensures that the deleteProduct function is called only when the button is clicked.




 */}
        </ul>):
        <h1>NO RESULT FOUND</h1>
      }
    </div>
  );
};

export default ProdList;
