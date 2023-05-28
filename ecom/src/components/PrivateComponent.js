import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const PrivateComponent = ()=>{
    const auth = localStorage.getItem('user')
    return auth? <Outlet/> : <Navigate to='/signup'/>
}

export default PrivateComponent;


//In React Router, the <Outlet> component is used as a placeholder for rendering child routes within a parent route. It serves as a target for nested routes to be rendered.

// In the code snippet you provided, <Outlet> is used inside the PrivateComponent component. When the auth value is truthy (indicating that the user is authenticated), it renders the <Outlet> component. This means that if the user is authenticated, the child routes defined inside the parent route will be rendered within the PrivateComponent.

// On the other hand, if the auth value is falsy (indicating that the user is not authenticated), it navigates the user to the /signup route using the <Navigate> component.

// In summary, <Outlet> is used to render the child routes within a parent route, and it allows the rendering of different components based on the authentication status of the user.