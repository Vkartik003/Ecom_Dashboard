import React from "react";
// import { ReactDOM } from "react";
import { Link } from "react-router-dom";
// style= { { textDecoration: 'none' }}
const Nav = () =>{
    return(
        <div>
            <ul className="nav-ul">
                <li><Link to='/products' className="nav-link">Products</Link></li>
                <li><Link to='/add' className="nav-link">Add Product</Link></li>
                <li><Link to='/update' className="nav-link">Update Product</Link></li>
                <li><Link to='/logout' className="nav-link">Logout</Link></li>
                <li><Link to='/profile' className="nav-link">Profile</Link></li>
                <li><Link to='/signup' className="nav-link">SignUp</Link></li>
                
                
            </ul>
        </div>
    )
}
export default Nav;