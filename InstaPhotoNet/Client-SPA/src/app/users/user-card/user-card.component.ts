import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Photo } from 'src/app/_models/photo';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  //@Input() photo: Photo;

  constructor() { }

  ngOnInit() {
  }

}
