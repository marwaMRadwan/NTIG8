import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-d-comp',
  templateUrl: './d-comp.component.html',
  styleUrls: ['./d-comp.component.css']
})
export class DCompComponent implements OnInit {
id:any
x : any
  constructor(private _activatedRoute: ActivatedRoute) {
       }

  ngOnInit(): void {
    this.id= this._activatedRoute.snapshot.paramMap.get("id")
    // this._activatedRoute.paramMap.subscribe(params=>{
    //   this.id = params.get('id')
    // })
    this.x = this._activatedRoute.snapshot.queryParamMap
  }

}
