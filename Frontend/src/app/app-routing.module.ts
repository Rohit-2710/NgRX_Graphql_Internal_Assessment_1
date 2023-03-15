import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';
const routes: Routes = [
  {path:'',component:ListTodoComponent},
  {path:'add',component:AddTodoComponent},
  {path:'list',component:ListTodoComponent},
  {path:'update/:id', component:UpdateTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
