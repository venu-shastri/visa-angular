import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ 
     selector: '[cp5]' 
})
export class CP5Directive {
   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }
   @HostListener('mouseover') 
   onMouseOver() {
       this.renderer.setAttribute(this.elRef.nativeElement, 'value', 'Namaste!');
   }
   @HostListener('mouseleave') 
   onMouseLeave() {
       this.renderer.removeAttribute(this.elRef.nativeElement, 'value');
   }   
}