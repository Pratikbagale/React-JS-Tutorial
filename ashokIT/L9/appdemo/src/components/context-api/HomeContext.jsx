import React from 'react';
import { useState } from 'react';
import Details from './Details';
import myHomeContext from './MyHomeContext';

function HomeContext() {
    let [state, setState] = useState("")

    let [data, setData] = useState("");


    const submitData = () => {
        setData(state)
    };
  return (
    <div style={{padding: "50px"}}> 
       <h2>HomeContext Component</h2>
       <br />
       <input type='text' placeholder='Enter Text' onChange={(event) => {
        setState(event.target.value)
       }}/>
       <button onClick={submitData}>Submit</button>
       <br/>
       <hr/>
       <myHomeContext.Provider value={data}>

         <Details />

       </myHomeContext.Provider>

        
    </div>
  )
}

export default HomeContext;
