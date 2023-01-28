import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ["../shared/regestration-form-styles/style.css",'./log-in.component.css']
})
export class LogInComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(private fb:FormBuilder) { 
    this.LoginForm=this.fb.group({
      email:[ "" ,[Validators.required ,Validators.minLength(1), Validators.email , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:[ "" ,[Validators.required ,Validators.minLength(3)]]
      
    })
  }

  ngOnInit(): void {
  }
  get email() {
    return this.LoginForm.get("email");
  }
   get password() {
    return this.LoginForm.get("password");
  }

  onSubmit(){
    console.log(this.LoginForm);
  
  }
  showLogin(){
    let x=document.querySelector(".login") as HTMLElement;
    x.style.display="unset"
  }
}
