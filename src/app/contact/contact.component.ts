import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateExpression } from '../shared/Validators/name.validation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  specialOrderForm:FormGroup;


  
  constructor( private fb:FormBuilder) {
    this.specialOrderForm = this.fb.group({
    firstName:[ "" , [Validators.required , Validators.minLength(3) ,validateExpression(/[0-9]/)]],
    lastName:[ "" , [Validators.required , Validators.minLength(3), validateExpression(/[0-9]/)]],
    email:[ "" ,[Validators.required ,Validators.minLength(1), Validators.email , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phone:["",[ Validators.minLength(11), validateExpression(/[a-zA-z]/)]],
    massage:"",
  });
}
  ngOnInit(): void {
  }
  get f() { return this.specialOrderForm.controls; }
  onSubmit(){
    console.log(this.specialOrderForm.value);
  
  }
}
