import React from 'react';
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();


    useEffect(()=>{
        const auth  = localStorage.getItem('user');
        if(auth) {
            navigate('/');
        }
    })
    const collectData = async ()=>{
        console.log(name,email,password);
        let result = await fetch('http://localhost:5000/register',{ //we can axios also ..fetch is a function/api for 
            method:'POST',
            body : JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            //Sets the 'Content-Type' header to 'application/json', indicating that the request body is in JSON format.
        });
        result = await result.json()
         //The code uses the json method on the result object to parse the response body as JSON. The json method returns a new Promise that resolves to the JavaScript object corresponding to the JSON data in the response body. By using await keyword, the code waits for the json method to complete and assigns the parsed result to the result variable.
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
        //to save data in localstorage 
        if(result)
        {
            navigate('/products');
        }

        setTimeout(()=>{ //to delay the state updates slightly
            setName("");
            setEmail("");
            setPassword("");  
         },0);

        /* it allows the current rendering cycle to finish before clearing the input fields. This ensures that the state updates are applied after the rendering is complete, and you should see the input fields getting cleared properly. */

        
        // setName("");
        //     setEmail("");
        //     setPswd("");
      
    }
    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth){

            navigate("/products");
        }
    })
    return(
        <div className='register'>
            <h1>
                Register
            </h1>
            <div>
                <input type="text" placeholder='Enter Name'  value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input type="email" placeholder='Enter Email' value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>   
                <button type='submit' onClick={collectData}>SignUp</button>
            </div>
        </div>
    )
}

export default SignUp;