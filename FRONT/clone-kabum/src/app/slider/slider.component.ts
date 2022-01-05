import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() produtos: Array<any> = [];
  isOvered: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.over();
    this.out()
  }

  // Este método move o Scroll-X pra direita e esquerda
  navegateTo(xb: any, xa: any) {
    document.getElementById("carrossel")?.scrollBy(xb, xa);
  }

  // verifica se o cursor esta sobre o card
  over() {
    /* this.isOvered = true; */
  }
  out() {
    /* this.isOvered = false; */
  }
}
