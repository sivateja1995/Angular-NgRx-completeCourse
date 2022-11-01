import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Form:any;

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['test@angular-university.io',[Validators.required]],
      password:['test',[Validators.required]]
    })
  }


  // login function
  login(){

  }

}
