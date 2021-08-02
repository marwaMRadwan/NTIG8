import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
@Input() data:string=""
  constructor() { console.log('constructor', this.data); }

  ngOnInit(): void {console.log('ng on init', this.data)  }

  ngOnChanges(){console.log('on changes', this.data);  }

  ngDoCheck(){console.log('do check');  }

  ngAfterContentInit(){console.log('after content init');}
  ngAfterContentChecked(){console.log('after content checked');}
  ngAfterViewInit(){console.log('after view init');}
  ngAfterViewChecked(){console.log('after view checked');}
  ngOnDestroy(){console.log('on destroy');}
}
