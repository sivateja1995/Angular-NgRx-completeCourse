import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "@ngrx/store";

import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { Router } from "@angular/router";
import { User } from "../model/user.model";
import { AppState } from "../../reducers/index";
import *as loginAction from "../actions/auth.actions";
import { login } from '../actions/auth.actions';
@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ["test@angular-university.io", [Validators.required]],
      password: ["test", [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    const { email, password } = this.form.value;

    this.auth
      .login(email, password)
      .pipe(
        tap((user:User) => {
          const location  = loginAction.login({user:user})
          this.store.dispatch(location);
          this.router.navigateByUrl("/courses");
        })
      )
      .subscribe(noop, () => alert("login has failed"));
  }
}
