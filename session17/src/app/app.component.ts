import { Component } from '@angular/core';
import { SService } from './s.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session17';
  a="a"
  x:boolean=false
  constructor(public s:SService){}
}
