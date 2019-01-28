import { Injectable } from '@angular/core';
import { Photo } from '../_models/photo';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { PostService } from '../_services/post.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class PhotoListResolver implements Resolve<Photo[]> {
  constructor(private postService: PostService,
    private router: Router, private alertify: AlertifyService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Photo[]> {
    return this.postService.getPosts().pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/home']);
        return of(null);
      })
    )
  }
}
