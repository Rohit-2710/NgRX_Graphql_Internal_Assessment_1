import {createFeatureSelector, createSelector} from '@ngrx/store'
import { AppState } from 'Store';
import { TodoState } from './todo.reducer'
const selectTodoState=createFeatureSelector<AppState,TodoState>('todo');
export const selectedTodos=createSelector(
    selectTodoState,
    (state:TodoState)=>state.todos
)