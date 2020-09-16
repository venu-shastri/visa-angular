

## Angular Basics

#### SPA Challenges

- SPA - Composite UI (Outlook , VSCode, GMAIL)

  - Window ->Set Of Regions 
  - Each region Host Components
  - Component - > Reusable UI Module 
    - Content
    - Presentation
    - Logic
  - Inject Component -> Region Using Component Loader / Injectors

- SPA Challenges (WEB)

  - Component Loading.....

  - Component Testability - TDD

    - Separation OF Concerns (MVC, MVVM ,MVP)  

  - DOM Manipulation

  - Routing  - Browser History Updates

  - Ajax Support (Promises | Reactive Based(Observable))

  - Component Communication

  - Code / Functionality Separation (Modularity)

    - Loosly Coupled ? -> IOC (Dependency Injection ) -> DI Contatiner Support ?

  - State Mgmt UI - UniDirectional Data Flow Architecture 

  - Clean & Maintainable JS Code

  - Object oriented Programming support 

  - Aspect Oriented Programming Support 

    

    ### Angular Basics

    ------

    Framework

    - Set Of  JS - Libraries (angularCore, RxJs, Zone .....)

      ------

    #### Building Blocks

    - TypeScript
    - Aspect Oriented Programming
    - Modules
    - Components
    - Templates
    - Directives
    - Pipes
    - Services 
      - Built -in
      - Custom
    - Dependency Injection Container
    - Angular-cli - commands

    

    #### TypeScript

    ------

    - Object Oriented Programming - class & Members
    - Decorators - enable AOP (metadata Driven programming Model)
    - TypeScript Modularibty - ES (import/export)
    - Arrow Functions

    #### Node

    ------

    - Process (Program Under Execution)
    - Host  V8 Chrome Js Engine
    - "Run JS Code Everywhere- Standalone"
    - Ideal For Network Programming (Asynchronous Nature)
    - Single Threaded Event Loop Based Programming Model
    - **Development Web Server** - Built and Run using Node Js 
      - How to run NPM Scripts
      - Basics of Package.json
      - Node Module Loader
      - How to download and install  Node Packages - npm (Node Package Manager)

    ​	

    #### VSCode

    - IDE 
    - Cross Platform IDE From Microsoft

    

    #### Development Environment

    - Many Options
    - WebServer  (express js ....)
    - Bundler (webpack)
    - Static Code Analysis Tools (lint)
    - TypeScript Compiler (tsc)
    - Hot Reloader 
    - WebSocket (push / Poll)
    - test environment
    - Test Runner (Karma)
    - E2E Selinium 
    - Production /Development Env Settings
    - task Managers (tasks chaining and execution )
    - use angular-cli (command Line interface)
      - Node application 
      - setup Angular Development environment
      - Angular project Scaffolder
      - Angular Project Artifacts Generator
      - RAD 
      - How to install 
        - https://cli.angular.io/
        - npm install -g @angular/cli
      - Angular - cli Commands
        - Angular Project Generation 
          - ng new <AppName>
          - ex: ng new demo 
    - module generation
          - ng g module <moduleName>
    - component generation
          - ng g component <moduleFolderName>/<componentName> --m <moduleName> --selector <selectorName>

    

    #### Angular Project Structure
    
    ------
    
    - package .json 
      - node app configuration file
    - angular.json
      - angular  app configuration file 
    - src folder
      - Code Base (modules,components,services, pipes, directives)
- index.html
      - DOM Tree 
- main.ts
      - JS Entrypoint 

    

    ### How to Start Angular Project
  
  ------
  
    - Go Terminal or Node Js Command Prompt
- Navigate to Project Folder 
    - Execute Command "npm start"
  - Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ ** : Compiled successfully.
      - ![image-20200914090944942](D:\knowledge\Angular_Knowledge\Start_output)

    

    #### Thinking in Angular
  
  ------
  
    > Think UI Functionality - as-a - Set of Components (Number Of Components)
    >
    > Decompose UI Functionality in to number of SRP based components
    >
    > What is Component ?
    >
    > **Basic Unit Of Presentation in Angular**
    >
    > Encapsulation of Logic  - Controller
    >
    > Associated with Presentation - View  (Define Metadata For Component)
    >
    > ​	
    >
    > Uses Data (Model) - Model
    >
    > Component can Be Styled
    >
    > Component Depends On Services
    >
    > Component Can  Host another Component
    >
    > Component Do Communicate 
    >
    > Component Can be tested independently
    >
    > Component Can be developed Using TDD
    >
    > Component Can Be Classified  (Presentational Components or Container Components)
    >
    > Component Can Be Bootstrapped
    >
    > Component has Life-Cycle
    >
    > Component -in-Angular
    >
    > - component - files ends with  following extensions
    >   - app.component.ts - Contains Logic
    >   - app.component.html - Contains - Presentation /View - template (like razor templates)
    >     - Content of this file being compiled 
    >     - .html used for convention but content will be parsed by angular template compiler (like razor , jade ,)
    >   - component.css  - Contains Styles 
    >   - component.spec.ts - Contains - unit Test code 
    > - Use **@Component Decorator** to Define Metadata for Angular Components
    >
    > ```
    > //How to assoicate presentation aka template
    > //Define Metadata for Component
    > // Use Decorators - like Custom Attribute in C#, Annotation in Java
    > //Decorators Suppport By Compilers
    > //Grammer  - @DecoratorName({Configuration Object})
    > //            Target
    > 
    > //Import Built-in Angualr Decorator from angular Core Module
    > import {Component} from '@angular/core'
    > 
    > //Apply Decorator to define metadata
    > @Component({templateUrl:'./app.component.html'})
    > class AppComponent{
    > 
    > }
    > 
    > ```
>
    > ​	
>
    > ​	

    #### How to refer or use Component


​    

------

> In Angular reusability enabled in terms of Angular Modules

Angular Project - Architecture View

- Decompose Angular soultion - one or More Modules

- Each Module can have

  - Components
  - Directives
  - Services
  - Pipes

- Analogy

  - Usually Each Application - Decomposed based on Separation of Functionality
    - Ex:- Bug Management Tool - SOF
      - Bug Mgmt. (CRUD)
      - Developer related Functionality
      - Search Specific
      - Admin Specific
    - E-Commerce
      - Customers
      - products
      - Accounts
      - Shipping
      - Order Processing

- How to Create Module in Angular

  - app.module.ts - module file 
  - Create One Folder for each module
  - Modules are in hierarchy
    - app
      - accounts
      - customers
      - orders
      - products

  ```
  // How to define Module Content like....components
  //Define Metadata
  //use built -in angular decorator called @NgModule
  
  import {NgModule} from '@angular/core'
  
  import {AppComponent} from './app.component'
  
  @NgModule({
    declarations:[AppComponent] //Declare Components.....
  })
  export class AppModule{
  
  }
  ```

  

### Bootstrap Angular Application

> An Angular project can have multiple modules...but one of the module will be considered as a root module for application bootstrap
>
> How to define Root Module
>
> update in main.ts file
>
> 

```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Bootstrap Code 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```



- Bootstrap or Root Module - imports - BrowserModule (Built-in Angular Module)

- ```
  // How to define Module Content like....components
  //Define Metadata
  //use built -in angular decorator called @NgModule
  
  import {NgModule} from '@angular/core'
  //When Agular-app Bootstraped in Browser
  import {BrowserModule} from '@angular/platform-browser'
  
  import {AppComponent} from './app.component'
  
  @NgModule({
    declarations:[AppComponent], //Declare Components.....
    bootstrap:[AppComponent], // BootStrap Components.......
    imports:[BrowserModule] // List Module Dependency 
  
  })
  export class AppModule{
  
  }
  ```

- How to set Selector for component

- ```
  //Apply Decorator to define metadata
  @Component(
    {
      templateUrl:'./app.component.html',
      selector:'app-comp'//css selector
  
    })
  export class AppComponent{
  
  }
  
  ```

  render Component

  ```
  <app-comp></app-comp>
  ```

  

#### Module Dependency

------

- Give Module can depend on any number of modules

- imports and exports

- exports - public Api of Module

- ex:

  

```
a.module.ts (Layout Module)

@NgModule({
declarations:[X,Y,Z], // HeaderComponent,FooterComponent,ContentComponent
exports:[X] //HeaderComponent
})
//LayoutModule
export class AModule{

}

//public Api of AModule = X Component

//AppModule
b.module.ts // depends on a.module

@NgModule({
declarations:[P,Q,R], //p->AppComponent
imports[AModule],//LayoutModule
bootstrap:[P,Q] //AppComponent , HeaderComponent
})
export class BModule{

}

//Number of Components Visible in BModule = [P,Q,R,X]

Consider BModule as a RootModule

//Main.ts
//Bootstrap  BModule as a primary Module
platformBrowserDynamic().bootstrapModule(BModule)
  .catch(err => console.error(err));
  
//index.html
<P></P> //AppComponent
<Q></Q> //HeaderComponent


```



#### Component Children

- ViewChild / ViewChildren

  - A component hosted/ rendered in host component template (view)

  - ```
    Component - A , Component - B
    
    //a.component.ts
    @Component({
    selector:'a-comp',
    templateUrl: 'a.component.html'
    })
    export class A{
    
    }
    
    b.component.ts
    
    @Component({
    selector:'b-comp',
    templateUrl: 'b.component.html'
    })
    export class B{
    
    }
    
    //b.component.html - View Of Component - B
    <div>
    	<a-comp></a-comp> <!-- View Child -->
    </div>
    
    Component - A  is-a ViewChild of Component - B
    Component - B is-a Host of Component - A 
    ```

    

- ContentChild / ContentChildren

  - Content defined in the content model of component

  - Content Projection  - Transclusion

  - ```
    a.component.ts
    a.component.html
    	<ng-content><ng-content> // Content Placeholder 
    
    b.component.ts
    
    b.component.html
    <a-comp>
    	<p>Content Model for Component - A </P>
    </a-comp>
    
    <p> element is - a ContentChild of Component - A
    
    Component-A instance content model is <p> element
    
    By default angular template parser ignore ContentChild of Component
    
    ```

    #### How to Render Content-Children of Component ?

    ---

    > use content presenter - "Directives" 
    >
    > **Directives** :- Building block of angular , usually referred as **DOM Enhancers** (add, change, event handling )
    >
    > Directives are restricted in template scope 
    >
    > Built-in Directives / Custom Directives
    >
    > "ng-content" is a built in  directive  used for content projection 
    >
    > 

    

    ### Multi Content Projection

    ---

    ##### 

    ```
    import { Component } from "@angular/core";
    
    @Component({
      selector:'para-comp',
      templateUrl:'./paragraph.component.html'
    })
    export class ParagraphComponent{
    
    }
    
    //paragraph.content.html
    
      <ng-content select="p"></ng-content>
      <ng-content select="h1"></ng-content>
    
    
    
    //app.component.html
    
     <para-comp>
       <h1>Angular Basics</h1>
       <p>Introduction to angular </p>
     </para-comp>
    <footer-comp>
    
    
    ```

    

    #### Bindings - in- Angular

    ---

    - Data Exchange / Communication b/w Component Logic and their respective  template (View)

    - No support for Two- Way Binding

    - Property Binding

      - Template <-  Logic Communication
      - Grammer
        - [TargetProperty] ="SourceProperty"
      - Example
        - <input **[value]="userName"** />

    - Event Binding

      - Component Logic <- Template
      - Grammer 
        - ( eventName) ="FunctionName()"
      - Example
        - <button **(click)="onLogin()"** value="login" />

    - String Interpolation Binding

      - Grammer
        - {{expression}}
        - One-Way Binding

    - Template Reference Variable

      - Grammer
        - #ReferenceName
      - example 
        - <input #templateReferenceVariable />

    - Two-Way Binding

      - Property Binding + Event Binding

      - example 

        - ```
           <input #userNameTextBox type="text" (input)="onUserNameEdit(userNameTextBox.value)" [value]="userName" />
          
//angular support for Twoway Binding
          //Banana Box [()] Grammer using ngModel Directive
          //ngModel Directive -> subscribes textbox change event and update   component property and observes component property changes and updates dom element property
          
          <input [(ngModel)]="userName" />
          [] propertyBinding
          () eventBinding
          ngModel Directive
          userName - Component Property
          
          ```
          

- Inversion of Control Support in Angular

  - Dependency Injection 	

    - Loosely Coupled Solution b/w Objects / Functionalities
    - Abstraction 
      - Unit testing (Behavioral Testing )
    - Constructor Injection 

  - Angular Dependency Injection based on **Providers**

  - Providers

    - A provider is an instruction / helper to the injector on how to obtain a value for a dependency
    - A Provider is an Object - which allows developer to register service
    - Providers can be registered at module or component level or scope

    - Service 

      - Reusable entity

      - Singleton

      - Instance of Class

      - Constant Value

      - Function 

      - Factory Function

      - Class Type

      - How to enable Service availability for Dependency Injection

        - Register Provider for Service

        - Example

          - ConsoleLoggerService as Injectable object

            - ```
              @NgModule({
              providers:[ { /*Provider Object */ }]
              })
              ```

        - Provider Object Details

          - provide - value is considered as  token 

          - token values

            - string

            - className

            - 

              ```
              consoleLogger.service.ts
              export class ConsoleLoggerService{
              
                write(msg:string):void{
              
                  console.log(msg);
                }
              }
              
              //Enable ConsoleLoggerService as injectable object
              //Register Provider for Service
              @NgModule({
                //token : ConsoleLoggerService
                //value: instance of ConsoleLoggerService
                providers:[{provide:ConsoleLoggerService,useClass:ConsoleLoggerService}]
              })
              
              //Let Component request for Dependency via constructor
              export class LoginComponent{
                //Dependency Injection based on token
                //Type - ConsoleLoggerservice -> token
                // Injector.get(ConsoleLoggerService /*token name*/ )
                constructor(logger:ConsoleLoggerService){
                  this.clear();
                  this.logger=logger;
                }
              }
              
              ```

              

        ### @Inject and @Injectable

        ---

        > Built-in Decorators
        >
        > @Inject - mechanism for letting angular injector know that token value to be injected
        >
        > 

    ```
    @NgModule({
    providers:[{provide:'url' , useValue:'http://wwww.visa.com/sg/api'}]
    })
    
    login.component.ts
    export class LoginComponent{
    
    constructor(@Inject('url')serverAddress:string){
    
    }
    }
    ```

    ### @Injectable

    > lets angular know that class has dependency and class can use dependency injector to satisfy its dependencies
    >
    > **By Default Components/Directives are Injectable **
    >
    > Used Defined Services are not injectable by default
    >
    > example  : ConsoleLoggerService , AccountsService , 
    >
    > 

    

    ### Component Communication

    ---

    - Communication b/w Host Component and ViewChild Component using Input and Out Properties

      - HostComponent --------Input Properties------->ViewChild

      - ViewChild------Output Properties-------->HostComponent

      - Component supports Input and Output Properties

        - Use Property Binding  to bind value for input property
        - Use Event Binding to bind value for Output property

        ```
        //input property
        export class SearchresultComponent implements OnInit {
        
          //Input properties are decorated using @Input decorator 
          @Input()
          result:string; // value will be set by host component
        }
        
        //Property Binding
        <SearchresultComponent [result]="HostComponentPropoerty" />
        ```

        ```
        //output property
        export class SearchbarComponent implements OnInit {
        
          searchKey:string;
        
          //output property - event type
          @Output
          searchKeyChanged=new EventEmitter<string>();
        
        onSearch(){
        
            //Notify Host Component - publish changes 
            this.searchKeyChanged.emit(this.searchKey);
          }
        
        }
        
        //Event Binding
        
        <SearchbarComponent (searchKeyChanged)="HostComponentEventListener()" />
        
        
        ```

        - @ViewChild / @ViewChildren

          > Can be used to get the reference of the dom element rendered inside an Angular Component

          

        

        

        

        

        

        

    

    

    

    

    

    

    