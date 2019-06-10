import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
  <p>
  This "p tag" is located in css.component (color: red) agrega un scope aplicado a este componente para que no se colisionen otroso atributos en otros componentes. p[_ngcontent-veu-c1]
  </p> `,
  styles: [` p{
    color: red;
  }`]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
