//How to assoicate presentation aka template
//Define Metadata for Component
// Use Decorators - like Custom Attribute in C#, Annotation in Java
//Decorators Suppport By Compilers
//Grammer  - @DecoratorName({Configuration Object})
//            Target

//Import Built-in Angualr Decorator from angular Core Module
import {Component} from '@angular/core'

//Apply Decorator to define metadata
@Component(
  {
    templateUrl:'./app.component.html',
    selector:'app-comp'//css selector

  })
export class AppComponent{

}
