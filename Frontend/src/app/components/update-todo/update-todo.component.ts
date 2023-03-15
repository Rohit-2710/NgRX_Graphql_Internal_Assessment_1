import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoserviceService } from 'src/service/todoservice.service';
import { Observable } from 'rxjs';
import { Route } from '@angular/router';
import { Todo } from 'Store/Todo';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
id:any
 todo:Todo={
  _id:'',
  todo:'',
  due:'',
  status:''

 }
 submitted:boolean=false

constructor(private todoService:TodoserviceService, private activatedRoute:ActivatedRoute, private store:Store){}
ngOnInit():void{
  this.activatedRoute.paramMap.subscribe(paramMap => { 
    this.id = paramMap.get('id');
    console.log(this.id)
})
}

update():void{
const data:Todo={
  todo:this.todo.todo,
  due:this.todo.due,
  status:this.todo.status,
  _id:this.id
}
this.todoService.updateTodo(data).subscribe()
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


