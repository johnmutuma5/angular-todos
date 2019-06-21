import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private todos: Todo[];

  constructor(private todoService: TodoService<Todo>) { }

  public ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  private onDeleteTodo(todo: Todo): void {
    const prevTodos = [...this.todos];
    this.todos = prevTodos.filter(val => val.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe(
      () => {
        // toast a message of success
      },
      err => {
        // toast a message of failure
        this.todos = prevTodos;
      }
    );
  }
}
