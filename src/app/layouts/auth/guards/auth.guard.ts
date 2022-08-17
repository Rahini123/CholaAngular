import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {
  //   return this.checkUserLogin(route, '');
  // }
  // checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
  //    if (!this.authservice.isAuthenticated()) {
  //     this.router.navigate(['/']);
  //     return false;
  //   }
  //   return true;
  // }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |boolean | UrlTree  {

    if(!this.authservice.isAuthenticated())
    {
    this.router.navigate(['/']) ,{ queryParams: { returnUrl: state.url }};
   return false;
    }else
    return true;

  }
}
function next(
  next: any,
  arg1: string
):
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree> {
  throw new Error('Function not implemented.');
}
