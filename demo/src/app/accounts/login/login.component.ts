import { Component, Inject, OnInit } from '@angular/core';
import { ILogger } from 'src/app/services/iLogger.service';
import { AccountsService } from '../services/accounts.service';


@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//By Default @Injectable
export class LoginComponent{

  //data members
  userName:string
  password:string
  errorMessage:string
  logger:any
  accountsService:AccountsService;

  //Dependency Injection based on token
  //Type - ILogger -> token
  // Injector.get(ILogger /*token name*/ )
  constructor(@Inject("consolelogger")logger,
  accountsService:AccountsService ){
    this.logger=logger;
    this.accountsService=accountsService;
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

    if(this.accountsService.validateCredentials(this.userName,this.password)){
    this.logger.write("Valid Credentials");

    }
    else{
      this.logger.write("Invalid Credentials");
    }


  }

  clear(){

    this.logger.write("clear button clicked");
    this.userName="";
    this.password="";
    this.errorMessage="";


  }




}
