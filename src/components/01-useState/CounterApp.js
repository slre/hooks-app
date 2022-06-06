import React, { useState } from 'react';
import './counter.css';
export const CounterApp = () => {

  const [ state, setState] = useState({
      count1:10,
      count2:20,
      count3:30,
      count4:40,
  });
  const { count1,count2 } = state;
  //console.log(counter);
  return (
    <>
        {/* <h1> Counter { counter } </h1> */}
        <h1> Counter 1 { count1 } </h1>
        <h1> Counter 2 { count2 } </h1>
        <hr/>

        <button 
            className="btn btn-primary"  
            onClick={()=>{
                setState({
                    ...state,
                    count1 : count1+1
                });
            }}
        > 
        +1    
        </button>
    </>
  )
}
