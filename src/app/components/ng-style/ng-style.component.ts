import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    
    <h4> Different ways to manage styles: </h4>
    <p style="font-size: 10px">
      style="font-size: 10px"
    </p>

    <p [ngStyle]="{'font-size': '15px'}">
      [ng-style] = font-size: 15px 
    </p>

    <p [ngStyle]="{'font-size': size + 'px'}">
      [ng-style] = font-size: size + 'px' 
    </p>

    <p [style.fontSize]="'25px'">
    [style.fontSize] = '25px' 
    </p>

    <p [style.fontSize.px]="tamano">
    [style.fontSize.px] = tamano
    </p>

    <button class="btn btn-primary m-1" (click)="tamano = tamano + 5">
     <i class="fa fa-plus" > </i>
    </button>
  
    <button class="btn btn-info m-1" (click)="tamano = tamano - 5">
    <i class="fa fa-minus" > </i>
   </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size:number = 20;
  tamano:number = 30;

  constructor() { }

  ngOnInit() {
  }

}
