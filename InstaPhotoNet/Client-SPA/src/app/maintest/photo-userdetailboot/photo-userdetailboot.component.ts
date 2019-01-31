import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { AlertifyService } from '../../_services/alertify.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-photo-userdetailboot',
  templateUrl: './photo-userdetailboot.component.html',
  styleUrls: ['./photo-userdetailboot.component.css']
})
export class PhotoUserdetailbootComponent implements OnInit {
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
      this.alertify.success('You have liked: ' + this.user.knownAs);
    }), error => {
      this.alertify.error(error);
    }
  }
}
