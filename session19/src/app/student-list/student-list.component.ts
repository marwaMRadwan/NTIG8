import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Student } from '../shared/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  data:Student[] = []
  isNotLoaded: boolean = true
  noData : boolean = false
  
  constructor(private _crud:CrudService) { }

  ngOnInit(): void {
    this.dataSatatus()
    this._crud.GetStudentList().snapshotChanges().subscribe(data=>{
      // this.isNotLoaded = false
      // if(data.length ==0 ) this.noData=true
      data.forEach(s=>{
        let single:any = s.payload.toJSON()
        single['$key'] = s.key
        this.data.push(single as Student)
      })
    })
  }

  dataSatatus(){
    this._crud.GetStudentList().valueChanges().subscribe( data=>{
      this.isNotLoaded = false
      if(data.length ==0 ) this.noData=true
    }
    )
  }

  deleteStudent(data:Student){
    if(window.confirm(`consirm delete ${data.firstName} student`)){
      this._crud.DeleteStudent(data.$key)
    }
  }
}
