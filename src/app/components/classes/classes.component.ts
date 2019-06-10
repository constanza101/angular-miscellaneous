import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {

alertType: string = 'alert-danger';
properties: object = {
  danger: false
}
  constructor() { }

  ngOnInit() {
  }

}
