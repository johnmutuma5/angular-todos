import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { TodoItemComponent } from './todo-item.component';
import { TodoService } from '../../../todos/todo.service';
import { Todo } from '../../models/todo';

const testTodo = {
  userId: 0,
  id: '',
  title: '',
  completed: false
};

class TodoServiceMock {
  toggleTodoState(todo: Todo) {
    return of([testTodo]);
  }
}

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ TodoItemComponent ],
      providers: [{
        provide: TodoService,
        useClass: TodoServiceMock,
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = testTodo;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('TodoItemComponent - Component logic', () => {
    it('should toggle the state to the todo', () => {
      component.todo = testTodo;
      const completedTodo = { ...testTodo, completed: true };

      // const todoService: TodoService<Todo> = fixture.debugElement.injector.get(TodoService);
      const todoService: TodoService<Todo> = TestBed.get(TodoService);
      spyOn(todoService, 'toggleTodoState').and.returnValue(of(completedTodo));
      component.onToggleTodo(testTodo);

      expect(todoService.toggleTodoState).toHaveBeenCalled();
      expect(component.todo.completed).toEqual(true);
      // inject(
      //   [ TodoService, TodoItemComponent ],
      //   (todoService: TodoService<Todo>, todoItemCmp: TodoItemComponent) => {
      //     component = todoItemCmp;
      //     spyOn(todoService, 'toggleTodoState');

      //     component.todo = testTodo;
      //     const newTodo = { ...testTodo, completed: true };
      //     component.onToggleTodo(newTodo);

      //     expect(todoService.toggleTodoState).toHaveBeenCalled();
      // });
    });
  });
});

