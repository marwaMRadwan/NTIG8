import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  isSubmitted : boolean = false
  studentForm= new FormGroup({
    firstName:new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName:new FormControl('',[Validators.required, Validators.minLength(5)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobileNumber:new FormControl('', [Validators.required, Validators.minLength(11),Validators.maxLength(11)])
  })
  constructor( private _crud: CrudService, private _router:Router) { }

  ngOnInit(): void {
  }
  get firstName(){return this.studentForm.get('firstName')}
  get lastName(){return this.studentForm.get('lastName')}
  get email(){return this.studentForm.get('email')}
  get mobileNumber(){return this.studentForm.get('mobileNumber')}

  resstMyForm(){
    this.studentForm.reset()
  }
  addNewStudent(){
    this.isSubmitted=true
    if(this.studentForm.valid){
      this._crud.AddStudent(this.studentForm.value)
      this.resstMyForm()
      this._router.navigateByUrl('/allStudents')
    }
  }
}
