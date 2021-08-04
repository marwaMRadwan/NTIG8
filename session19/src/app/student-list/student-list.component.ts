import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Student } from '../shared/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  data:Student[]=[]
  constructor(private _crud:CrudService) { }

  ngOnInit(): void {
this._crud.GetStudentList().snapshotChanges().subscribe(
  d=> console.log(d)
  // this.data= d
)
  }

}
