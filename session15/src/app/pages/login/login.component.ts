import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _user:GlobalService) { }

  ngOnInit(): void {

    this._user.login({
      "email":"test@test.com",
      "password":"123456"
  }).subscribe(data=> console.log(data))
  }

}
