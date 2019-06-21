import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodoItemComponent,
  ],
  imports: [
    CommonModule
  ],
})
export class TodosModule { }
