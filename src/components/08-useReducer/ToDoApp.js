import React, { useEffect, useReducer } from 'react';
import './styles.css';
import { toDoReducer } from './toDoReducer';
import { ToDoListContainer } from './ToDoListContainer';
import { ToDoAdd } from './ToDoAdd';


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
    //todos is refering to the destructure useReducer from state to todos
    //const [state, dispatch] = useReducer(reducer, state)
    //const [ todos, dispatch ] = useReducer( toDoReducer , initialState.at,init );
    const [todos, dispatch] = useReducer(toDoReducer, [], init);

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

    const handleAdd = ( newToDo ) => {
        const action = {
            type: 'add',
            payload: newToDo
        }
        dispatch(action);
    }



    return (
        <div>
            <h1> Tasks to Do: ( {todos.length} ) </h1>
            <hr />

            <div className="row">

                <div className='col-6' >
                    <ToDoListContainer 
                        todos = { todos }
                        handleDelete = { handleDelete }
                        handleToggle={handleToggle}
                    />
                </div>
                <div className='col-6' >
                    <h4> Add Task To Do </h4>
                    <ToDoAdd handleAdd={handleAdd} />

                </div>
            </div>

        </div>
    )
}
