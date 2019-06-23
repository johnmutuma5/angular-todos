import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService<T extends Todo> {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http: HttpClient) { }

  public getTodos(): Observable<T[]> {
    const params: HttpParams = new HttpParams({ fromObject: { _limit: '15' } });

    return this.http.get<T[]>(this.baseUrl, { params });
  }

  public toggleTodoState(updatedTodo: T): Observable<T> {
    const todoUrl: string = `${this.baseUrl}${updatedTodo.id}`;
    return this.http.patch<T>(todoUrl, updatedTodo, httpOptions);
  }

  public deleteTodo(targetTodo: T): Observable<T> {
    const deleteUrl = `${this.baseUrl}${targetTodo.id}`;
    return this.http.delete<T>(deleteUrl);
  }
}
