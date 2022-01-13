import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Models/user';
import { LoginService } from '../Services/login.service';
import { SessionStorageService } from '../Services/session-storage.service';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit {

  userLogged!: User;
  isAuthenticated = false;

  /* Validações dos formulários*/
  dataIsvalid = true;
  emailIsRegistered = false;

  formPassword = {
    "oldPassword": '',
    "newPassword": '',
    "reNewPassword": ''
  }

  thePasswordAreCorrect = true;
  thePasswordsAreCorrect = true;

  constructor(
    private sessionStorage: SessionStorageService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.userLogged = JSON.parse(this.sessionStorage.get('userLogged'));
    this.sessionStorage.get('isAuth') == "true" ? this.isAuthenticated = true : this.isAuthenticated = false;
  }

  openModal(open: boolean) {
    let background = document.getElementById("background")!.style;
    let card = document.getElementById("card")!.style;

    if (open) {
      background!.display = "inherit";
      card!.display = "inherit";
    } else {
      background!.display = "none";
      card!.display = "none";
    }
  }

  /* OBS:
        Talvez essa não seja a melhor maneira de lidar com os dados do usuário;
        Atualizações futuras poderão ser adotadas.  
  */
  updateProfile(form: NgForm) {

    if (window.confirm("Confirmar alterações no perfil?")) {
      if (form.value.password == undefined) {
          // Atualizará os dados pessoais
        this.userLogged.name = form.value.name;
        this.userLogged.phone = form.value.phone;
        this.userLogged.imageUrl = form.value.imageUrl;
        this.loginService.updateUser(this.userLogged).subscribe(
          isUpdated => {
            // remove da memória o usuario com os dados
            // antigos e insere o usuario com os dados atualizados
            this.sessionStorage.clear();
            this.sessionStorage.setObject("userLogged", this.userLogged);
            this.sessionStorage.set("isAuth", "true");
            alert("Perfil atualizado com sucesso!");
          },
          () => {
            alert("Erro ao atualizar as informações do perfil!");
          }
        );
      } else {
        // Atualizará as informações do Password
        if (form.value.password != this.userLogged.password) {
          this.thePasswordAreCorrect = false;
          /* alert(`Senha incorreta!\nSenhaInputada: ${form.value.password}\nSenhaOriginal: ${this.userLogged.password}`) */
        } else {
          this.thePasswordAreCorrect = true;
          /* alert(`Senha correta!\nSenhaInputada: ${form.value.password}\nSenhaOriginal: ${this.userLogged.password}`) */

          if (form.value.newPassword == form.value.reNewPassword) {
            this.thePasswordsAreCorrect = true;
            /* Sei que há melhor maneira para utilizar esse trecho de código seria através 
               de um método tendo em vista que já é a segunda vez que o utilizo.
               Fix em futuras atualizações;
            */

            this.userLogged.password = form.value.newPassword; // Aqui atualizamos o objeto com a nova senha.
             
             this.loginService.updateUser(this.userLogged).subscribe(
               isUpdated => {
                 // remove da memória o usuario com os dados
                 // antigos e insere o usuario com os dados atualizados
                 this.sessionStorage.clear();
                 this.sessionStorage.setObject("userLogged", this.userLogged);
                 this.sessionStorage.set("isAuth", "true");
                 alert("Senha atualizada com sucesso!");
                 this.openModal(false);
                 form.reset();
               },
               () => {
                 alert("Erro ao atualizar Senha!");
               }
             );
          } else {
            this.thePasswordsAreCorrect = false;
          }
        }
      }
    } else {
      alert("Operação cancelada! Nenhum dado atualizado!")
    }
  }
}
