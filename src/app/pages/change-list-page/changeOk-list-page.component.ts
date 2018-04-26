import { Component, OnInit } from '@angular/core';
import { Change } from '../../models/change';
import { Router } from '@angular/router';
import {UsersService} from'../../services/users.service';

@Component({
  selector: 'app-changeOk-list-page',
  templateUrl: './changeOk-list-page.component.html',
  styleUrls: ['./change-list-page.component.css']
})
export class ChangeOkListPageComponent implements OnInit {
  private changes2: Change[] = [];
  private request1: string[];
  private request2: string[];
  private change1: string;
  
  constructor(public usersService: UsersService,public router: Router) {
  }

  ngOnInit() {
    this.usersService.listChanges().subscribe(userResponse => {
    this.changes2 = userResponse;
      })
    
    
  }

  myEvent(event) {
    this.change1 =(<HTMLInputElement>document.getElementById("forchange")).value;
    sessionStorage.setItem("forchange", this.change1);

    this.request1=sessionStorage.getItem("tochange").split(",");
    console.log(this.request1[0]);

    this.request2=sessionStorage.getItem("forchange").split(",");
    console.log(this.request2[0]);

    
    this.router.navigate(['/code']);
  }

}