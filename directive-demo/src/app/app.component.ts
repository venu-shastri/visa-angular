import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   template: `
      <h2>1. Examples using Component  </h2>
	   <app-append> </app-append>
   	   <app-listen> </app-listen>
	  <h2>2. Examples using Directive  </h2>
       <app-cp></app-cp>
   `
})
export class AppComponent { 
}
    