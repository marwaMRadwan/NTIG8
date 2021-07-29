import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-adddependent',
  templateUrl: './adddependent.component.html',
  styleUrls: ['./adddependent.component.css']
})
export class AdddependentComponent implements OnInit {
  pageSize=10
  p=1
  
  isLoaded = false
  allDoctors:any= []
  count = 0
  pageChanged(event:any){
    // console.log(event)
    this.p = event
    this.loadData()
  }
  constructor(private _global:GlobalService) { 
    this.loadData()
  }

  ngOnInit(): void {
  }

  loadData(){
    this._global.loadAllDocs(this.p-1).subscribe(data=>{
      this.allDoctors=data.data
      this.count= data.Count
      console.log(data)
    },
    (e)=>{
console.log(e)
    },
    ()=>{
      this.isLoaded=true
    }
    )
  }

}
