import {createAction, props} from '@ngrx/store'
import { Todo } from './Todo'

export const GET_TODOS='[Todo Component] GET_TODOS';
export const ADD_TODO='[Todo Component] ADD_TODO';
export const DELETE_TODO='[Todo Component] DELETE_TODO';

export const getTodo=createAction(GET_TODOS, props<{todos:Todo[]}>());
export const addTodo=createAction(ADD_TODO,props<{todo:Todo}>());
export const deleteTodo=createAction(DELETE_TODO,props<{id:string}>())