import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {

alertType: string = 'alert-danger';
loading: boolean = false;

properties: object = {
  danger: false
};

  constructor() { }

  ngOnInit() {
  }

  runProcess(){
    this.loading = (true);

    setTimeout( ()=> this.loading = false, 3000 )
  }

}
