import React from 'react'
import C from './C';
 
const bStyle = {
    width: "500px",
    boxShadow: "0 0 10px green",
    textAlign: "center" ,
    margin: "100px auto",
    padding: "20px"
}
 
function B(props) {
  return (
    <div style={{bStyle}}>
      <h2>B Component</h2>
      <br />

      <p>Data:{props.info}</p>

      < B />
      < C/>
     </div>
  )
}

export default B;
