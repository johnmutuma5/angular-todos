import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { HttpRequest } from '@angular/common/http';

import { TodoService } from './todo.service';
import { Todo } from './models/todo';

const testTodo = {
  userId: 0,
  id: '',
  title: '',
  completed: false
};


describe('TodoService', () => {
  const baseUrl: string = 'https://jsonplaceholder.typicode.com/todos/';
  let service: TodoService<Todo>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ TodoService ],
    });

    service = TestBed.get(TodoService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    service = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });

  it('should get all todos', () => {
    service.getTodos().subscribe((todos: Array<Todo>) => {
      expect(todos.length).toBe(1);
      const [ todo ] = todos;
      expect(todo.completed).toBe(false);
    });

    httpMock
      .expectOne((req: HttpRequest<Todo[]>): boolean => {
        return req.url === baseUrl && req.params.get('_limit') === '15';
      })
      .flush([testTodo]);
  });

  it('should toggle todo state', () => {
    const updatedTodo = { ...testTodo, completed: true };
    service.toggleTodoState(updatedTodo).subscribe((todo: Todo)  => {
      expect(todo.completed).toBe(true);
    });

    httpMock
      .expectOne((req: HttpRequest<Todo>): boolean => {
        return req.url === baseUrl && req.method === 'PATCH';
      })
      .flush(updatedTodo);
  });

  it('should delete a todo', () => {
    service.deleteTodo(testTodo).subscribe((res: any)  => {
      // expect(todo.completed).toBe(true);
      expect(res.status).toBe('success');
    });

    const mockDeleteTodoRespBody = {status: 'success'};
    httpMock
      .expectOne((req: HttpRequest<Todo>): boolean => {
        return req.url === baseUrl && req.method === 'DELETE';
      })
      .flush(mockDeleteTodoRespBody);
  });
});
