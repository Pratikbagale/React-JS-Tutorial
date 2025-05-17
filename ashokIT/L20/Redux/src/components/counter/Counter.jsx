import React from "react";
import { useReducer } from "react";
import counterReducer from "./counterReducer";
import "./Counter.css";

function Counter() {
 
    let [state, dispatch] = useReducer(counterReducer, {count: 0} ); 

    const incCount = () => {
        dispatch({type: "INC"});
    }

    const decCount = () => {
        dispatch({type: "Dec"});
    };
    return(
        <>
        <div className = "reducerCounter">
            <h2>Counter App with useReducer() Hook : {state.count }</h2>

            <button onClick = {incCount}> Increse Count</button>
            <button onClick = {decCount}>Decrease Count</button>
            <button>Reset</button>
        </div>
        
        </>
    );
}

export default Counter;