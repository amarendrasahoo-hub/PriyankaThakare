declare function require(path: string);
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentJustify = 'center';
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
