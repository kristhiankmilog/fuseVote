import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-add-candidate-page',
    templateUrl: './add-candidate-page.component.html',
    styleUrls: ['./add-candidate-page.component.css']
})


export class AddCandidateComponent implements OnInit {
    registerForm: FormGroup;

    constructor(
        public todoUser: UsersService,
        public formBuilder: FormBuilder,
        public router: Router,
    ) {

    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name:'',
            lastname: '',
            politic: '',
            description: '',
            image: '',
            
        });
    }

    onSubmit() {
        this.todoUser.registerCandidate(
            this.registerForm.get('firstname').value,
            this.registerForm.get('lastname').value,
            this.registerForm.get('politic').value,
            this.registerForm.get('description').value,
            this.registerForm.get('image').value,
            this.registerForm.get('firstname').value+"@"+"fusevote.com",
            this.registerForm.get('politic').value
        ).subscribe(serverResponse=>{
            this.router.navigate(['/signin']);
        }, error=>{
        console.log(error);
        });


  this.router.navigate(['/signin']);
}
}
