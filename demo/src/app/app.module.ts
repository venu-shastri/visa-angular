// How to define Module Content like....components
//Define Metadata
//use built -in angular decorator called @NgModule

import {NgModule} from '@angular/core'
//When Agular-app Bootstraped in Browser
import {BrowserModule} from '@angular/platform-browser'
import {LayoutModule} from './layout/layout.module'
import {AccountsModule} from './accounts/accounts.module'

import {AppComponent} from './app.component'
import { ConsoleLoggerService } from './services/consoleLogger.service'
import { ILogger } from './services/iLogger.service'
import {ApiLoggerService} from './services/apiLogger.service';
import {SearchModule} from './search/search.module'

@NgModule({
  declarations:[AppComponent], //Declare Components.....
  bootstrap:[AppComponent], // BootStrap Components
  imports:[BrowserModule,LayoutModule,AccountsModule,SearchModule], // List Module Dependency
  //token : ConsoleLoggerService
  //value: instance of ConsoleLoggerService
  providers:[
    {provide:'apilogger',useClass:ApiLoggerService},
    {provide:'consolelogger',useClass:ConsoleLoggerService},
    {provide:'serviceBaseUrl',useValue:"http://www.visa.com/sg/users/api"}
  ]



})
export class AppModule{

}
