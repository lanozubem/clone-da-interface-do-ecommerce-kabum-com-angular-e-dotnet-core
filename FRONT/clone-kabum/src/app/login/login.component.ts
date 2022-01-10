import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { AuthService } from '../Services/auth.service';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //login
  user = {} as User;

  //register
  userRegister = {} as User;
  re_password: any;

  dataIsvalid = true;

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  submitLogin(form: NgForm) {
    this.loginService.login(form.value)
      .subscribe(
        token => {
          this.dataIsvalid = true;
          this.authService.setToken(token);
          this.router.navigate(['minha-conta']);
        },
        error => {
          this.dataIsvalid = false;
          console.log(error);
        })
  }

  submitRegister(form: NgForm) {

    this.userRegister = form.value;
    console.log(this.userRegister);

    if (form.value.password != this.re_password) {
      alert("Os campos não coincidem.")
    } else {
      this.loginService.registerUser(this.userRegister)
        .subscribe(
          data => {
            console.log(data);
            alert("Usuário registrado com sucesso!");
            this.router.navigate(['minha-conta']);
          },
          error => {
            console.log(error);
          }
        )
    }
  }

}
