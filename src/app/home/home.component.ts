import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  username : string;  
  constructor(private login: LoginService) {
    this.username = this.login.getUserId();
    //this.username = "Amarendra"
  }

  ngOnInit() {
  }

}
