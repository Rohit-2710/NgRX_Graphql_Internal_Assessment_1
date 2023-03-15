import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import { TodoserviceService } from 'src/service/todoservice.service';
import { addTodo } from 'Store/todo.actions';
import { FormsModule } from '@angular/forms';
import { Todo } from 'Store/Todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  todo:Todo={
    todo:'',
    due:'',
    status:''
  }
  submitted:boolean=false

  constructor(private store:Store, private todoService:TodoserviceService){}
  add=async ()=>{
    const data={
      todo:this.todo.todo,
      due:this.todo.due,
      status:this.todo.status
    }
    await this.todoService.addTodo(data).subscribe()
    this.store.dispatch(addTodo({todo:data}))
    this.submitted=true
  }
  newTodo():void{
    this.submitted=false;
    this.todo={
      todo:'',
      due:'',
      status:''
    }
    }

}
