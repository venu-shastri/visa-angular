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

  - ```typescript
    import { Directive } from '@angular/core';
    
    @Directive({
      selector: '[appHover]'
    })
    export class HoverDirective {
    
      constructor() { }
    
    }
    
    ```

    

  ```html
  <div class="card card-block" appHover>...</div>
  ```

  - Let Element associated with the directive - using constructor injection 

  - > The `ElementRef` gives the directive *direct access* to the DOM element upon which it’s attached.

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
  
      this.renderer.setStyle(this.element,'color','red');
     }
  
  }
  
  
  Renderer2 :- platform independent way of setting properties of an element
  ```

  

  #### HostListener

  ---

  > - Allows to subscribe host element  events
  >
  > - This is a *function* decorator that accepts an *event name* as an argument. When that event gets fired on the *host* element it calls the associated function.

  

  ```
  @HostListener('mouseover') onHover() {
    window.alert("hover");
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
    
@HostListener(‘mouseleave’) onMouseLeave() {
    this.changeBackgroundColor(‘green’);
	this.border = ‘5px solid yellow’;
}
    
changeBackgroundColor(color: string){
		this.renderer.setStyle(this.ele.nativeElement, ‘color’, color);
	    this.border = ‘5px solid yellow’;
}
}


```

