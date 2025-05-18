import React from 'react'
import { useReducer } from 'react'


const reducerFn = (action) => {
      return "Pratik Jyotirling Bagale";
}

function UseReducer() {
    let [state, dispatch] = useReducer(reducerFn,  100 );

    const modifyState = () => {
         dispatch();
    }
  return (
    <div style = {{
        padding: "100px" 
    }}>
      <h2>useReducer() Hook : {state}</h2>

      <button onClick = {modifyState}>Update State</button>
    </div>
  );
}

export default UseReducer;
