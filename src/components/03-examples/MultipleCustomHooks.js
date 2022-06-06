import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../../index.css';

export const MultipleCustomHooks = () => {


  const { counter , increment} = useCounter(1);
  const { loading ,error, data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );
  /* 
  null -> null
  !null -> true
  !!null -> false
  */
  const { author,quote } = !!data && data[0];

  return (
   <div>
        <h1>Breaking Bad Quotes!!!</h1>
        <hr/>
        {
            ( loading ) ? 

            (
              <div className='alert alert-info text-center'>
                Loading...
            </div>  
            ) :
            (
              <blockquote className='blockquote'>
                <p className='mb-0'> { data[0].quote }</p>
                <footer className='blockquote-footer'> { data[0].author } </footer>
              </blockquote>
            )
        }
        <button onClick={increment}>
            Next Quote
        </button>
        
   </div>
  )
}
