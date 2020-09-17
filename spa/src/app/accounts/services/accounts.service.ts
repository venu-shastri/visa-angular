
import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountsService{

  httpClient:HttpClient;
  constructor(httpClient:HttpClient){

    this.httpClient=httpClient;
  }
  validate(user){

    return this.httpClient.post("http://localhost:3200/accounts/validate",user);

  }

}
