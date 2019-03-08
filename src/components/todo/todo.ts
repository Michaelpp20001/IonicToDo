import { Component } from '@angular/core';
import { Todo } from '../../app/todo';
import { TodoProvider } from '../../providers/todo/todo';

/**
 * Generated class for the TodoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'todo',
  templateUrl: 'todo.html'
})
export class TodoComponent {

  newTodo: Todo = new Todo();

  text: string;

  constructor(public _todoServe: TodoProvider) {
    console.log('Hello TodoComponent Component');
    this.text = 'Hello World';
  }
  
  addTodo() {
    if (!this.newTodo.title) {
      return;
    }

    this._todoServe.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this._todoServe.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this._todoServe.deleteTodoById(todo.id);
  }

  get todos() {
    return this._todoServe.getAllTodos();
  }

}
