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
  private request1: string[];
  private request2: string[];
  private change1: string;
  private description = "esto es una prueba"

  ngOnInit() {
    
    this.request1=sessionStorage.getItem("tochange").split(",");
    console.log(this.request1[0]);

    this.request2=sessionStorage.getItem("forchange").split(",");
    console.log(this.request2[0]);

    
  }

  createExrequest(){
    console.log("se pulso boton *-*-*-*-*-*-*-*-*-*-*-");
    this.usersService.createExrequests(this.request1[0],this.request1[1],this.request1[2],this.request2[2]);
  }

  acceptR(event) {
    
    this.createExrequest();
    this.router.navigate(['/listChanges']);
  }

}