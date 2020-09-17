import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './accounts/login/login.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

const routes: Routes = [

  {path:'' , redirectTo:'home' , pathMatch:"full"},
  {path:'home', component:HomeComponent , children:[
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
  ]},
  {path:'dashboard' , component:MainDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
