// import React from "react";
// import axios from "axios"; // to send req to server

// function AllProducts() {
//   const getProducts = () => {
//     axios.get("https://fakestoreapi.com/products")
//       .then((response) => { // Change `data` to `response`
//         console.log("then");
//         console.log(response.data); // Corrected
//       })
//       .catch((error) => {
//         console.log("error");
//         console.log(error);
//       });
//   };

//   return (
//     <div style={{ padding: "50px" }}>
//       <h2 style={{ marginBottom: "20px" }}>All Products</h2>
//       <p style={{ marginBottom: "20px" }}> kjdfgkkgdnfs,fn,,f</p>

//       <button onClick={getProducts}>Get Products</button>
//     </div>
//   );
// }

// export default AllProducts;


import React from "react";
import axios from "axios";
import { useState } from "react";
import "./AllProducts.css";
import Card from "../card/Card";


function AllProducts() {

let [allproducts, setAllProducts] = useState([]);
  
const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log("Products:", response.data);
      setAllProducts(response.data)
    } 
    catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ marginBottom: "20px" }}>All Products</h2>
      <button onClick={getProducts}>Get Products</button>

      <div className="allProductsData">
        {/* // js code */}

        {
          allproducts.map(function (element, index)  {
          return <Card image={element.image}
                       title={element.title} 
                       price={element.price} />

         })
        }
      </div>
    </div>
  );
}

export default AllProducts;

