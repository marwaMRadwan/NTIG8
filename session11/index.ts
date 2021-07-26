console.log('hello')
let x:number = 10;
// x="test"
//oop
// name, age , grades [] 

// let a = 5
// class - constructor
// class User{
//     //readonly like const 
//     readonly d : string = "marwa"
//     private _x : any;
//     y : number|undefined
//     z : number = 6
//     //constructor
//     constructor( a : number,  b: number){
//         this._x = a;
//         this.y =b
//     }
//     set x(val:any){
//         this._x = val
//     }
//     get x():any{
//         return `name is ${this._x}`
//     }
//     myFun():void{
//         console.log(`x = ${this._x} and y = ${this.y}`)
//     }
// }
// let myData = new User(2,4)
// myData.x=10
// console.log(myData.x)
// myData.myFun()
// class X{
//     a:number = 0;
//     constructor(a:string);
//     constructor(a:any){
//     }
    
// }
// let i = new X("h")

// member visibility
//public -  private - protected
// inheritance (override  - polymorphism)
// class A{
//     x:number
//     constructor(x:number){
//         this.x = x
//         console.log('hello from A')
//     }
//     afun():void{
//         console.log('a function')
//     }
// }

// class B extends A{
//     y:number
//     constructor(x:number, y: number){
//         super(x)
//         this.y = y
//         console.log('hello from B')
//     }
//     test():void{}
//     afun():void{ console.log('from b class')}
// }
/* x y super con  cons   test afun */
// let z = new B(5,6)
// console.log(z.x)
// z.afun()

// interface
// interface Data{
//     name:string
//     age:number
//     salary: number
//     martialStatus?:boolean
//     test():void;
// }

// let myData:Data = {
//     name:"marwa",
//     age:36,
//     salary:1000,
//     test: function(){

//     }
// }

// class X implements Data{
//       name:string=""
//     age:number=0
//     salary: number=0
//     martialStatus?:boolean=false
//     test():void{

//     }
// }

// static
// class Test{
//     static a :number = 0
//     constructor(){
//         Test.a++
//     }
//     myfun():void{
//         console.log(Test.a)
//     }
// }

// let x = new Test
// let y = new Test
// let z=new Test
// console.log(Test.a)


/*
interface M{ id:number 
title:string}
data: M[] = [ {id:'', title}, -----, {x:4,y:6}]
 */


// enum addressTypes {
//   home = 'Home',
//   work = 'Work',
// }

// interface Address{
//     _type?: addressTypes
//     bulidingNum?: number
//     streetName?:string
// }

// class User{
//     name:string =""
//     add:Address
//  constructor(name:string, add:Address)   {
// this.name = name
// this.add = add
//  }
// }
// let dd={_type:addressTypes.home, bulidingNum:50, streetName:"x"}
// let d = new User("mazen", dd)

// abstract
// abstract class Test{
//     t?:string
//     abstract x():void;
//     y(){
//         console.log('y')
//     }    
// } 

// class Z implements Test{
//     t:string

//     x(){

//     }
//     y(){

//     }
// }


//generic class
class Test<Type>{
    x: Type
    constructor(val:Type){
        this.x = val
    }
}

// let t = new Test(true)
// console.log(t.x)

let t : Test<string> = new Test("false")
