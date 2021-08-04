import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor( private _crud: CrudService) { }

  ngOnInit(): void {

  }
  addNewStudent(){
    this._crud.AddStudent({
      firstName:"marwa",
      lastName:"radwan",
      email:"a@a.com",
      mobileNumber:123456
    })
  }
}
