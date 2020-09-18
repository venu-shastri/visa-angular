import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ 
     selector: '[cp4]' 
})
export class CP4Directive {
   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }
   @HostListener('click') 
   performTask() {
     //const element = this.renderer.selectRootElement('div'); 	 	   
	 const element = this.renderer.selectRootElement('.myclass'); 
     const text = this.renderer.createText('Namaste!!!');
     this.renderer.appendChild(element, text);
   }
}