import { Component, OnInit } from '@angular/core';
import { EmployeeData } from '../model/employee-data';
import { Login } from '../model/login';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent implements OnInit {
  isLoginMode: Boolean = false;
  public userData: EmployeeData;
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  credentials: Login;
  public authMessage: string;
  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if(form.invalid){
      return;
    }
    //console.log(form.value);
    this.loginService.login(form.value.username, form.value.password);
   }
 

}
