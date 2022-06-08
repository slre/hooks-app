import React, { useReducer } from 'react';
import './styles.css';
import { toDoReducer } from './toDoReducer';


const initialState = [{
    id:new Date().getTime(),
    desc:'Learn React',
    done:false

}]

export const ToDoApp = () => {
//   todos is refering to the destructure useReducer from state to todos
//   const [state, dispatch] = useReducer(reducer, state)    
  const [ todos ] = useReducer( toDoReducer , initialState);
  console.log(JSON.stringify(todos));





  return (
    <div>
        <h1> ToDo App ( { todos.length } ) </h1>
        <hr/>

        <div className="row">
            
            <div className='col-6' >
                <ul className='list-group list-group-flush'>
                    {
                        todos.map( (todo,idx) =>(
                            <li 
                            key={ todo.id }
                                className='list-group-item'
                            > 
                            <p className='text-center'> { idx+1 } { todo.desc } </p> 
                            <button  className='btn btn-danger'>Delete</button>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
            <div className='col-6' >
                <h4> Add ToDo </h4>
                <form>
                    <input
                        type='text'
                        name='description'
                        placeholder='What do yo donna do?'
                        autoComplete='off'
                        className='form-control'
                    ></input>
                    <button
                        className='btn btn-outline-primary mt-1  btn-lg btn-block'

                    >
                        Add
                    </button>
                </form>
                
            </div>
        </div>
        
    </div>
  )
}
