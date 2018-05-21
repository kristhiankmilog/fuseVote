import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.css']
})


export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(
        public todoUser: UsersService,
        public formBuilder: FormBuilder,
        public router: Router,
    ) {

    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Id: '',
            firstname:'',
            lastname: '',
            email: '',
            password: '',
            bornDate: ''
        });
    }

    onSubmit() {
        this.todoUser.registerUser(
        this.registerForm.get('Id').value,
        this.registerForm.get('firstname').value,
        this.registerForm.get('lastname').value,
        this.registerForm.get('email').value,
        this.registerForm.get('password').value,
        this.registerForm.get('bornDate').value,
        false
        ).subscribe(serverResponse=>{
            this.router.navigate(['/signin']);
        }, error=>{
        console.log(error);
        });


  this.router.navigate(['/signin']);
}
}
