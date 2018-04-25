import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-accept-page',
  templateUrl: './code-accept-page.component.html',
  styleUrls: ['./code-accept-page.component.css']
})
export class CodeAcceptPageComponent implements OnInit {

  constructor(public router: Router) { }
  private change2: string[];

  ngOnInit() {
    this.change2=sessionStorage.getItem("forchange").split(",");
    window.alert(this.change2[0]);
  }

  myEvent(event) {
    this.router.navigate(['/listexChanges']);
  }

}