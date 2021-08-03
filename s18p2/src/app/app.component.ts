import { Component } from '@angular/core';
import  * as io from 'socket.io-client'
const ENDPOINT = 'localhost:3000'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string=""
  title = 's18p2';
  socket : any
  constructor(){}
  ngOnInit(){
this.setupConnection()
  }
  setupConnection(){
    this.socket = io.io(ENDPOINT)
    this.socket.on('message-broadcast', (data:string)=>{
if(data){
let ele = document.createElement('li')
ele.innerHTML=data
document.querySelector('#myList')?.appendChild(ele)
}
    })
  }

  sendMessage(){
    this.socket.emit('myMsg', this.msg)
    let ele = document.createElement('li')
    ele.innerHTML=this.msg
    document.querySelector('#myList')?.appendChild(ele)
    this.msg=""
  }
}
