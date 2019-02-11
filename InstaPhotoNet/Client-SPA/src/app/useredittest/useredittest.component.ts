import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../_models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-useredittest',
  templateUrl: './useredittest.component.html',
  styleUrls: ['./useredittest.component.css']
})
export class UseredittestComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;
  userId: number;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
    private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
      this.userId = this.authService.currentUser.id;
    });
  }

  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.alertify.message('Profile updated successfully!');
      this.editForm.reset(this.user);
    }, error => {
      this.alertify.message(error);
    });
  }

  updateProfilePhoto(photoUrl) {
    this.user.photoUrl = photoUrl;
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
