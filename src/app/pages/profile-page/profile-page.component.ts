import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  private todos: Todo[] = [];
  constructor(public todoService: TodoService) {

      }

      ngOnInit() {
        this.todoService.list().subscribe(todosResponse => {
          this.todos = todosResponse;
        })
      }

    }