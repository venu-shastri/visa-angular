import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ 
     selector: '[cp2]' 
})
export class CP2Directive {
   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }
   @HostListener('click') 
   performTask() {
	 const div = this.renderer.createElement('div');
     const text = this.renderer.createText('Hello World!');
     this.renderer.appendChild(div, text);
	 
	 const parent = this.elRef.nativeElement.parentNode;
	 const refChild = this.elRef.nativeElement;
     this.renderer.insertBefore(parent, div, refChild);
   }
}