import { Directive, ElementRef, Renderer2} from '@angular/core';
//elementref referencia de qualquer elemento o DOM

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2) {
    // console.log(this.element);
    // _element.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(this._element.nativeElement, 'background-color', 'yellow')
    //forma segura ^
  }
}
