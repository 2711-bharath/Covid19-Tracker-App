import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;

  constructor(public userAuth: UserAuthService, public router: Router) { }

  ngOnInit(): void {
    if(this.userAuth.isLoggedIn === true) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    console.log("logged out")
    this.userAuth.SignOut();
    this.isLoggedIn = false;
    this.router.navigateByUrl('admin');
  }

}
