import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';
export const CounterWithCustomHook = () => {


  const { state, increment,decrement,reset  } = useCounter(100);

  return (
    <>
      <h1>CounterWithCustomHook { state } </h1>
      <h1/>
      <button
        className='btn btn-primary'
        onClick={ ()=> increment(5) }
       >+1</button>

       <button
        className='btn btn-primary'
        onClick={ ()=> decrement(5) }
       >-1</button>

      <button
        className='btn'
        onClick={ ()=> reset() }
       >Reset</button>
    </>
    
  )
}
