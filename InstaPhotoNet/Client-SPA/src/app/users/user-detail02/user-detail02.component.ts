import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { AuthService } from '../../_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail02',
  templateUrl: './user-detail02.component.html',
  styleUrls: ['./user-detail02.component.css']
})
export class UserDetail02Component implements OnInit {
  user: User;  
  userImages: string[];
  
  

  constructor(private userService: UserService, private alertify: AlertifyService,
    private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
      
    });

    this.userImages = this.getImages();
    //console.log(this.userImages);

  }
  getImages() {
    const imageUrls = [];
    for (let i = 0; i < this.user.photos.length; i++) {

      imageUrls.push({

        medium: this.user.photos[i].url

      });
    }

    return imageUrls;

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('Logged out');
    this.router.navigate(['/home']);
  }

  sendLike(id: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
      this.alertify.message('You have followed: ' + this.user.knownAs);
    }), error => {
      this.alertify.message(error);
    }
  }
}
