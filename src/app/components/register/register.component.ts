import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { UserAuthService } from '../../service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm = new FormGroup({})
  submitted = false;

  constructor( public userAuth: UserAuthService ) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required])
    })
  }

  signUp(frm: any) {
    this.submitted = true;
    if(frm.invalid){
      return;
    }
    console.log(frm.value)
    this.userAuth.SignUp(frm.value.email, frm.value.password);
    frm.resetForm();
  }

  googlePopUp(){
    this.userAuth.GoogleAuth();
  }
}
