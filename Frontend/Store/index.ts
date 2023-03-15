import {ActionReducerMap, ActionReducer, MetaReducer} from '@ngrx/store'

import { TodoState, todoReducer } from './todo.reducer';
export interface AppState{
    todo:TodoState,
}

export const reducers:ActionReducerMap<AppState>={
    todo:todoReducer,
}