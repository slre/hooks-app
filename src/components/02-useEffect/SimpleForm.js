import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const { name,email } = formState;
    useEffect(()=>{
      console.log('...Alo');
    },[]);
    // useEffect(()=>{
    //     console.log('Something of formState has changed');
    // },[formState]);
    // useEffect(()=>{
    //     console.log('email from formState has changed');
    // },[email]);  

    const handleInputChange = ( { target } ) => {
        //console.log(e.target);
        setFormState({
            ...formState,
            [ target.name ] :target.value
        });
    }
    return (
        <>
            <h1> useEffect </h1>
            <hr/>
            <section>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Your Name'
                    autoComplete='off'
                    value={name}
                    onChange={ handleInputChange }
                >
                </input>
            </section>
            <section>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='Your Name'
                    autoComplete='off'
                    value={email}
                    onChange={ handleInputChange }
                >
                </input>
            </section>
            {
                (name==='123') && <Message />
            }                

        </>
        
    )
}
