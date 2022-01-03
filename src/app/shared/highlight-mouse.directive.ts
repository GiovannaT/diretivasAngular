import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';
//hostlistener escuta o elemento hospedeiro
@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer2
    ) {}
  
    @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
    
    @HostListener('mouseenter') onMouseOver(){
    //  this._renderer.setStyle(
    //  this._elementRef.nativeElement,
    //   'background-color', 
    //   'yellow'
    //   )
      this.backgroundColor = 'yellow';
    }
    @HostListener('mouseleave') onMouseLeave(){
    //   this._renderer.setStyle(
    //     this._elementRef.nativeElement,
    //     'background-color', 
    //     'white'
    //)
    this.backgroundColor = 'white';
    }
    
//host binding = associação de um atributo da diretiva a um elemento html

//TYPE
    // @HostBinding('style.backgroundColor') get setColor(){
    //   return this.backgroundColor;
    // }
    // private backgroundColor: string;
}
