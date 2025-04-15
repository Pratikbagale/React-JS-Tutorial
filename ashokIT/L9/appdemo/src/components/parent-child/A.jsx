 import React from "react";
 import { useState } from "react";
 import B from "./B";

 const aStyle = {
    width: "500px",
    boxShadow: "0 0 10px green",
    textAlign: "center" ,
    padding: "20px"
}
 
 function A() {

    let [state, setState] = useState("---")
    return(
        <>
        <div style={{aStyle}}>
            <h2>A Component</h2>
            <button onClick={() => {
               setState("Kabir");
            }}
            >Pass Data to B</button>
        </div>      
        < B info = {state }/>
        </>
    );
 }

 export default A;