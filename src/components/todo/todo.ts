import { Component } from '@angular/core';
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

  text: string;

  constructor(public _todoServe: TodoProvider) {
    console.log('Hello TodoComponent Component');
    this.text = 'Hello World';
  }

}
