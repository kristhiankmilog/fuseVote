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
        new Change(1,"","","","",true),
    ];
 

  constructor(public todoService: ChangeService,
    public formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit() {
      this.exchanges;
  }

  myEvent(event) {
    this.router.navigate(['/listChanges']);
  }

}