import { UsersDataService } from './../services/users-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateExpression } from '../shared/Validators/name.validation';
import { validatePassword } from '../shared/Validators/password.validation';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../shared/regestration-form-styles/style.css','./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  SignUpForm: FormGroup;

  constructor(private fb:FormBuilder,private UsersDataService:UsersDataService) {
    this.SignUpForm=this.fb.group({
      firstName:[ "" , [Validators.required , Validators.minLength(3) ,validateExpression(/[0-9]/)]],
      lastName:[ "" , [Validators.minLength(3), validateExpression(/[0-9]/)]],
      email:[ "" ,[Validators.required ,Validators.minLength(5), Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],],
      password:[ "" ,[Validators.required ,Validators.minLength(6)]],
      confirmPassword:[ "" ,Validators.required],
      terms: [false, Validators.requiredTrue]
      
      
    }, {
      validator: validatePassword('password', 'confirmPassword')
    });
   }

  ngOnInit(): void {
  }
  get f() { return this.SignUpForm.controls; }
  onSubmit(){
    console.log(this.SignUpForm.value);
  }
  
  checkExist(): ({[key: string]:boolean}|null){
    for(let i=0 ; i<=this.UsersDataService.data.length ; i++) {
      if(this.SignUpForm.controls['email'].value == this.UsersDataService.data[i]?.email){
          
       this.SignUpForm.controls['email'].setErrors( {emailExists: true})
      
      }
    }
    return null
  }
  showLogin(){
    let x=document.querySelector(".login") as HTMLElement;
    x.style.display="unset"
  }
}
