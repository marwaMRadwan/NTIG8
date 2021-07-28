import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  isLoaded = false
  data:any= []
  constructor(private _user:UserService) { 
    _user.getImages().subscribe(
      (result)=>{this.data = result},
    ()=>{ 
      // api crashes 500 status
    },
    ()=>{
      this.isLoaded=true
    }
    
    )
  }

  ngOnInit(): void {
  }

}
