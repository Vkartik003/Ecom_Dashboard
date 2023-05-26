import React from 'react';
import { useState } from 'react';

const SignUp = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pswd,setPswd] = useState("");
    const collectData = ()=>{
        console.log(name,email,pswd);
        setTimeout(()=>{ //to delay the state updates slightly
            setName("");
            setEmail("");
            setPswd("");  
         },0);

        /* it allows the current rendering cycle to finish before clearing the input fields. This ensures that the state updates are applied after the rendering is complete, and you should see the input fields getting cleared properly. */

        
        // setName("");
        //     setEmail("");
        //     setPswd("");
      
    }
    return(
        <div className='register'>
            <h1>
                Register
            </h1>
            <div>
                <input type="text" placeholder='Enter Name'  value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input type="email" placeholder='Enter Email' value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder='Enter password' value={pswd} onChange={(e)=>{setPswd(e.target.value)}}/>   
                <button type='submit' onClick={collectData}>SignUp</button>
            </div>
        </div>
    )
}

export default SignUp;