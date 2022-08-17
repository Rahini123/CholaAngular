import { Router } from '@angular/router';
import { AuthState } from './../state/auth.reducer';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginPayload } from '../models/login';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthPageAction } from '../state/actions';
import { Employee } from 'src/app/modules/files/uploadlist';


@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit{
  userInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  jwthelper = new JwtHelperService();
  isLoggedIn: boolean = false;  
  roleAs:string;
  employee:Employee[];
  public redirectUrl:String ;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private store: Store<AuthState>,
    private route: Router,

    
  ) {}
  ngOnInit(): void {
   // this.getdropdowndata();
  }

     

  public testService(): Observable<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(map((result) => result));
  }

  public signOut(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    
    // this.route.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    let token :any;
    token = localStorage.getItem('accessToken');
    if (this.jwtHelper.isTokenExpired(token)) {
      // session expired
      // toastr msg

      this.signOut();
    }
    //return !this.jwtHelper.isTokenExpired(token);
    return true;
  }
  getRole()

  {
    this.roleAs = localStorage.getItem('role') || '{}';
    return this.roleAs;
  }
  public login(loginpayload:any) {
    let payload: LoginPayload = {
      ...loginpayload,
    };
    console.log(loginpayload);
    localStorage.setItem('username',loginpayload.username);
    this.store.dispatch(AuthPageAction.setUser(loginpayload));
    return loginpayload
  }
  public  userLogin(loginpayload: any) : Observable<boolean> {

    return this.http.post<any>('http://techstephub.focusrtech.com:5050/techstep/api/auth/signin',loginpayload).pipe(

      map((token) => {
   
       
          localStorage.setItem('accessToken',token.tokenType + ' ' +token.accessToken);
          const helper = new JwtHelperService();
          const decodeToken = helper.decodeToken(token.accessToken);
          localStorage.setItem('username',decodeToken.username);
          localStorage.setItem('role',decodeToken.role);
          localStorage.setItem('tokenExpiration',decodeToken.sub);
          console.log(decodeToken.role);
          return decodeToken.role;
   
       
        // if(decodeToken.role === 'ROLE_ADMIN')
        // {// localStorage.setItem('isSuperUser','N');
        //   localStorage.setItem('SuperUser',loginpayload.isSuperUser='Y');
        // } else {localStorage.setItem('SuperUser',loginpayload.isSuperUser='N');
        // }
     



      })

    )

 }
 public  profileEdit(profileedit: any) : Observable<boolean> {

  return this.http.post<any>('http://localhost:9090/TicketManager/createOrUpdateAgentDetails',profileedit);

  

}
public getdropdowndata(dropvalue:any):Observable<boolean>{
 // return this.http.post<any>('https://gorest.co.in/public/v2/users',dropdowndata);
  return this.http.post<any>('https://gorest.co.in/public/v2/users',dropvalue);
}
 getdrop():Observable<any[]>{
  return this.http.get<any>('https://gorest.co.in/public/v2/user');
}
}
