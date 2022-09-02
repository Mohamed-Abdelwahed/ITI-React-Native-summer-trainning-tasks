  //////////////////////////////////////

function add(...res){
    let sum = 0
     res.reduce( (pre , current , currentInd , arr)=>{
           sum =  pre+current
            return sum
     },0);
     return sum
}

console.log(add(1,2,3,14,15,4,5,6,7));



//////////////////////////////////////////////////////

function fun1(num1 = 0 , num2 = 0){
   return `arg 1 = ${num1}  && arg 2 = ${num2}`
}

const fun2 = function(num1 = 0 , num2 = 0){
  return `arg 1 = ${num1}  && arg 2 = ${num2}`
}

const fun3=(num1=0 , num2=0)=> console.log(`arg 1 = ${num1}  && arg 2 = ${num2}`);
console.log(fun1(25, 23));
console.log(fun2(12,3));
fun3()

//////////////////////////////////////
let x = 1 , y =2 ;
 [x, y] = [y,x]
 console.log(`x ==> ${x}  y ==> ${y}`);

 ///////////////////////////////////Copy object in two ways ?!

let obj = {
  name:"Mahmoud" ,
  age:27
}

let obj1 = Object.assign(obj,obj)

console.log(obj1);

let obj2 = {...obj}
// console.log(` myOject ==>  ${obj2}`);
console.log(obj2);

 ///////////////////////////////////////////destruct and console object 



let {name , age}=obj
console.log(`${name} , ${age}`);



 //////////////////////////////////////////
 class Animal{
  constructor(name,age){
    this.name = name ,
    this.age = age
  }

  sayInfo(){
    console.log(`Iam Animal and my name is ${this.name} and my age is ${this.age}`);
  }
 }

 class Cat extends Animal{
  constructor(name,age){
    super(name , age)
  }

  sayInfo(){
    console.log(`Iam Cat and my name is ${this.name} and my age is ${this.age}`);
  }
 }

 const cat = new Cat("catty" , 3);
 cat.sayInfo();
 ///////////////////////////////////////////////////
 import * as mylib from './math.js'

 const add2 = mylib.add(2,4)
 const divide = mylib.divide(2,4)
 const subtract= mylib.subtract(2,4)
 const multibly = mylib.multibly(2,4)
 //////////////////////////////////
 const Fruits = [
  "Apples", "Strawberry","Banana","Orange","Mango","Avocado" , "Melon"
 ]

 const testEveryString = Fruits.every((element)=>{
        return   typeof element == 'string'
 })
 console.log(testEveryString);

 const testStartWithN = Fruits.some((element)=>{
  return    element.charAt(0) == 'N'
})
console.log(testStartWithN);

const testStartWithAORM = Fruits.filter((element)=>{
  return element.charAt(0) == 'A' || element.charAt(0) =='M'
})
console.log(testStartWithAORM);

const showAllFruits = Fruits.map((element)=>{
  return `  I Like ${element}

  `
})
console.log(...showAllFruits);




///////////////////////Finish Task day 1  /////////////////////////////////



