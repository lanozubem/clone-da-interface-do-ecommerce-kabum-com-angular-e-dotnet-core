import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { SessionStorageService } from '../Services/session-storage.service';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit {

  userLogged!: User;
  isAuthenticated = false;

  constructor(
    private sessionStorage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.userLogged = JSON.parse(this.sessionStorage.get('userLogged'));
    this.sessionStorage.get('isAuth') == "true" ? this.isAuthenticated = true : this.isAuthenticated = false;
  }

  openModal(){
    document.getElementById("background")!.style.display = "inherit";
    document.getElementById("card")!.style.display = "inherit";
  }

  closeModal(){
    document.getElementById("background")!.style.display = "none";
    document.getElementById("card")!.style.display = "none";
  }
}
