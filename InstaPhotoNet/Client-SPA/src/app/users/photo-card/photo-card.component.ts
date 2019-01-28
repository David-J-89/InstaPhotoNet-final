import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Photo } from 'src/app/_models/photo';

@Component({
  selector: 'app-phot-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {
  @Input() user: User;
  //@Input() photo: Photo;

  constructor() { }

  ngOnInit() {
  }

}
