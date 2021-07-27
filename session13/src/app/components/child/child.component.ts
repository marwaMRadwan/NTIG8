import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() x:number = 0
  @Input() z:number=0
  y = 8
  constructor() { }

  ngOnInit(): void {
  }

}
