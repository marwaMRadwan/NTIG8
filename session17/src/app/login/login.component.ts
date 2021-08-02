import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SService } from '../s.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router, public s:SService) { }

  ngOnInit(): void {
  }
login(){
  this.s.loginStatus=true
this._router.navigate(['/home'])
}

loginx(){
  this.s.loginStatus=false
this._router.navigate(['/home'])
}
}
