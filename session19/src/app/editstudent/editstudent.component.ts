import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  isSubmitted : boolean = false
  studentForm= new FormGroup({
    firstName:new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName:new FormControl('',[Validators.required, Validators.minLength(5)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobileNumber:new FormControl('', [Validators.required, Validators.minLength(11),Validators.maxLength(11)])
  })
  constructor( private _crud: CrudService, private _router:Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.params.id
    this._crud.GetSingleStudent(id).valueChanges().subscribe(data=>{
      this.studentForm.setValue(data)
    })
  }
  get firstName(){return this.studentForm.get('firstName')}
  get lastName(){return this.studentForm.get('lastName')}
  get email(){return this.studentForm.get('email')}
  get mobileNumber(){return this.studentForm.get('mobileNumber')}

  resstMyForm(){
    this.studentForm.reset()
  }
  UpdateStudent(){
    this.isSubmitted=true
    if(this.studentForm.valid){
      this._crud.UpdateStudent(this.studentForm.value)
      this._router.navigateByUrl('/allStudents')
    }
  }

}
