import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { UserAuthService } from '../../service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({})
  submitted = false;

  constructor( public userAuth: UserAuthService ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required])
    })
  }

  signUp(frm: any) {
    this.submitted = true;
    if(frm.invalid){
      return;
    }
    console.log(frm.value);
    this.userAuth.SignIn(frm.value.email, frm.value.password);
    frm.resetForm();
  }

  googlePopUp(){
    this.userAuth.GoogleAuth();
  }

}
