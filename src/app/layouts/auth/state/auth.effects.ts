import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthPageAction } from './actions';
import { map, catchError, exhaustMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
// toastr to import

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private route: Router,
  ) {}
 
  startLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthPageAction.startLogin),
      map((_action) => {
        return this.authService.login(_action).pipe(
          
          catchError((err) => {
            //this.toastr.error(err.error.message, 'Error Occured!');
            return of(AuthPageAction.loginFail({ error: err.error.message }));
          })
        );
      })
    );
  });


}
