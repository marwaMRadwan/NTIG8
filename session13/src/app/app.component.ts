import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session13';
  d = new Date()
  x = [
    { name:"marwa", age:36 },
    {name:"mazen", age:39}
  ]
}
