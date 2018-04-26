import { Component, OnInit } from '@angular/core';
import {UsersService} from'../../services/users.service';
import { Change } from '../../models/change';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exchange-list-page',
  templateUrl: './exchange-list-page.component.html',
  styleUrls: ['./exchange-list-page.component.css']
})
export class ExchangeListComponent implements OnInit {

  private exchanges: Change[] = [];
  private change1: string;
  private change3: string[];
     constructor(public usersService: UsersService, public router: Router) {
       
     }
   
     ngOnInit() {
       this.usersService.listAllChanges().subscribe(userResponse => {
       this.exchanges = userResponse;
         })
     }
 
   myEvent(event) {

    this.change1 =(<HTMLInputElement>document.getElementById("tochange")).value;
    sessionStorage.setItem("tochange", this.change1);

    this.change3=sessionStorage.getItem("tochange").split(",");
    console.log(this.change3[0]);

     this.router.navigate(['/okChanges']);
   }

}