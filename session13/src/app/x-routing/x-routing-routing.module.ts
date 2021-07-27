import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from '../components/child/child.component';

const routes: Routes = [
  {path:"test", component:ChildComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XRoutingRoutingModule { }
