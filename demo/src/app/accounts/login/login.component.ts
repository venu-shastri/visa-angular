import { Component, OnInit } from '@angular/core';

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

  constructor(){
    this.clear();
  }

  onUserNameEdit(value){
    console.log(value);
    this.userName=value;
  }
  onPasswordEdit(value){
    console.log(value);
    this.password=value;
  }

  login(){

if(this.userName=="admin" && this.password=="admin@123"){
  console.log("login Successfull");
  this.errorMessage="";
}
else{
  this.errorMessage="Invalid Credentials!!!!"
}

  }

  clear(){

    console.log("clear button clicked");
    this.userName="";
    this.password="";
    this.errorMessage="";


  }




}
