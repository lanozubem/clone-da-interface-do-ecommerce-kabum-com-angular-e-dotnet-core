import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  userLogged = {
    name: "UserLogged",
    email: "user@io.com",
    imageUrl: "https://e1.pngegg.com/pngimages/976/873/png-clipart-orb-os-x-icon-man-s-profile-icon-inside-white-circle.png"
  };

  order = false;

  constructor() { }

  ngOnInit(): void {
  }

}
