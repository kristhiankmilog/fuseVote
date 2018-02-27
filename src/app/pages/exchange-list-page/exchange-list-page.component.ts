import { Component, OnInit } from '@angular/core';
import { ChangeService } from '../../services/change.service';
import { Change } from '../../models/change';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchange-list-page',
  templateUrl: './exchange-list-page.component.html',
  styleUrls: ['./exchange-list-page.component.css']
})
export class ExchangeListComponent implements OnInit {

    private exchanges: Change[] = [
      new Change(1,"","","http://2.bp.blogspot.com/-uPDDofi3qOE/UM4VRppTwlI/AAAAAAAAAB0/nDW-TyihLQQ/s1600/Dead+Space+2+Caratula.jpg","",true),
      new Change(1,"","","http://2.bp.blogspot.com/-uPDDofi3qOE/UM4VRppTwlI/AAAAAAAAAB0/nDW-TyihLQQ/s1600/Dead+Space+2+Caratula.jpg","",true),
      new Change(1,"","","http://2.bp.blogspot.com/-uPDDofi3qOE/UM4VRppTwlI/AAAAAAAAAB0/nDW-TyihLQQ/s1600/Dead+Space+2+Caratula.jpg","",true),
      new Change(1,"","","http://2.bp.blogspot.com/-uPDDofi3qOE/UM4VRppTwlI/AAAAAAAAAB0/nDW-TyihLQQ/s1600/Dead+Space+2+Caratula.jpg","",true),
      
    ];
 

  constructor(public router: Router) { }

  ngOnInit() {
      this.exchanges;
  }

  myEvent(event) {
    this.router.navigate(['/okChanges']);
  }

}