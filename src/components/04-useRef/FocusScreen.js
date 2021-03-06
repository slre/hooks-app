import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef();  

  const handleClick = () => {
      inputRef.current.select()
  }  
  return (
    <div>
        <h1>FocusScreen</h1>
        <hr/>

        <input
            ref={ inputRef }
            className='form-control'
            placeholder='Name'
        >
        </input>

        <button
            className='btn btn-outline-primary mt-5'
            onClick={ handleClick }
        >
            Focus
        </button>
    </div>
  )
}
