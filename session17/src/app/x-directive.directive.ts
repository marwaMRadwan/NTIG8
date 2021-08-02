import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appXDirective]'
})
export class XDirectiveDirective {
  _flag:boolean =false
@Input() set appXDirective(c:boolean){
  this._flag=c
this._editScreen()
}

  constructor(private _viewContainer: ViewContainerRef, private templateRef:TemplateRef<any>) { }

  _editScreen(){
    if(this._flag){
      this._viewContainer.createEmbeddedView(this.templateRef)
    }
    else{
      this._viewContainer.clear()

    }
  }
}
