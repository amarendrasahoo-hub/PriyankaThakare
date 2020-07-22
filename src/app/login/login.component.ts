import { Component, OnInit, Injectable, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { Login } from '../model/login';
import { EmployeeData } from '../model/employee-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  isLoginMode = false;
  
  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLogin(form: NgForm) {
    if(form.invalid){
      return;
    }
    console.log(form.value);
    this.loginService.login(form.value.username, form.value.password)
    .subscribe(response => {
      const employee = response
      console.log(employee)
      localStorage.setItem('token', response.Token)
      localStorage.setItem('empData', JSON.stringify(response));
      this.router.navigate(['home'])
    },
      error=>console.log(error)
      );
   }
}
