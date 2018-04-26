import { Component, OnInit } from '@angular/core';
import {UsersService} from'../../services/users.service';
import { Change } from '../../models/change';
import { Router } from '@angular/router';
import { Exrequests } from "../../models/exrequests";

@Component({
  selector: 'app-change-list-page',
  templateUrl: './change-list-page.component.html',
  styleUrls: ['./change-list-page.component.css']
})
export class ChangeListPageComponent implements OnInit {
  private changes: Change[] = [];
  private listRequests: Exrequests[] = [];

  constructor(public usersService: UsersService, public router: Router) {
    
  }

  ngOnInit() {
    this.usersService.listChanges().subscribe(userResponse => {
    this.changes = userResponse;
      })

    this.usersService.listRequests().subscribe(userResponse => {
    this.listRequests = userResponse;
      })

  }

  

}