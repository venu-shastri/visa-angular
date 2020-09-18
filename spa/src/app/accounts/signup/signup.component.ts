import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  country: string[] = [
    'India',
    'Singapore',
    'Germany',
  ]
  constructor() { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      name:new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required,Validators.pattern('[^ @]*@[^ @]*')]),
      password: new FormControl('',[Validators.minLength(5),Validators.required]),
      country: new FormControl()
  });
  }

  onSignup(){
    if(this.signupForm.valid){
        //Talk to api
        this.signupForm.reset();
    }
  }

}
