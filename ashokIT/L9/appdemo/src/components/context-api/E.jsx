import React from 'react'
import { useContext} from 'react';
import myFirstContext from './context';

function E() {
    let contextdata = useContext(myFirstContext);
  return (
    <div>
      <h2>E Component</h2>
      <br />

      <h4 style={{color: "green"}}>Data: {contextdata}</h4>
    </div>
  )
}

export default E
