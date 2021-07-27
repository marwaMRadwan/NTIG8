import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  // id:any=0
  data = {}
  constructor(private _activatedRoute:ActivatedRoute, private _posts:PostsService) { }

  ngOnInit(): void {
    this._posts.getSinglePost(this._activatedRoute.snapshot.params.id).subscribe(data=>{
      console.log(data)
      this.data = data
    })
  }

}
