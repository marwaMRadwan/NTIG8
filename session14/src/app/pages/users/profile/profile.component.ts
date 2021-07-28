import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
contactus = new FormGroup({
  name:new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]), //Validators.pattern('')
  email:new FormControl(),
  message:new FormControl(),
  phone:new FormControl(),

})
get name(){ return this.contactus.get('name')}
  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit(){
    console.log(this.contactus.valid);
    
    console.log(this.contactus.value)
  }

}
