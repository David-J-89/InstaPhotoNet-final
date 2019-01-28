import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = true;  


  constructor(private http: HttpClient, public authService: AuthService) { }

  ngOnInit() {

  }

  loginToggle() {
    this.registerMode = false;
  }

  registerToggle() {
    this.registerMode = true;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  //cancelRegisterMode(registerMode: boolean) {
  //  this.registerMode = registerMode;
  //} 

}
