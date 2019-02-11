import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryAnimation, NgxGalleryImage } from 'ngx-gallery';
import { AuthService } from '../../_services/auth.service';
import { Photo } from '../../_models/photo';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  
  user: User;
  //photos: string[];
  //galleryOptions: NgxGalleryOptions[];
 // galleryImages: NgxGalleryImage[];
  userImages: string[];
  //photo: Photo[];
  


//  loadUser() {
//    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
//      this.user = user;
//    }, error => {
//      this.alertify.error(error);
//    });
//  }
//}

  constructor(private userService: UserService, private alertify: AlertifyService,
    private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    

    this.userImages = this.getImages();
    console.log(this.userImages);
      //this.galleryOptions = [
      //  {
      //    width: '500px',
      //    height: '500px',
      //    imagePercent: 100,
      //    thumbnailsColumns: 4,
      //    imageAnimation: NgxGalleryAnimation.Slide,
      //    preview: false

      //  }
      //];
      //this.galleryImages = this.getImages();
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




  //getImages() {
  //  const imageUrls = [];
  //  for (let i = 0; i < this.user.photos.length; i++) {

  
  //    imageUrls.push({
  //      small: this.user.photos[i].url,
  //      medium: this.user.photos[i].url,
  //      big: this.user.photos[i].url,
  //      description: this.user.photos[i].description
  //    });
  //  }

  //  return imageUrls;
    
  //}



  sendLike(id: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
      this.alertify.message('You have liked: ' + this.user.knownAs);
    }), error => {
      this.alertify.message(error);
    }
  }


 

}
