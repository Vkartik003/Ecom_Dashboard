import React from "react";
import { useState
,useEffect } from "react";
// import { ReactDOM } from "react";
import { Link } from "react-router-dom";
// style= { { textDecoration: 'none' }}
const Nav = () =>{
    const [auth, setAuth] = useState(localStorage.getItem('user'));

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
          setAuth(true);
        }
      }, []);
      const handleSignUp = (e) => {
        e.preventDefault();
        // Perform sign-up logic here
    
        // Update the local storage and auth state
        localStorage.setItem('user', 'true');
        setAuth(true);
      };
    
      const handleLogout = () => {
        // Perform logout logic here
    
        // Clear the local storage and update the auth state
        localStorage.removeItem('user');
        setAuth(false);
      };
    // const auth = localStorage.getItem('user');
    return(
        <div>
            <ul className="nav-ul">
                <li><Link to='/products' className="nav-link">Products</Link></li>
                <li><Link to='/add' className="nav-link">Add Product</Link></li>
                <li><Link to='/update' className="nav-link">Update Product</Link></li>
                <li><Link to='/profile' className="nav-link">Profile</Link></li>
                <li>{auth?(<a href='/logout' className="nav-link" onClick={handleLogout}>Logout</a>):(<a href='/signup' className="nav-link" onClick={handleSignUp}>SignUp</a>)}</li>
                
                
            </ul>
        </div>
    )
}
export default Nav;