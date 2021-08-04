import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { SinglestudentComponent } from './singlestudent/singlestudent.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:"", redirectTo:"/registerStudent", pathMatch:'full'},
  {path:"registerStudent", component:AddstudentComponent},
  {path:"allStudents", component:StudentListComponent},
  {path:"editStudent/:id", component: EditstudentComponent},
  {path:"singleStudent/:id", component:SinglestudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
