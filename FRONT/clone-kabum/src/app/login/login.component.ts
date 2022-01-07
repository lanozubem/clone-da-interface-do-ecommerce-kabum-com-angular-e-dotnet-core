import { Component, OnInit } from '@angular/core';
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

  user = {} as User;
  userAuthenticated = false;
  dataIsvalid = true;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.userAuthenticated) {
      this.router.navigate(['/'])
    }
  }

  submitLogin(form: NgForm) {

    this.loginService.login(form.value)
      .subscribe(
        token => {
          if (token) {
            debugger;
            localStorage.setItem('user_logged', JSON.stringify(token));
            this.userAuthenticated = true;
            this.dataIsvalid = true;
            console.log(form.value)
            debugger;
            this.router.navigate(['minha-conta'])
          } else {
            alert("Usuário inválido")
          }
        },
        error => {
          this.dataIsvalid = false;
        })
  }

  cadastrar(form: NgForm) {
    console.log(form);
  }

}
