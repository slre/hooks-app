import React, { useEffect, useReducer } from 'react';
import './styles.css';
import { toDoReducer } from './toDoReducer';
import { useForm } from '../../hooks/useForm';


const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Learn React',
    //     done: false

    // }]
    //return (JSON.parse(localStorage.getItem('todos'))!==null) ? JSON.parse(localStorage.getItem('todos')) : []

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const ToDoApp = () => {
    //   todos is refering to the destructure useReducer from state to todos
    //   const [state, dispatch] = useReducer(reducer, state)
    //const [ todos, dispatch ] = useReducer( toDoReducer , initialState.at,init );
    const [todos, dispatch] = useReducer(toDoReducer, [], init);
    // useForm return this  return [ values,handleInputChange ]
    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos]);

    const handleDelete = ( todoId ) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type:'toggle',
            payload:todoId
        });
    }

    const handleTodoSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }
        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newToDo
        }
        dispatch(action);
        reset();
    }


    return (
        <div>
            <h1> Tasks to Do: ( {todos.length} ) </h1>
            <hr />

            <div className="row">

                <div className='col-6' >
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, idx) => (
                                <li
                                    key={todo.id}
                                    className='list-group-item'
                                >
                                    <p 
                                        className={`${ ( todo.done && 'complete' ) }`}
                                        onClick={ ()=>{handleToggle(todo.id)}}
                                    > {idx + 1} {todo.desc} 
                                    </p>
                                    <button 
                                        className='btn btn-danger'
                                        onClick={()=>{ handleDelete(todo.id) } }
                                    >Delete</button>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <div className='col-6' >
                    <h4> Add Task To Do </h4>
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

                </div>
            </div>

        </div>
    )
}
