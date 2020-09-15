// How to define Module Content like....components
//Define Metadata
//use built -in angular decorator called @NgModule

import {NgModule} from '@angular/core'
//When Agular-app Bootstraped in Browser
import {BrowserModule} from '@angular/platform-browser'
import {LayoutModule} from './layout/layout.module'

import {AppComponent} from './app.component'

@NgModule({
  declarations:[AppComponent], //Declare Components.....
  bootstrap:[AppComponent], // BootStrap Components
  imports:[BrowserModule,LayoutModule] // List Module Dependency

})
export class AppModule{

}
