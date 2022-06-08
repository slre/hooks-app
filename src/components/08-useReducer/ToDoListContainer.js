import React from 'react';
import { ToDoListItem } from './ToDoListItem';



export const ToDoListContainer = ( {todos,handleDelete,handleToggle}   ) => {
  return (
    <>
     <ul className='list-group list-group-flush'>
      {
        todos.map( (todo,idx)=>{
          return <ToDoListItem
                  key={todo.id}
                  className='list-group-item'
                  todo = {todo}
                  idx ={idx}
                  handleDelete = { handleDelete }
                  handleToggle={handleToggle}

                 />
        })
      }
    </ul>
    </>
  )
}
