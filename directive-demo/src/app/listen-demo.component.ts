import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
   selector: 'app-listen',
   templateUrl: './listen-demo.component.html',
   styles: ['.abc {color: red; font-size: 20px}']
})
export class ListenDemoComponent implements AfterViewInit { 
   @ViewChild('xyz') 
   private xyz: ElementRef;	
   constructor(private renderer: Renderer2) {
   }
   toggleFlag = false;   
   ngAfterViewInit() {
	   this.renderer.listen(this.xyz.nativeElement, 'click', () => {
		   
		   this.toggleFlag = (this.toggleFlag === true)? false : true;
		   if(this.toggleFlag) {
			   this.renderer.setStyle(this.xyz.nativeElement, 'color', 'red');
		   } else {
			   this.renderer.removeStyle(this.xyz.nativeElement, 'color');
		   }
		   
	   });
   }
}
    