import { Injectable } from '@angular/core';
import { Student } from './student';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  studentsRef: AngularFireList<any> |undefined
  studentRef: AngularFireObject<any> |undefined

  constructor(private db:AngularFireDatabase) { }
  AddStudent(student:Student){
    this.studentsRef?.push({
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

}



