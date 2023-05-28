import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() =>{
    const auth = localStorage.getItem('user');
    if(auth) 
    {
      navigate('/');
    }
  })

  const handleLogin = async () => {
    // console.log(email, password);
    let result = await fetch('http://localhost:5000/login',{
        method: 'POST',
        body : JSON.stringify({email,password}),
        headers: {
            'Content-Type':'application/json',
            // 'Accept':'application/json'
        }
    });
    result = await result.json(); // it returns promise 
    console.log(result);
    if(result.name){
        localStorage.setItem('user',JSON.stringify(result));
        navigate('/products');
    }else{
        alert("please enter correct details")
    }
    setTimeout(() => {
      setEmail("");
      setPassword("");
    },0);
  };
  return (
    <div className="login-head">
      <h1>Login</h1>
      <div>
      <form autoComplete="off">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        </form>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
