
console.log('Intro reducer');


const initialState = [{
    id:1,
    todo:'take a shower',
    done:false
}];

const todoReducer = ( state = initialState ,  action ) => {
    console.log(action);
    if( action?.type === 'add' ){
        return [ ...state,action.payload ];
    }

    return state;
}

let todos = todoReducer();


const newTodo = {
    id:4,
    todo:'wash dish',
    done:false    
};

const addTodoAction = {
    type:'add',
    payload:newTodo
};

todos = todoReducer(todos,addTodoAction)

console.log(todos);