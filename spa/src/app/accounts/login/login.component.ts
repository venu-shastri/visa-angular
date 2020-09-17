import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;
  errorMessage:string;
  router:Router;
  accountsService:AccountsService
  constructor(router:Router, accountsService:AccountsService) {

    this.router=router;
    this.accountsService=accountsService;
   }

  ngOnInit(): void {
  }

  login(){

this.accountsService.validate({userName:this.userName,password:this.password}).
subscribe(
  (dat1)=>{

    this.router.navigate(['/dashboard',this.userName]);
  } ,
  (err)=>{

    this.errorMessage="Invaild Credentials";
  },
  ()=>{

    console.log("Request Completed");
  });

  }

  reset(){

  }

}
