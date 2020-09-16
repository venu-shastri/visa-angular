import { Inject, Injectable } from "@angular/core";

@Injectable()
export class AccountsService{

  apiServerAddress:string;
  logger:any;
  constructor(@Inject('serviceBaseUrl') apiServerAddress, @Inject("apilogger") logger){
    this.apiServerAddress=apiServerAddress;
    this.logger=logger;

  }

  validateCredentials(userName,password){

    //Invoke api
    this.logger.write(`Invoking Api.....${this.apiServerAddress}.`);
    if(userName=="admin" && password=="admin@123"){
      return true;

    }
   return false;


  }

  registerNewUser(userName,password,email){

  }


}
