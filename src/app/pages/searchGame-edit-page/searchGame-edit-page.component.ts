import { Component, OnInit } from '@angular/core';
import { NewGameService} from '../../services/newGame.service';
import { NewGame } from '../../models/newGame';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchGame-edit-page',
  templateUrl: './searchGame-edit-page.component.html',
  styleUrls: ['./searchGame-edit-page.component.css']
})
export class SearchGameEditPageComponent implements OnInit {
  newGameForm: FormGroup;
  constructor(public newGameService: NewGameService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.newGameForm = this.formBuilder.group({
    name:'',
    description: '',
    photo: ''
  });

}

onSubmit() {
  this.newGameService .create(
  this.newGameForm.get('name').value,
    this.newGameForm.get('description').value,
    this.newGameForm.get('photo').value

  );


  this.router.navigate(['/searchGame']);
}

}
