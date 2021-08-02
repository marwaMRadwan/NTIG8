import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit{
  @Input() appMyDirective:any
  constructor(private el:ElementRef) {
    
   }
   ngOnInit(){
    this.el.nativeElement.classList.add(this.appMyDirective)
   }

}
