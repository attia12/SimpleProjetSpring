import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterPayload} from "../Register-Payload";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  registerPayload!:RegisterPayload;

  constructor(private formBuilder:FormBuilder,
              private authService:AuthService,
              private router:Router) {
    this.registerForm=this.formBuilder.group({
      username:'',
      email:'',
      password:'',
      confirmPassword:''
    });
    this.registerPayload = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''

    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //retrieve the data of formcontrol
    this.registerPayload.username=this.registerForm.get('username')?.value;
    this.registerPayload.email=this.registerForm.get('email')?.value;
    this.registerPayload.password=this.registerForm.get('password')?.value;
    this.registerPayload.confirmPassword=this.registerForm.get('confirmPassword')?.value;

    this.authService.register(this.registerPayload).subscribe((response:any)=>{
      console.log("register success");

      this.router.navigateByUrl('/register-success');



    },(error) =>{
      console.log("register failed");
    } );

  }
}
