import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../_models/photo';
//import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';
//import { Message } from '../_models/message';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.baseUrl + 'posts', httpOptions);
  }
}
