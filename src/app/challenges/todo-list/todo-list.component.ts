import { Component, OnInit } from '@angular/core';

interface Todo {
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  newTodo: string = '';
  todos: Todo[] = [];
  filter: 'all' | 'active' | 'completed' = 'all';

  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    if (this.newTodo.trim()) {
      [this.todos.push({ title: this.newTodo.trim(), completed: false })];
      this.newTodo = '';
    }
  }
  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
  toggleCompletion(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  get filteredTodos(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter((todo) => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter((todo) => todo.completed);
    }
  }
}
