import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';  

@Component({
  selector: 'app-change-list-page',
  templateUrl: './change-list-page.component.html',
  styleUrls: ['./change-list-page.component.css']
})
export class ChangeListPageComponent implements OnInit {
  private todos: Todo[] = [];
  constructor(public todoService: TodoService) {
    
      }

      ngOnInit() {
        this.todoService.list().subscribe(todosResponse => {
          this.todos = todosResponse;
        })
      }
    
    }