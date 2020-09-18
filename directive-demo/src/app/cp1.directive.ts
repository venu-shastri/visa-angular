import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ 
     selector: '[cp1]' 
})
export class CP1Directive {
   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }
   @HostListener('click') 
   performTask() {
	 const li = this.renderer.createElement('li');
     const text = this.renderer.createText('Click here to add li');
     this.renderer.appendChild(li, text);
     this.renderer.appendChild(this.elRef.nativeElement, li);
   }
}