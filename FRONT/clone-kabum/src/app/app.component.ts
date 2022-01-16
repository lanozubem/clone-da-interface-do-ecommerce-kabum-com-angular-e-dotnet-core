import { Component } from '@angular/core';
import { LoginService } from './Services/login.service';
import { SessionStorageService } from './Services/session-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'clone-kabum';

  // caso a aplicação quebre, descomente abaixo o comando no contructor.
  constructor(private sessionStorage: SessionStorageService) { /* this.sessionStorage.clear() */ }

}
