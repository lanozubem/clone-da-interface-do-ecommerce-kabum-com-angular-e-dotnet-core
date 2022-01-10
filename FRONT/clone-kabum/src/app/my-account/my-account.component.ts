import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  userLogged = {
    name: "Luano Zubém",
    email: "zubemluano@gmail.com",
    imageUrl: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
