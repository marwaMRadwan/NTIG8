import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData =null
  constructor(private toastr: ToastrService, public _global:GlobalService, private _router:Router) {
    _global.me().subscribe(
      data=>{
        console.log(data)
        this.userData = data
      },
      (e)=>  _router.navigate(['/login'])

      )
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  ngOnInit(): void {
  }

}
