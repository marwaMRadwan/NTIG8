import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData:any = {
    name:"marwa",
    password:"",
    dateOfBirth:"",
    email:"",
    gender:1,
    phone:"",
    role:1
  }
  constructor(private _user:UserService) { }
  ngOnInit(): void { }
  handleRegister(){
    console.log(this.userData)
    this._user.register(this.userData).subscribe(res=>{
      console.log(res)
    })
  }
  reset(e:Event, reg:NgForm){
    // e.preventDefault()
    reg.resetForm()
  }
}
