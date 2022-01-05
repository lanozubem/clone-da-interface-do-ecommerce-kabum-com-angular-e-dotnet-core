import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() openSidenav = new EventEmitter<boolean>();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  sidenavOpened(){
    this.openSidenav.emit(true);
  }
}
