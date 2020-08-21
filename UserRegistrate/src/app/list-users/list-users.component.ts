import { Component, OnInit, Input } from '@angular/core';
import {UserData} from './../Models/User-data.Models';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  InfoUsers: UserData [];
  constructor() { 
    this.InfoUsers=[];
  }

  ngOnInit(): void {
  }

  save(Id:string,Name:string,LastName:string,Age:string,Url:string){
    this.InfoUsers.push(new UserData( Id,Name,LastName,Age,Url));
    console.log(this.InfoUsers);
    return false;
  }
}
