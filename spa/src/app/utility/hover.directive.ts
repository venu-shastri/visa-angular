import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  constructor(public element:ElementRef,public renderer:Renderer2) {


   }
ngOnInit(){
  this.renderer.setStyle(this.element,'color','red');
}


}
