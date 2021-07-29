import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isLoginSubmitted = false
  userData = new FormGroup({
    email:new FormControl("", [Validators.required,  Validators.email]),
    password:new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  })

  constructor(public _user:GlobalService, private toastr: ToastrService, private _roter:Router) {
    if(localStorage.getItem('token')) _roter.navigate(['/'])
   }
  msg=""
  ngOnInit(): void {

  }
  get email(){return this.userData.get('email')}
  get password(){return this.userData.get('password')}

  loginUser(){
    this.isLoginSubmitted=true
    if(this.userData.valid){
      // this.msg = this.userData.value.email + " " + this.userData.value.password
      this._user.login(this.userData.value).subscribe(
        (response) => {
          localStorage.setItem('token', response.access_token)
          this._user.loginFlag=true
      },
      (e)=>{
        this.showError()
      },
      ()=>{
        console.log('done');
        this._roter.navigateByUrl('/')
      }
      )
    }
    else{
      this.msg="please check your inputs"
    }
  }
  showError() {
    this.toastr.error('Invalid email');
  }

}
