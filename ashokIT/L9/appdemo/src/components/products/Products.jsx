import React from "react";
import {Link, Outlet} from "react-router-dom";
import "./Products.css";

function Products() {
  return (
     <div>
      <h2 style =  {{textAlign: "center", marginTop: "20px", color: "green"}}>Products Components</h2>

      <div className="productsContainer">

      <div className="linksContainer">
       <Link to="electronics" style= {{color:"white", textDecoration:"none", fontSize:"21px"}}>Electronics</Link>
       <Link to="jewelery" style={{color:"white", textDecoration:"none", fontSize:"21px"}}>Jewelery</Link>
       <Link to="mensClothing" style={{color:"white", textDecoration:"none", fontSize:"21px"}}>Men's Clothing</Link>
       <Link to="womensClothing" style={{color:"white", textDecoration:"none", fontSize:"21px"}}>Women's Clothing</Link>
      </div>
      
       <div className="componentsContainer">
       <Outlet />  
      </div>
      </div>
     </div>
  );
}
 
export default Products;
