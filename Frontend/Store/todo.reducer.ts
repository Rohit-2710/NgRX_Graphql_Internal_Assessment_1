import {createReducer, on} from '@ngrx/store'
import { Todo } from './Todo'
import { getTodo, addTodo, deleteTodo } from './todo.actions';

export interface TodoState{
    todos:Todo[]
}
const initialState:TodoState = {
    todos:[]
}

const _todoReducer=createReducer(
    initialState,
    on(getTodo,(state,{todos})=>{
        return{
            ...state,
            todos:todos,
        }
    }),
    on(addTodo,(state,{todo})=>{
        return{
            ...state,
            todos:[...state.todos,todo]

        }
    }),
    on(deleteTodo,(state,{id})=>{
       return{
        ...state,
        todos:state.todos.filter((todo)=>todo._id!=id)
       }
    })
)
export const todoReducer=(state:any, action:any)=>{
return _todoReducer(state,action)
}

