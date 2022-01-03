import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
//TEMPLATE faz referencia ao container
//VCR faz referencia ao conteudo que quer renderiza = conteudo da view

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){
    if(!condition){
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();  
    }

  }
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}
