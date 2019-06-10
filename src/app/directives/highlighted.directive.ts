import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  @Input("appHighlighted") newColor:string;// declaro la variable newColor, con el @Input avisamos que la variable viene de "afuera".

  
  constructor( private _elementRef: ElementRef) { 
     console.log("directiva llamada");
     console.log( "newColor :"+this.newColor);


    // _elementRef.nativeElement.style.backgroundColor = 'yellow'; 
  }


  
  // listen when the mouse "enters" the element:
  @HostListener('mouseenter') mouseEntro(){
   //this._elementRef.nativeElement.style.backgroundColor = 'yellow'; 
   console.log( "hostlistener mouse enter "+this.newColor );


    // en lugar de lo anterior, llamaremos a la funcion declarada más abajo como privada: 
    // pasaremos el color como la variable newColor o color yellow.
    this.highlight( this.newColor );
    console.log( 'this.highlight( '+this.newColor+' )');
    
  }

  // listen when the mouse "leaves" the element: 
  @HostListener( 'mouseleave' ) mouseSalio(){
    // en lugar de lo anterior, llamaremos a la funcion declarada más abajo como privada: 
    // pasaremos el color como null:
    this.highlight( null )

  }



  // para hacer cambiar el color, creamos una propiedad
  // privada (una función privada a la que solo puede accederse en esta directiva)
  // se le pasará un parámetro que será el color que asignaremos al fondo.
  private highlight( color: string ){
    this._elementRef.nativeElement.style.backgroundColor = color ; 

    console.log("highlight color: "+ color);
     
  }


}
