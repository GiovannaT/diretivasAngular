import { Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor() { }
    
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
    
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
    }
    
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
    }
    
  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';
    //quando se utiliza o meta Input com o mesmo nome do SELECTOR, o angular
    //vai entender que é uma diretiva e é um input property

    ngOnInit(){
      //quando o componente for atualizado
      this.backgroundColor = this.defaultColor;
    }

}
