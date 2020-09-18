import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user-component/user.component';
import { UserService } from './services/user-service';

@NgModule({
      imports: [
            BrowserModule,
            ReactiveFormsModule
      ],
      declarations: [
            AppComponent,
            UserComponent
      ],
      providers: [
      ],
      bootstrap: [
            AppComponent
      ]
})
export class AppModule { }
