import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ 
     selector: '[cp10]' 
})
export class CP10Directive {
   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }
   @HostListener('click') 
   performTask() {
       const comment = this.renderer.createComment('Testing createComment()');
       this.renderer.appendChild(this.elRef.nativeElement, comment);
   }
}