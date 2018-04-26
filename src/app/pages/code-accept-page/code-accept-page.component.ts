import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from'../../services/users.service';

@Component({
  selector: 'app-code-accept-page',
  templateUrl: './code-accept-page.component.html',
  styleUrls: ['./code-accept-page.component.css']
})
export class CodeAcceptPageComponent implements OnInit {

  constructor(public usersService: UsersService,public router: Router) { }
  private change2: string[];
  private request1: string[];

  ngOnInit() {
    this.change2=sessionStorage.getItem("forchange").split(",");
    console.log(this.change2[0]+"---------------------------------");
    this.request1=sessionStorage.getItem("tochange").split(",");
    this.usersService.createRequests(this.request1[0],this.request1[1],this.request1[2],this.change2[2]);
  }

  myEvent(event) {
    this.router.navigate(['/listexChanges']);
  }

}