import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ 
     selector: '[cp9]' 
})
export class CP9Directive {
   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }
   @HostListener('click') 
   performTask() {
	   const parent = this.renderer.parentNode(this.elRef.nativeElement);
	   this.renderer.setStyle(parent, 'color', 'red');
   }
}