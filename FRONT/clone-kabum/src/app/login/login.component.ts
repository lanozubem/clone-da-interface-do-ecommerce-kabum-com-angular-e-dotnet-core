import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User;
  userRegister = {} as User;

  re_password: any;
  dataIsvalid = true;
  emailIsRegistered = false;
  thePasswordsAreCorrect = true;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void { 
    this.user = new User();
    this.userRegister = new User();
  }

  /* LOGAR */
  submitLogin(form: NgForm) {
    this.loginService.login(form.value)
      .subscribe(
        token => {
          this.loginService.setUserLogged(Object.assign(token));
          this.loginService.userIsAuth = true;
          this.dataIsvalid = true;
          this.router.navigate(['minha-conta']);
        },
        error => {
          this.dataIsvalid = false;
          this.loginService.userIsAuth = true;
        })
  }

  /* REGISTRAR */
  submitRegister(form: NgForm) {
    this.userRegister = form.value;
    if (this.userRegister.password != this.re_password) {
      this.thePasswordsAreCorrect= false;
    } else {
      this.loginService.registerUser(this.userRegister)
        .subscribe(
          data => {
            alert("Usuário registrado com sucesso!");
            this.emailIsRegistered = true;
            this.thePasswordsAreCorrect = true;
            this.router.navigate(['minha-conta']);
          },
          error => {
            this.emailIsRegistered = true;
            this.thePasswordsAreCorrect = true;
          }
        )
    }
  }

}
