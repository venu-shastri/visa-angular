import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { SigunpComponent } from './sigunp/sigunp.component';




@NgModule({
  declarations: [LoginComponent, SigunpComponent],
  exports:[LoginComponent,SigunpComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AccountsModule { }
