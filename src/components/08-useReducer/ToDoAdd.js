import React from 'react';
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({ handleAdd }) => {

    // useForm return this  return [ values,handleInputChange ]
    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    });
    const handleTodoSubmit = ( e ) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }
        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAdd(newToDo);
        reset();
    }
    return (

        <>
            <form onSubmit={handleTodoSubmit}>
                <input
                    type='text'
                    name='description'
                    placeholder='What R U gonna do?'
                    autoComplete='off'
                    className='form-control'
                    onChange={handleInputChange}
                    value={description}
                ></input>
                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1  btn-lg form-control'
                >
                    Add
                </button>
            </form>
        </>
    )
}
