import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service'
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  allPosts :any = []
  constructor(private _posts:PostsService) {
    _posts.getAllPost().subscribe(data=>{
      // console.log(data)
      this.allPosts=data
    })
    console.log(this.allPosts)
   }

  ngOnInit(): void {
  }

}
