import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../../todos/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input('todo') todo: Todo;
  @Output('onDeleteTodo') deleteTodoEvent: EventEmitter<Todo> = new EventEmitter();

  todoTitleClasses: any =  { };

  constructor(private todoService: TodoService<Todo>) { }

  public ngOnInit(): void {
    this.setTodoTitleClasses();
  }

  public setTodoTitleClasses(): void {
    this.todoTitleClasses = {
       completed: this.todo.completed
    };
  }

  public onToggleTodo(todo: Todo): void {
    // send to server
    this.todo.completed = !todo.completed;
    this.setTodoTitleClasses();
    this.todoService.toggleTodoState(this.todo).subscribe((updatedTodo: Todo) => {
      this.todo = updatedTodo;
      // handle UI
      this.setTodoTitleClasses();
    });
  }

  public onDeleteTodo(todo: Todo): void {
    this.deleteTodoEvent.emit(todo);
  }
}
