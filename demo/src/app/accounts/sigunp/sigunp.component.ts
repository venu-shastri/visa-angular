import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup-comp',
  templateUrl: './sigunp.component.html',
  styleUrls: ['./sigunp.component.css']
})
export class SigunpComponent  {

  userName:string;
  password:string;
  email:string;
  errorMessage:string;
  constructor() {

    this.clear();
   }

  signup(){

    console.log(`userName ${this.userName}  password ${this.password}  email ${this.email}`);
  }
  clear(){

    this.userName="";
    this.password="";
    this.email="";
    this.errorMessage="";
  }


}
