import { Component, OnInit } from '@angular/core';
import { ChangeService } from '../../services/change.service';
import { Change } from '../../models/change';  

@Component({
  selector: 'app-change-list-page',
  templateUrl: './change-list-page.component.html',
  styleUrls: ['./change-list-page.component.css']
})
export class ChangeListPageComponent implements OnInit {
  private changes: Change[] = [];
  constructor(public changeService: ChangeService) {
    
      }

      ngOnInit() {
        this.changeService.list().subscribe(changeResponse => {
          this.changes = changeResponse;
        })
      }
    
    }