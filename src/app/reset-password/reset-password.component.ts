import { UsersDataService } from './../services/users-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../shared/regestration-form-styles/style.css','./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

 
  ResetPasswordForm: FormGroup;

  constructor( private fb:FormBuilder ,private UsersDataService:UsersDataService) {
    this.ResetPasswordForm=this.fb.group({
      email:[ "" ,[Validators.required ,Validators.minLength(1), Validators.email , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]      
    })
   }
   get email() {
    return this.ResetPasswordForm.get("email");
  }
   
   onSubmit(){
    console.log(this.ResetPasswordForm);
  
  }

  ngOnInit(): void {
  }
  

  checkExist(): ({[key: string]:boolean}|null){
    for(let i=0 ; i<=this.UsersDataService.data.length ; i++) {
      if(this.ResetPasswordForm.controls.email.value !== this.UsersDataService.data[i].email){
          
       this.ResetPasswordForm.controls.email.setErrors( {emailNotExists: true})
       console.log(this.ResetPasswordForm.controls.email);
      
      }
    }
    return null
  }
  showLogin(){
    let x=document.querySelector(".login") as HTMLElement;
    x.style.display="unset"
  }
}
