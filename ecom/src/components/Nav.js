import React from "react";
// import { useState } from "react";
// import { ReactDOM } from "react";
import { Link,useNavigate } from "react-router-dom";
// style= { { textDecoration: 'none' }}
const Nav = () =>{
    const auth  = localStorage.getItem('user');
    const navigate = useNavigate();
      const handleLogout = () => {
        localStorage.clear();
        navigate('/signup')
      };
      // const handleLogin = () =>{
      //   localStorage.
      // }
    // const auth = localStorage.getItem('user');
    return(
        <div>
        <Link to='#'><img src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg" alt="logo"  className="logo"/></Link>
        {
           auth ? <ul className="nav-ul">
                <li><Link to='/products' className="nav-link">Products</Link></li>
                <li><Link to='/add' className="nav-link">Add Product</Link></li>
                <li><Link to='/update' className="nav-link">Update Product</Link></li>
                <li><Link to='/profile' className="nav-link">Profile</Link></li>
                <Link to='/signup' className="nav-link" onClick={handleLogout}>Logout</Link>
                
                <li style={{ marginLeft: "50%" }}>Name : {JSON.parse(auth).name}</li>
                {/* <li>{auth?(<Link to='/signup' className="nav-link" onClick={handleLogout}>Logout</Link>):(<Link to='/signup' className="nav-link" >SignUp</Link>)}</li>
                <li><Link to='/login' className="nav-link">Login</Link></li> */}
            </ul>
            :
            <ul className="nav-ul nav-right">
            <li><Link to='/signup' className="nav-link" >SignUp</Link></li>
                <li><Link to='/login' className="nav-link">Login</Link></li>
            </ul>
        }
        </div>
    )
}
export default Nav;