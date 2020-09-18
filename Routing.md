### Routing 

---

> The Router simply allows us to express all the potential **states** which application can be in, and provides mechanism for **navigating** from one state to another.
>
> **Router State**: A router state is an arrangement of application components that defines what is visible on the screen.
>
> **Router Configuration** : The router configuration defines all the potential **router states** of the application. router configuration is a tree , with every node representing a route





> **Main Features**

- URL-based navigation
- Flexible routing
- Child and auxiliary routes
- Navigation Guards
- Lazy loading and preloading
- Resolve

> **Setting up Routing**

- Define base path
- Import Router
- Configure routes
- Place template
- Activate routes

> **Defining the Base Path**
>
> ```
> index.html
> 
> <base href="/"> // for Development:localhost:4200
> <base href="/sg/">  // For Production environment www.visa.com/sg/
> 
> ng-Cli command
> 
> ng build --base-href /sg/
> 
> ```



> **Import Router**
>
> ```
> app.module.ts
> 
> import{ RouterModule} from'@angular/router';
> ...
> @NgModule({
> imports: [
> BrowserModule,
> RouterModule
> ],
> declarations: [
> ...
> ],
> bootstrap: [ AppComponent ]
> })
> export class AppModule { }
> ```



> **Configure Routes**
>
> ```
> import { Routes, RouterModule } from '@angular/router';
> import { Home } from './home.component';
> import { About } from './about.component';
> import { NotFound } from './notfound.component';
> const appRoutes: Routes = [
> { path: '', redirectTo: 'home', pathMatch: 'full' },
> { path: 'home', component: Home },
> { path: '**', component: NotFound }, //always last
> ];
> ```



> **Include providers and directives**

- RouterModule.forRoot(approutes)
  - Declares the router directives
  - Manages route configuration
  - Registers the router service
  - Used once for the application

> **Placing the Template**
>
> ```
> app.component.html
> 
> //Place Holder for Activated template from current root state
> <router-outlet></router-outlet> //Directive
> ```



> **Activate the Route**
>
> - Navigation
>
> - Using regular links 
>
>   - /home
>
> - Using routerLink directive
>
>   ```
>   <a [routerLink]="['/home']">Home</a>
>   ```
>
> - Programatically
>
>   - Use Router service from '@angular/router'
>
>   - ```
>     import { Router} from '@angular/router';
>     ...
>     @Component({...})
>     export classAppComponent {
>     ...
>     constructor(router: Router) { }
>     logOut(): void {
>     // Do some processing
>     this.router.navigate(['/home']);
>     }
>     }
>     ```



### Configuring Routes with Parameters

---



```
routes=[
{ path: 'users', component: UsersListComponent },
{ path: 'users/:id', component: UserDetailComponent },
{ path: 'users/:id/edit', component: UserEditComponent }
]
```

#### How to Pass Route Parameters

- Template

```
<a [routerLink]="['/users', user.id]">{{user.userName}}</a>
<a [routerLink]="['/users', user.id, 'edit']">Edit</a>
<a [routerLink]="['/users', 1234, 'edit']">Edit User</a>
<a routerLink="/users/1234/edit">Edit User</a>
```

- Code 

```
this.router.navigate(['/users',this.user.id]);
```

#### How to Read  Route Parameters

- Use **ActivatedRoute** Service

  - Reading Route Parameters: Snapshot

    ```typescript
    import{ ActivatedRoute } from'@angular/router';
    ...
    constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
    }
    ```

  - Reading Route Parameters: Observable

    ```typescript
    import{ ActivatedRoute } from'@angular/router';
    ...
    constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params =>{ console.log(params.get('id'));});
    }
    ```

    | Snapshot                         | Observable                     |
    | -------------------------------- | ------------------------------ |
    | To read the parameters only once | To watch for parameter changes |
    |                                  |                                |

### Providing Data with a Route

---

- User Route's Data Property

  ```typescript
  app.routing.ts
  
  routes=[
  {path: 'users',component: UserListComponent, data: { pageTitle: 'User List'}
  ];
  
  //userList.Component.ts
  
  this.pageTitle = this.route.snapshot.data['pageTitle'];
  
  ```



### Child Routes

---



```
{
path: 'projects,component: ProjectsComponent,
children: [
		   {path: 'add', component: ProjectAddComponent},
		   {path: 'update', component: ProjectEditComponent}
          ]
}
```



### Protecting Routes with Guards

---

> Usage of Routing Guards : Limit access to a route , Warn before leaving a route , Retrieve data before accessing a route

- **canActivate**
  - Guard navigation to a route
- **canActivateChild**
  - Guard navigation to a child route
- **canDeactivate**
  - Guard navigation away from a route
- **canLoad**
  - Prevent asynchronous routing
- **resolve**
  - Prefetch data before activating a route

> Building a Guard Service

```typescript
import{ Injectable } from'@angular/core';
import{ CanActivate} from'@angular/router';
@Injectable({
providedIn: 'root' // Auto provider registration
})
export class AuthGuard implements CanActivate{
canActivate(): boolean{
...
}
}
```

> Add Guard to  a Route

```
...
import { AuthGuard} from './auth-guard.service';
...
{
path: ':id',
component: userDetailComponent,canActivate: [ AuthGuard]
}
```



## Examples

```typescript
// user.canDeactivate.ts
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

Injectable()
export class UserCanDeactivate implements CanDeactivate {
canDeactivate() {
	return window.confirm('Do you want to continue?');
	}
}

// auth.canActivate.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

export class AuthCanActivate implements CanActivate {
constructor(private loginService: LoginService, private router: Router) 

canActivate() {
	if (!this.loginService.authorised) {
		this.router.navigate(['/home']);
		return false;
	}
	return true;
}


// app.routing.ts
import { Routes, RouterModule } from '@angular/router';
import { UserCanDeactivate } from './user.canDeactivate';
import {AuthCanActivate} from './auth.canActivate'
const usersRoutes: Routes = [
{ path: 'users', component: Users },
{ path:'users/:id',component:User,canDeactivate:[UserCanDeactivate],canActivate:[AuthCanActivate]
}
];
```

```

```

### Lazy loading

---

- Delay loading of Module until needed(route activation)

- Speed up initial start time

- Preparing for lazy Loading

  - Use a Feature Module
  
  - First Create Feature Module
  
    - ```
      ng generate module modules/general/customers --routing
      ```
  
      
  
  - Not Imported in app module
  
  

```
//app.module.ts
routes: [
{ path:customers , loadChildern: ()=>import('./modules/general/customers.module).then(m=>m.CustomersModule)}
]

```

