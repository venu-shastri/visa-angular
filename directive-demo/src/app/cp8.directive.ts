import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ 
     selector: '[cp8]' 
})
export class CP8Directive {
   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }
   toggleFlag = false;
   @HostListener('click') 
   performTask() {
	   this.toggleFlag = (this.toggleFlag === true)? false : true;
	   if(this.toggleFlag) {
		   this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
		   this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '20px');
	   } else {
		   this.renderer.removeStyle(this.elRef.nativeElement, 'color');
		   this.renderer.removeStyle(this.elRef.nativeElement, 'font-size');
	   }
   }
}