// let a = 10
// let b = 20

// // console.log("greater", b > a)

// // console.log("greater", a > b)

// // console.log("lesser", a < b)

// // console.log("greater than", a >= b)

// console.log("greater", b >= a)

// console.log('Lesser than', a <= b)

// let mark = 45

// console.log(mark >= 35 && mark<=100)

// let a = 8

// console.log(a==2 || a==5)

// let b = true

// console.log(!b)

// var first_name = "NaWin"

// // c = first_name.charAt(1)

// // console.log(c)

// c = first_name.charCodeAt(1)

// console.log(c)

// let text = "01234567890";

// c=text.substring(0,4)
// console.log("Substring : "+c);

// let first_name = "NaWiN"
// let Last_name = "ChaNdEr"

// let c = first_name +" "+ Last_name;
// console.log("concatenation", c)

// let d = first_name.concat(" ", Last_name)

// console.log("concat", d)

// e = "tutor"

// e += " jones"

// console.log(e)

// h = 'she can\'t walk straight'
// console.log(h)

// f = h.length;
// console.log(f)

// g = first_name.toLowerCase()
// console.log(g)

// let first_name = "NaWiN"
// let Last_name = "ChaNdEr"

// g = first_name.indexOf('a')
// console.log(g)

// h = first_name.lastIndexOf('W')
// console.log(h)

// k = first_name.charAt(3)
// console.log(k)

// m = first_name.charCodeAt(4)
// console.log(m)

// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// console.log(pets.includes('rat'));

// let age = prompt("Enter your age")
// if(age != null && age >=18 ){
//     console.log("you are eligible to vote")
// }else{
//     console.log("you are not eligible to vote")
// }

/*
avg=87;
90-100  A Grade
80-89   B Grade
70-79   C Grade
<70     D Grade
*/


// let avg = 52
// if(avg>=90 && avg <= 100) {
//     console.log("you have obtained A Grade")
// }else if(avg >= 80 && avg <= 89){
//     console.log("you have obtained B Grade")
// }else if(avg >= 70 && avg <= 79){
//     console.log("you have obtainer C Grade")
// }else if(avg < 70){
//     console.log("you have obtainer D Grade")
// }


/// nested IF

/*
min mark >=35
  91-100 A
  81-90 B
  71-80 C
  D
*/

// let english = 30, tamil = 55, maths = 99;

// let total, avg;

// total = (english + tamil + maths)

// avg = Math.floor(total/3)

// console.log("total marks = ", total)
// console.log("average scored = ", avg)

// if( tamil <= 35 && english <= 35 && maths <= 35){
//     console.log("Result : Pass")
//    if( avg >= 91 && avg <= 100 ){
//     console.log('obtained Grade A')
// }else if( avg >= 81 && avg <= 90){
//     console.log("Obtained Grade B")
// }else if( avg >= 71 && avg <= 80){
//     console.log("obtainded Grade C")
// }
// }
// else{
//     console.log("Result : Fail")
//     console.log("Grade : No Grade")
// }

// switch

// let num = 1

// switch(num){
//     case 1: "one"
// break
//     case 2: "two"
// break
//     case 3: "three"
// break
//     case 4: "Four"
// break
//    default: console.log("invalid input")
// break

// }

// let letter = "I";

// switch(letter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":
//         console.log("The given letter is Vowel", letter)
//         break
//         default: console.log("Given letter is not an Vowel")
//         break
// }


// let i = 0
// while(i < 10){
//     console.log(i)
//     i++
// }

// let table = 10, limit = 7, i = 1

// do{
//     console.log(table+" X "+i + ' = '+ table*i)
//     i++
// }while(i <= limit)

// for(i=0;i<=10;i++){
//     console.log(i)
// }

// let arr = []
// for(i=1;i<=100;i+=2){
//     arr.push(i)
// }
// console.log(arr)
// console.log(arr[56])

//nexted for loop martrix

// let num = []

// for(let i=0; i < 3; i++){
//     num.push([])
//     for(j = 0; j < 3; j++){
//         num[i].push[j]
//     }
// }
// console.log(num)
// console.table(num)

// for of loop

// let names = ["tiya", "ram", "sam", "raja", "kumar"]

// for(let i=0;i<names.length;i++){
//     console.log(names[i])
// }

// console.log("For of loop : ")

// for(let name of names){
//     console.log(name)
// }

// console.log(typeof(names))

// let user = {
//     name: "tutor",
//     age: 35,
//     city: 'salem',
//     contact: '0000000000'
// }

// for(let prop in user)
// {
//     console.log(prop+" : "+ user[prop] )
// }

// let user = {
//     name: "Tutor Joes",
//     age: 35,
//     city: "Salem",
//     contact: "9043017689",
//   };
  
//   let arr_keys=Object.keys(user);
//   console.table(arr_keys);
  
//   let arr_values=Object.values(user);
//   console.table(arr_values);
  
//   for(let i=0;i<arr_keys.length;i++)
//   {
//     console.log(arr_keys[i]+" : "+arr_values[i]);
//     //console.log(user[arr_keys[i]]);
//   }

//   for(let i=1;i<=10;i++)
// {
//   console.log(i);

//   if(i==4){
//     break;
//   }
// }

// for(i=0;i<=10;i++){
//     if(i==4){
//     continue;
// }
// }
// console.log(i)


// for(i=0; i <= 10; i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i)
// }

// function sum(){
//   let total = 0
//   for(i= 0;i<arguments.length;i++){
//   total += arguments[i]
// }
// return total;
// }

// console.log(sum(1,2,3,4,5,6))

// const add = function(a,b){
//   return a + b
// }

// console.log(add(3,4))

// const functionName = ("parameter") => {
//  return()
// }

// const add = (a,b) =>{ return a+b}
// console.log(add(1,4))

// const sum = (a,b) => a + b;

// console.log(sum)

// // using arrow function with map

// let number = [1,2,3,4,5,6]
// let doubleNumber = number.map(number => number*2)
// console.log(doubleNumber)

// // arrow function with filter

// let words = ['apple', 'banana', 'orange', 'grape']
// let filterwords = words.filter(words => words.length > 5)
// console.log(filterwords)

// // arrow function with reduce

// let numbers = [1,2,3,4,5]
// let total = numbers.reduce((sum,number) => sum + number = 0)
// console.log(total) // 15

// using arrow functionto create a closure

// let createCounter = () =>{
//   let count = 0;
//   return() => {
//     count++
//     return count;
//   }
// }

// let counter = createCounter()
// console.log(counter());
// console.log(counter());

/// default parameter

// function addition(a,b = 5)
// {
//   return a+b;
// }

// console.log(addition(25,30))

// // function hoisting

// hoistLets()

// function hoistLets(){
//   console.log("function is being hoisted")
// }

// notHoist() - will not work it will throw reference error

// let notHoist = function hoist () {
//   console.log("im a function expression")
// }

// Nested Function

// function outerFunction(){
//   let outerValue = " I am a variable in the outer function"

//   function innerFunction(){
//     let innerVariable = "I am a variable in the inner function"
//     console.log(outerValue)
//     console.log(innerVariable)
//   }
//   innerFunction();
// }

// outerFunction();

// lexical scope in the function

// let globalVariable = " I am global variable"

//   function outerFunction(){
//     let outerValue = "I am the Variable in the outer function"
  
//   function innerFunction(){
//     let innerValue = "I am the variable from the inner Function"
  
//   console.log(globalVariable)
//   console.log(outerValue)
//   console.log(innerValue)
//   }
//   innerFunction()
// }
// outerFunction();

// block scope

// if(true){
//   let blockScopeVariable = "I am variable with the block scope"
//   console.log(blockScopeVariable)
// }
// console.log(blockScopeVariable)

// function myFunction(){
//   var functionScopeVariable = "I am variable with function Scope"
//   console.log(functionScopeVariable)
// }
// myFunction()
// console.log(functionScopeVariable)

// function firstName(first, second, ...third){
//   console.log(first)
//   console.log(second)
//   console.log(third)

// }

// let myArray = [1,2,3]
// let newArray = [...myArray,4,5,6]

// console.log(newArray)

// const person = {name:"Nawin", age:30}

// function sayHello({ name }){
//   console.log(`Hello ${name}`)
// }

// sayHello(person)

// const persons = {name:"Napzy"}

// function sayGell({name, age = 27}){
//   console.log(`Hello, ${name}! You are ${age} old.`)
// }

// sayGell(persons)

// setTimeout(function(){
//   console.log("hello world")
// }, 3000)

// const number = [1,2,3,4,5]

// number.forEach(function(number){
//   console.log(number + 1)
// })

// function outerFunction(x){
//   return function innerFunction(y){
//     return x + y
//   }
// }

// const az = outerFunction(5)
// console.log(az(3))

// function createFunction(){
//   let count = 8
//   return function(){
//     return count ++
//   }
// }

// const counter = createFunction()
// console.log(counter())
// console.log(counter())
// console.log(counter())
















































