import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  title = 'title!';
  todos!: Todo[];
  constructor() {}
  ngOnInit(): void {
    this.todos = [
      {
        content: "1st todo",
        completed: false
      }, {
        content: "2nd todo",
        completed: true
      }
    ]
  }
}
