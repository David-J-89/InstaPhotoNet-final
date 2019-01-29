import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { AuthService } from '../../_services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail02',
  templateUrl: './user-detail02.component.html',
  styleUrls: ['./user-detail02.component.css']
})
export class UserDetail02Component implements OnInit {
  user: User;  
  userImages: string[];
  

  constructor(private userService: UserService, private alertify: AlertifyService,
    private route: ActivatedRoute, private authService: AuthService) { }

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

  sendLike(id: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
      this.alertify.success('You have liked: ' + this.user.knownAs);
    }), error => {
      this.alertify.error(error);
    }
  }
}
