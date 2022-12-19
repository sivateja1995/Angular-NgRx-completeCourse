import { CookieService } from "ngx-cookie-service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { authenticationActions } from "../authentication-types";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private CookieService: CookieService,
    private router: Router
  ) {}

  //  login effect
  login$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(authenticationActions.login),
        tap((action) => {
          this.CookieService.set("user", JSON.stringify(action.user));
        })
      ),
    { dispatch: false }
  );

  // logout effect

  logout = createEffect(
    () =>
      this.action$.pipe(
        ofType(authenticationActions.logout),
        tap((action) => {
          this.CookieService.deleteAll();
          this.router.navigateByUrl("/login");
        })
      ),
    { dispatch: false }
  );
}
