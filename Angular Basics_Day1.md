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

