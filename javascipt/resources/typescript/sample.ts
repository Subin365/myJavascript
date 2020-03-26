// var x:number = 2; //a number variable
// var $:string = "Subin";//a string variable
// console.log(x);
// console.log($);//output two variable
// class myClass{ // a simple class 
//     greet():void{//function inside myClass
//         console.log("Hello World");
//     }
// }
// var obj = new myClass();//created object of my class
// obj.greet();

// var anonymous = function(){
//     console.log("inside anonymous");
// }
// anonymous();

// // var anonymou = function(n){
// //     console.log("inside anonymous");
// //     if(n<0){
// //         break;
// //     }
// //     return anonymou(n--);
// // }

// var a:number = 20;
// var b:number = 42.50
// var sum = a + b 

// console.log("first score: "+a) 
// console.log("second score: "+b) 
// console.log("sum of the scores: "+sum)


// var n:number = 6 
// while(n>5) { 
//    console.log("n>5 and inside while") 
//    break;
// } 
// do { 
//    console.log("inside do ") 
//    break;
// } 
// while(n>5)

// var add = function(a:any, b:any,c?:any){
//     console.log(a+b)
//     this.name = "name"
// }
// var added_value =new add(2,3);
// add.prototype.hidden = "this value is hidden"
// console.log(added_value.hidden);
// var mul = function(a, b){
//     console.log("multiplication "+a*b)
// }
// mul(4,5);
// var sub = function(a, b){
//     console.log("subtraction " +(a-b))
// }
// sub(14,5);
// var div = function(a, b){
//     console.log(a==b?"its true":"its false")
// }
// div('5',5);



// function prototype():void{
//     this.num = 9744;
//     this.name = "subin"
// }
// var pro = new prototype();
// console.log(typeof(pro.num.toLocaleString()))
// prototype.prototype.added  = "this is newly added"
// console.log(pro.added)



// var s = "subin"
// var u = "suresh"
// console.log(s.concat(u))
// var ne = new String("asdf");
// var newArray = new Array(1,2,3)
// var sum:number = 0;
// var newArray2 =  newArray.reduce((a,b)=>{
//     console.log(a,b)
//     return a+b})
// console.log(newArray2)

// var [,q,w] = newArray;
// console.log(q,w)

interface person {
    x: number,
    y: string,
    display: () => string | number
};

var person1: person = {
    x: 23,
    y: "subin",
    display: () => { return "subin"; }
}
var person2: person = {
    x: 24,
    y: "name",
    display: () => { return (person2.x + person2.y) }

}
console.log(person2.display())



var employee = {
    firstname: "Tom",
    lastname: "Hanks",
    id: 651243
};
console.log(employee.firstname)
console.log(employee.lastname)



function over(int: number | string) {
    return int;
}


console.log(over(234))
console.log(over("overloading"))

class cts {
    name: string
    readonly id?: number
    static nu: number
    //constructor 
    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }

    //function 
    disp(): void {
        console.log("name is  :   " + this.name)
    }
}
var stud = new cts("subin", 234)
//stud.id = 23;\
console.log(stud.id)

cts.nu = 23

console.log(cts.nu)

interface arraylist {
    [index: string]: number
}

var array: arraylist[] = [];
array["subin"] = 13
array["hello"] = 131

var list = [1, 2, 3, 4, 5]

list.forEach((x, y) => {
    console.log(list[y])
})

class Encapsulate {
    str: string = "hello"
    private str2: string = "world"
    str3: string = this.str2 + this.str;
}

//var obj = new Encapsulate()
//console.log(obj.str3)     //accessible 
//console.log(obj.str2)   //compilation Error as str2 is private

//  interface ILoan { 
//     interest:number 
//  } 

//  class AgriLoan implements ILoan { 
//     rebate:number 
//     interest:number
//     constructor(interest:number,rebate:number) { 
//        this.interest = interest 
//        this.rebate = rebate 
//     } 
//  } 

//  var obj = new AgriLoan(10,1) 
//  console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )


interface IPoint {
    x: number
    y: number
}
function addPoints(p1: IPoint, p2: IPoint): IPoint {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    console.log(p1)
    return { x: x, y: y }
}

//Valid 
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 })
console.log(newPoint)



// /// <reference path = "test.ts" /> 
// namespace Drawing{
//     var obj = new mutli();
//     obj.x = 23;
//     console.log(obj.x)

//     var int:muli ={
//         y : ()=>{
//             return 234;
//         } 
//     }
//     console.log(int.y())
// }

import test = require("./test") //this is to import another file inside a typescript

class circle implements test.IShape{//test.IShape is present in another file. and we call it using dot operator
    draw(){
        console.log("this is a circle")
    }
}


var imp = new circle();//created object of class circle
imp.draw();// called the object draw from class inside IShape object from test.ts file 

var body = document.querySelector("body")
console.log(body)
