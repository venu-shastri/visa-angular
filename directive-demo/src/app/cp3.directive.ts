import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ 
     selector: '[cp3]' 
})
export class CP3Directive {
   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }
   div = this.renderer.createElement('div');
   text = this.renderer.createText('Namaste!!!!!');
   
   @HostListener('mouseover') 
   onMouseOver() {
	   this.renderer.appendChild(this.div, this.text);  
       this.renderer.appendChild(this.elRef.nativeElement, this.div);
   }
   @HostListener('mouseleave') 
   onMouseLeave() {
       this.renderer.removeChild(this.elRef.nativeElement, this.div);
   }   
}