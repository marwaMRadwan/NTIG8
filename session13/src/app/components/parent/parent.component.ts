import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  a =5
  constructor() { }

  ngOnInit(): void {
  }
  add(){ this.a++}

}
