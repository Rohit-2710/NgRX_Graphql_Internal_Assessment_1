import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular'
import {Observable,map} from 'rxjs'
import { LIST_TODOS } from 'src/graphql/queries';
import { ADD_TODO, DELETE_TODO } from 'src/graphql/mutations';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  constructor(private apollo:Apollo) {}
  listTodos():Observable<Todo[]>{
    return this.apollo.query({query:LIST_TODOS}).pipe(
      map((result:any)=>{
        return result.data.todos;
      })
    )
  }
  delete(id:string):Observable<any>{
    return this.apollo.mutate({mutation:DELETE_TODO, variables:{id:id}})

  }
  addTodo(data:any):Observable<any>{
    return this.apollo.mutate({mutation:ADD_TODO,variables:{input:data}})
  }
}
  
