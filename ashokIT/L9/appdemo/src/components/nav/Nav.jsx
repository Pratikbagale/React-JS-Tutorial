import React from "react";
import {Link} from "react-router-dom"; 
import "./Nav.css";

function Nav(){
    return(
        <div className="nav">
            <div className="leftPanel"> 
                <h2>React</h2>
            </div>

            <div className="rightPanel">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/counter">Counter </Link>
                <Link to="/imageComponent">ImageComponent</Link>
                <Link to="/allproducts">AllProducts</Link>
                <Link to="/login ">Login</Link>
            </div>
        </div>
    );
}

export default Nav;