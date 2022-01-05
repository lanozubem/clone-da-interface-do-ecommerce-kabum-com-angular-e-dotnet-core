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

  isToOpen(open: boolean){
    this.opened = open;
  }
}
