import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() openSidenav = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // Este método através do EventEmitter emitirá um evento contendo o valor booleano
  // true para o componente app-sidenav que conseguintemente abrirá a aba do sidenav 
  sidenavOpened(){
    this.openSidenav.emit(true);
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
