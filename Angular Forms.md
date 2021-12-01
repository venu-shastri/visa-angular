### Angular Forms

---

- Model Driven Forms
- Template Driven Forms
- Reactive Forms



**Model Driven Forms**

Represent the form as a *model* composed of instances of `FormGroups` and `FormControls`.

Each *form control* in the template is represented by an instance of `FormControl`

The instances of `FormControls` nest inside top-level `signupform: FormGroup`



```typescript
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  ...
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  .......
  constructor() { }

  ngOnInit(): void {
	  this.signupForm = new FormGroup({
      name:new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      country: new FormControl()
  });
  }

}

```

**Linking the Form Model to the Form Template**

Bind the `<form>` element to instance of `FormGroup` object using using the `formGroup` directive

```html
<form [formGroup]="signupForm"> ... </form>
```

Bind the form control in the template to instance of `FormControl` using  `formControlName` directive 

```html
<div class="form-group">
  <label>name</label>
  <input type="text"
         class="form-control"
         formControlName="name" />
</div>
```

**Validation**



```typescript
import {Validators} from '@angular/forms'
this.signupForm = new FormGroup({
      name:new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required,Validators.pattern('[^ @]*@[^ @]*')]),
      password: new FormControl('',[Validators.minLength(8),Validators.required]),
      country: new FormControl()
```



**FormControl State**

---

| state   | Description                                                  | Syntax                               |
| ------- | ------------------------------------------------------------ | ------------------------------------ |
| Dirty   | `dirty` is `true` if the user has *changed* the value of the control. | {{signupForm.controls.name.dirty}}   |
| valid   | `valid` is `true` of the field doesn’t have any validators or if *all* the validators are passing. | {{signupForm.controls.name.valid}}   |
| touched | `touched` is `true` of the field has been touched by the user, otherwise it’s false. | {{signupForm.controls.name.touched}} |

**Displaying Validation Messages**

---

```html
<div class="form-group">
  <label>Password</label>
  <input type="password"
         class="form-control"
         formControlName="password">
  <div *ngIf="password.errors && (password.dirty || password.touched)">
  <p *ngIf="password.errors.required">Password is required</p>
  <p *ngIf="password.errors.minlength">Password must be 8 characters long</p>
</div>
</div>
```



**Form Submitting and Reset**

---

```html
signup.template.html
<form novalidate (ngSubmit)='onSignup()'>

.......
   <button type="submit" value="Signup"></button>
</form>

```

```typescript
singnup.template.ts

  onSignup(){
    if(this.signupForm.valid){
        //Talk to api
        this.signupForm.reset();
    }
  }
```



### Template Driven Forms

---

similar to  *model-driven* approach. In this approach Angular creates the models, the `FormGroups` and `FormControls` using  built in directives 

**FormGroup**  instance Creation using `ngForm` directive

```html
<form #signupForm="ngForm"> ... </form>
```

**FormControl** instance creation using `ngModel` directive 

```html
<input name="email" type="email" ngModel>
```

**Validation and ErrorMessage**

```html
<input type="email" name="email" [(ngModel)]="model.email" required 
       pattern="[^ @]*@[^ @]*" #email="ngModel">
<div *ngIf="email.errors && (email.dirty || email.touched)">
  <p *ngIf="email.errors.required">Email is required</p>
  <p *ngIf="email.errors.minlength">Email must contain at least the @ character</p>
</div

```



### Reatcive Forms

---

>  `FormControls` and `FormGroups`  expose an observable called **valuesChanged**

```typescript
ngOnInit() {
  this.name = new FormControl();
  this.name.valueChanges
      .subscribe(value => {
       //use Value
      //API
      });
}
```
```
<div class="login-form">
  <form #signupForm="ngForm" (ngSubmit)="signup(signupForm.form)">
    <h1>Signup</h1>
    <div class="content">
      <div class="input-field">
        <input [(ngModel)]="email"
         #emailFormControl="ngModel" name="emailCtrl"  type="email" placeholder="Email"
          autocomplete="nope"
           required
            pattern="[^ @]*@[^ @]*">
      </div>
      <div *ngIf="emailFormControl.errors && (emailFormControl.dirty || emailFormControl.touched)">
        <p *ngIf="emailFormControl.errors.required">Email is required</p>
        <p *ngIf="emailFormControl.errors.pattern">Email must contain at least the @ character</p>
      </div>
      <div class="input-field">
        <input [(ngModel)]="password" #passwordFormControl="ngModel"
        name="passwordCtrl" type="password"
          placeholder="Password" autocomplete="new-password"
          required
           minlength="5">
      </div>
      <div *ngIf="passwordFormControl.errors && (passwordFormControl.dirty || passwordFormControl.touched)">
        <p *ngIf="passwordFormControl.errors.required">Password is required</p>
        <p *ngIf="passwordFormControl.errors.minlength">Password must contain at least 5 charcters</p>
      </div>
      <div class="input-field">
        <input [(ngModel)]="confirmPassword" #retypePasswordFormControl="ngModel" name="retypePasswordCtrl" type="password" placeholder="RetypePassword"  autocomplete="new-password" required minlength="5" >
      </div>
      <div *ngIf="retypePasswordFormControl.errors && (retypePasswordFormControl.dirty || retypePasswordFormControl.touched)">
        <p *ngIf="retypePasswordFormControl.errors.required">Password is required</p>
        <p *ngIf="retypePasswordFormControl.errors.minlength">Password must contain at least 5 charcters</p>
        <p *ngIf="passwordFormControl.value!=retypePasswordFormControl.value">
          Password Mismatch
        </p>
      </div>
     <output>{{emailFormControl.value}}</output>
    </div>
    <div class="action">
      <!-- <button>Sign Up</button> -->
      <input type="submit" value="Sign Up" formnovalidate/>
      <button (click)="clear(signupForm.form)">Reset</button>
    </div>
  </form>
</div>
```
