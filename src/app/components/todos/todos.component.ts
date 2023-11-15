import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  title = 'Todos!';
  todos!: Todo[];
  inputTodo:string =''
  constructor() {}
  ngOnInit(): void {
    this.todos = [
      {
        content: "New Task",
        completed: false
      }, {
        content: "Competed Task",
        completed: true
      }
    ]
  }
  toggleDone (id: number) {
    this.todos.map((v,i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo (id: number) {
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  addTodo () {
    this.todos.push ({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = "" // word doesnt stay at form
  }

  bumpTodo(id: number) {
    if (id > 0) { // Ensure we're not trying to bump the first item
      // Swap the todo with the previous one
      [this.todos[id], this.todos[id - 1]] = [this.todos[id - 1], this.todos[id]];
    }
  }
  

}
