import { Component, Inject, OnInit } from '@angular/core';
import { ILogger } from 'src/app/services/iLogger.service';


@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  //data members
  userName:string
  password:string
  errorMessage:string
  logger:any

  //Dependency Injection based on token
  //Type - ILogger -> token
  // Injector.get(ILogger /*token name*/ )
  constructor(@Inject("consolelogger")logger){
    this.logger=logger;
    this.clear();

  }

  onUserNameEdit(value){
    this.logger.write(value);
    this.userName=value;
  }
  onPasswordEdit(value){
    this.logger.write(value);
    this.password=value;
  }

  login(){

if(this.userName=="admin" && this.password=="admin@123"){
  this.logger.write("login Successfull");
  this.errorMessage="";
}
else{
  this.errorMessage="Invalid Credentials!!!!"
}

  }

  clear(){

    this.logger.write("clear button clicked");
    this.userName="";
    this.password="";
    this.errorMessage="";


  }




}
