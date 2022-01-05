import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Este método receberá do componente app-header um evento contendo o valor booleano true
  // que fará com que o sidenav sejá aberto 
  isToOpen(open: boolean){
    this.opened = open;
  }
}
