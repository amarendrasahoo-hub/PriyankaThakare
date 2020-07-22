import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styleUrls: ['./header-new.component.css']
})
export class HeaderNewComponent implements OnInit {

  empname : string = "";
  navbarOpen = false;
  imageSrc = 'assets/images/logo_resize.jpg';
  isNavbarCollapsed = true;
  isloggedin = false;
  constructor(private login : LoginService) { 
    this.isloggedin = this.login.isLoggedin();
  }

  ngOnInit() {
   this.empname = localStorage.getItem("token");
  }
  toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}

logoutUser(){

  localStorage.removeItem("token");
  console.log("logout")
}
}
