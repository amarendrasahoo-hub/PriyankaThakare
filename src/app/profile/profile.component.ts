import { Component, OnInit, Injectable } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { EmployeeData } from '../model/employee-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  public userData = JSON.parse(localStorage.getItem('empData'));

  constructor( private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit() {
    // this.loginService.$loggedInUserData
    // .subscribe((resposedata: EmployeeData) => {
    //   this.userData = resposedata;
    // });

  }
}
