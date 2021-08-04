import { Injectable } from '@angular/core';
import { Student } from './student';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  studentsRef: AngularFireList<any>  = this.db.list('student-list')
  studentRef: AngularFireObject<any>

  constructor(private db:AngularFireDatabase) { }
  AddStudent(student:Student){
      this.studentsRef.push({
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        mobileNumber: student.mobileNumber
      })  
  }

  GetStudentList(){
    this.studentsRef = this.db.list('student-list')
    return this.studentsRef
  }

  GetSingleStudent(id:string){
    this.studentRef = this.db.object('student-list/'+id)
    return this.studentRef
  }
  UpdateStudent(student:Student){
    this.studentRef.update({
      firstName :student.firstName,
      lastName: student.lastName,
      email:student.email,
      mobileNumber:student.mobileNumber
    })
  }
  DeleteStudent(id:string|any){
    this.studentRef = this.db.object('student-list/'+id)
    this.studentRef.remove()
  }
}



