import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { UserData } from '../Models/User-data.Models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() UserInfo: UserData;
  @HostBinding('attr.class')cssClass='col-md-4' ;
  constructor() { }

  ngOnInit(): void {
  }

}
