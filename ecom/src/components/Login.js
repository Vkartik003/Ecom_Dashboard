import React from "react";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log(email, password);
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
