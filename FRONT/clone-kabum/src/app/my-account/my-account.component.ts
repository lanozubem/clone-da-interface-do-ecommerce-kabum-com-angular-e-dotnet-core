import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  userLogged!: User;
  order = false;

  estaAutenticado = false;
  constructor(
    private LoginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.estaAutenticado = this.LoginService.userIsAuth;

    if (this.estaAutenticado != true) {
      this.router.navigate(['login'])
    }
    
    this.userLogged = this.LoginService.getUserLogged();
  }

}
