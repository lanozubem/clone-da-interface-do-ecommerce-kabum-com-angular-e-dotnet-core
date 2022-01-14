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

  constructor(private sessionStorage: SessionStorageService) { /* this.sessionStorage.clear() */ }

}
