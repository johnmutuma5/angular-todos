import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './pages/todos/todos.component';

const routes = [
  {
    path: 'todos',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  // exports: [RouterModule] app.module exports
})
export class TodosRoutingModule { }
