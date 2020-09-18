import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
   selector: 'app-append',
   templateUrl: './append-demo.component.html'
})
export class AppendDemoComponent { 
   @ViewChild('abcd') 
   private abcd: ElementRef;	
   constructor(private renderer: Renderer2) {
   }
   onClick() {
	 const li = this.renderer.createElement('li');
     const text = this.renderer.createText('Click here to add li');
     this.renderer.appendChild(li, text);
     this.renderer.appendChild(this.abcd.nativeElement, li);
   }
}
    