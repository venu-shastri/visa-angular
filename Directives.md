### Directives

___

- Dom Enhancer

- Directives can take a DOM element and give it additional capabilities that
  don’t exist naturally

- Categories of directives

  - attribute directives
    - Modify the appearance or behavior of the element
  - structural directives
    - Modify the DOM tree based on some conditions
    - Adding or removing DOM elements to or from the page.

- Default Directives in Angular

  | Directive                                                    |
  | ------------------------------------------------------------ |
  | NgClass —Conditionally apply a class to an element           |
  | NgStyle —Conditionally apply a set of styles to an element   |
  | NgIf —Conditionally insert or remove an element from the DOM |
  | NgFor —Iterate over a collection of items                    |
  | NgSwitch —Conditionally display an item from a set of options |

  

  #### Custom Attribute Directive

  ---

  - **ng generate directive directives/directiveName**

    - ex: ng generate directive utility/hover --m utility

  - The Angular team recommends using directives as attributes, prefixed with a namespace

    - ex: ngModel - ng is the namespace name
  
  - ```typescript
    import { Directive } from '@angular/core';
    
    @Directive({
      selector: '[appHover]' // CSS - Attribute Selector
    })
    export class HoverDirective {
    
      constructor() { }
    
    }
  //using Directive
    <p appHover></p> // dom element p can be enhanced using appHover Directive
				 // P element knows as HostElement for appHover Directive
    ```
    
    

  ```html
<div class="card card-block" appHover>...</div> // div is the HostElement
  ```

  - Let Element associated with the directive - using constructor injection 
  
    - > The `ElementRef` gives the directive *direct access* to the DOM element upon which it’s attached.
      >
      > allows directive to access HostElement
  
  ```typescript
  import { Directive, ElementRef } from '@angular/core';
  
  @Directive({
    selector: '[appHover]'
  })
  export class HoverDirective {
  
  constructor(private element:ElementRef) { }
  
}
  

  ```
  
  - Let perform some action on Dom element 
  
  
  
  ```typescript
  element.nativeElement.style.backgroundColor = "red";
  
  or
  import { Directive, ElementRef, Renderer2 } from '@angular/core';
  
  @Directive({
    selector: '[appHover]'
  })
  export class HoverDirective {
  
    constructor(private element:ElementRef,private renderer:Renderer2) {
  							/* p */     /*style property and value*/
      this.renderer.setStyle(this.element,'color','red');
     }

  }
<p appHover></p>
  
What is Renderer2?
  How to access dom api in browser ?
    document.getElementById()
      documnet.querySelector()
  
  How to access dom content and generate dom content in angular components or directives
browser document object  equivalent api called Renderer2
  Renderer2 :- platform(broser/server) independent way of setting properties of an element
			 angular components can be either bootstrapped in browser and server as well
  ```
  
  
  
  #### HostListener

  ---

  > - Allows to subscribe host element  events
>
  > - This is a *function* decorator that accepts an *event name* as an argument. When that event gets fired on the *host* element it calls the associated function.

  

  ```
// component / Directive .ts
  //in this example onHover() function subscribes paragram mouseover event 
  @HostListener('mouseover') onHover() {
    window.alert("hover");
  }
  
  <p appHover></p>
  
  <button (click)="onSearch()"/>
  
  
  class SearchComponent{
  @HostListener('click') 
  onSearch(){
  }
  }
  }
  ```
  
  
  
  #### HostBinding
  
  ---
  
  - This directive can *change* the properties of the host element, such as the list of classes that are set on the host element as well as a number of other properties.
  
  
  
  

```typescript
import {Directive, ElementRef, Renderer, HostListener, HostBinding} from ‘@angular/core’;

@Directive({
selector: ‘[appChbgcolor]’
})

export class ChangeBgColorDirective {
constructor(private ele: ElementRef, private renderer: Renderer2){

}
 
    // Direct acess  to host element property 
    // example - border property of hostelement accessed 
@HostBinding(‘style.border’) border: string;
    
@HostListener(‘mouseover’)
onMouseOver() {
    	this.changeBackgroundColor(‘red’);
		this.border = ‘5px solid green’;
}
    
@HostListener(‘click’)
 onClick() {
    window.alert(‘Element clicked!’);
 }
 
    //bind eventhandler with hostelement event
@HostListener(‘mouseleave’) onMouseLeave() {
    this.changeBackgroundColor(‘green’);
	this.border = ‘5px solid yellow’;
}
    
changeBackgroundColor(color: string){
		this.renderer.setStyle(this.ele.nativeElement, ‘color’, color);
	    this.border = ‘5px solid yellow’;
}
}

<div appChbgcolor></div> // div is the hostelement (mouseleave,mouseover,click) events handled in directive
```

