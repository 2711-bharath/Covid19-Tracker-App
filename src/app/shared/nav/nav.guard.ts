import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserAuthService } from "../../service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavGuard implements CanActivate {
  constructor(
    public authService: UserAuthService,
    public router: Router
  ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLoggedIn === true) {
      this.router.navigate(['state-wise'])
    }
    return true;
  }
  
}
