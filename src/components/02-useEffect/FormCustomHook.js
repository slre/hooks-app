import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export const FormCustomHook = () => {

    const [ formValues , handleInputChange ] = useForm({
        name:'',
        email:'',
        password:''
    });

    const { name,email,password } = formValues;

    useEffect(() => {
        // Only if email has changed
        console.log('email changed');
    }, [email]);
    const handleSubmit = ( e ) =>{
        e.preventDefault();
        console.log(formValues);

    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h1> FormCustomHook </h1>
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
            <section>
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='*****'
                    autoComplete='off'
                    value={password}
                    onChange={ handleInputChange }
                >
                </input>
            </section>
            <section>
                <button className='btn btn-primary' type='submit'>
                    Save
                </button>
            </section>
        </form>
        
    )
}
