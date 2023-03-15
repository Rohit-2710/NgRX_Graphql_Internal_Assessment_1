import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from 'src/service/todoservice.service';
import { Store } from '@ngrx/store';
import { AppState } from 'Store';
import {of,switchMap} from 'rxjs'
import { Todo } from 'src/service/Todo';
import { getTodo } from '../../../../Store/todo.actions';
import { selectedTodos } from 'Store/todo.selector';
import { deleteTodo } from '../../../../Store/todo.actions';


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit{
   todo:string=''
   due!:Date
   status:string=''
   todos:any=[]
  constructor(private todoService: TodoserviceService, private store:Store<AppState>) {}
  async ngOnInit():Promise<void>{
    await this.todoService.listTodos().subscribe((data)=>{
      console.log(data)
      this.store.dispatch(getTodo({todos:data}))
    })
    this.store.select(selectedTodos).pipe(switchMap((todos)=>{
      if(todos){
        return of(todos);
      }else{
        return this.store.select(selectedTodos)
      }

    })).subscribe((value)=>{
      this.todos=value
    })
  }
  deleteTodo=(id:string)=>{
     this.todoService.delete(id).subscribe()
     this.store.dispatch(deleteTodo({id}))
     window.location.reload()
  }
}
