import { CookieService } from "ngx-cookie-service";

import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { AppState } from "./reducers/index";
import {
  isLoggedIn,
  isLoggedOut,
  selectAuthState,
} from "./auth/selector/auth.selectors";
import * as AuthAction from "./auth/actions/auth.actions";
import { login, logout } from "./auth/actions/auth.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loading = true;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    // for showing the loder in the application
    let user = this.cookieService.get("user");
    if (user) {
      const userProfile = JSON?.parse(user);
      if (userProfile) {
        this.store.dispatch(login({ user: userProfile }));
      }
    }
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });

    // for show and hide of the login and logout buttons in the sidenav
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  logout() {
    this.store.dispatch(logout());
    this.router.navigateByUrl("/login");
  }
}
