import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../../index.css';

export const LayoutEffect = () => {

  const { counter , increment} = useCounter(1);
  const { data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );
  /* 
  null -> null
  !null -> true
  !!null -> false
  */
  const { quote } = !!data && data[0];

  const pTag = useRef();

  useLayoutEffect(() => {
      console.log('Quote cambio');
      console.log( pTag.current.getBoundingClientRect() );
  }, [quote])

  return (
   <div>
        <h1>Breaking Bad Quotes!!!</h1>
        <hr/>
           
        {/* <div className='alert alert-info text-center'>
            Loading...
        </div>   */}
        <blockquote className='blockquote'>
            <p className='mb-0' ref = {pTag}> { quote }</p>
            {/* <footer className='blockquote-footer'> { data[0].author } </footer> */}
        </blockquote>
        <button onClick={increment}>
            Next Quote
        </button>
        
   </div>
  )
}
