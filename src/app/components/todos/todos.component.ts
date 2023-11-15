import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title: string = 'Todos!';
  todos: Todo[] = [];
  inputTodo: string = '';
  deletedTodos: Todo[] = [];
  showDeletedTasks: boolean = false; // This property controls the visibility of the deleted tasks

  constructor() {}

  ngOnInit(): void {
    // Initialize with some dummy data
    this.todos = [
      {
        content: "New Task",
        completed: false
      },
      {
        content: "Completed Task",
        completed: true
      }
    ];
  }

  // Toggle the completion state of a todo based on its id
  toggleDone(id: number): void {
    this.todos.map((v, i) => {
      if (i === id) v.completed = !v.completed;
      return v;
    });
  }

  // Delete a todo and store it in the deletedTodos array
  deleteTodo(id: number): void {
    const deleted = this.todos.splice(id, 1)[0];
    this.deletedTodos.unshift(deleted); // Add to the beginning of the deletedTodos array
    if (this.deletedTodos.length > 10) {
      this.deletedTodos.length = 10; // Keep only the last 10 deleted todos
    }
  }

  // Add a new todo based on the content from the input field
  addTodo(): void {
    if (this.inputTodo.trim().length) {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
      this.inputTodo = ''; // Clear the input field after adding a todo
    }
  }

  // Move a todo up in the list by swapping it with the previous one
  bumpTodo(id: number): void {
    if (id > 0) {
      [this.todos[id], this.todos[id - 1]] = [this.todos[id - 1], this.todos[id]];
    }
  }

  // Toggle the display of the deleted todos
  showDeleted(): void {
    this.showDeletedTasks = !this.showDeletedTasks;
  }
}
