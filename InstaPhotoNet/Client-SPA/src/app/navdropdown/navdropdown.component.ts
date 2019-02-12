import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navdropdown',
  templateUrl: './navdropdown.component.html',
  styleUrls: ['./navdropdown.component.css']
})
export class NavdropdownComponent implements OnInit {
  model: any = {};
  photoUrl: string;
  users: User[];
  userId: number;

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(
      photoUrl => (this.photoUrl = photoUrl)
    );
    this.userId = this.authService.currentUser.id;
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.message('Logged in successfully');
      },
      error => {
        this.alertify.message(error);
      },
      () => {
        this.router.navigate(['/home']);
      }
    );
  }
  loggedIn() {
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('Logged out');
    this.router.navigate(['/home']);
  }
}
