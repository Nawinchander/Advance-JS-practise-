// for each

// const fruits = ['apple', 'banana', 'grapes']
// fruits.forEach(fruit => console.log(fruit))

// const numbers = [1,2,3,4,5,6]
// let total = 0
// numbers.forEach(number => {
//     total += number;
// })
// console.log(total)

// const no = [1,2,3,4,5]
// let doubleNumber = []
// no.forEach(number => {
//     doubleNumber.push(number*2)
// })

// console.log(doubleNumber)


// const number = [1,2,3,4,5];

// let max = number[0];
// number.forEach(num => {
//     if(num > max){
//         max = num;
//     }
// });

// console.log(max);

// const names = ['john', 'mike', 'bob', 'jane']
// names.forEach((name, index) => {
//     names[index] = name.toUpperCase()
// })

// console.log(names)

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// numbers.forEach((number, index) => {
//     if(number > 5){
//         numbers.splice(index, 1)
//     }
// })

// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach((number, index) => {
//   if (number >= 5) {
// numbers.splice(index, 1);
//   }
// });
// console.log(numbers);

// const fruits = ["apple", "banana", "grapes"]
// let exists = false
// fruits.forEach(fruit => {
//     if(fruit = "banana"){
//         exists = true
//     }
// })

// console.log(exists)

// const words = ["hello","world"]
// let concat = "";
// words.forEach((word) =>{
//     concat += word + " ";
// })
// console.log(concat)

// filters

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let evenNUmbers = numbers.filter(number => number % 2 == 0)
// console.log(evenNUmbers)

// let users = [
//     { name:'alice', age: 20},
//     { name: 'blance', age: 25},
//     { name: 'Charlie', age: 30}
// ]

// let eligible = users.filter(person => person.age > 20)
// console.log(eligible)

// let words = ['cat', 'Dog', 'elephant', 'buffalo', 'fish']

// let forLetterWords = words.filter(word => word.length === 3)

// console.log(forLetterWords)

// let number = [1,2,3,4,5,6,7,8,9,10]

// let numberDivby3 = number.filter(numbers => numbers % 3 == 0)
// console.log(numberDivby3)

// let items = [
//     {name: "apple", category:"Fruit"},
//     {name: "carrot", category: "Vegetable"},
//     {name: "Dates", category: "nuts"},
//     {name: "Kiwi", category: "Fruit"}
// ]

// let categoryType = items.filter(item => item.category == "Fruit")

// console.log(categoryType)

// let words = ['cat', 'dog', 'elephant', 'fish', 'giraffe']

// let wordStartwithE = words.filter( word => word.startsWith('e'))

// console.log(wordStartwithE)

// let products = [
//     { name: 'apple' ,  price: 1.2},
//     { name: 'orange', price: 2.5},
//     { name: 'banana', price: 3.5}
// ]

// let propertyPrize = products.filter( product => product.price > 2)
// console.log(propertyPrize)

// let button = [
//     { name: 'save', enabled: true},
//     { name: 'delete', enabled: false},
//     { name: "Cancel", enabled: true},
//     { name: "Submit", enabled: false}
// ]

// let enabledButton = button.filter( buttons => buttons.enabled === true)

// console.log(enabledButton)

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// let numGreaterThan5 = numbers.filter(number => number > 5)

// console.log(numGreaterThan5)

// let words = ['cat', 'dog', 'Tiger', 'camel', 'elephant']

// let wordWithE = words.filter(word => word.includes('e'))

// console.log(wordWithE)

/// map

// let number = [1,2,3,4,5];
// let numBy2 = number.map(num => num * 2)
// console.log(numBy2)


// const numbers = [1, 2, 3, 4, 5, 6];

// function evenSquareNum (numbers){
//     const evenNumber = numbers.filter(num => num % 2 == 0)
//     const squareNumbers = evenNumber.map( num => num ** 2)
//     return squareNumbers
// }

// let result = evenSquareNum(numbers)
// console.log(result)

// const words = ['hello', 'world']

// const capsWord = words.map(word => word.toUpperCase())
// console.log(capsWord)

// const books = [
//     {
//       title: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald'
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee'
//     },
//     {
//       title: 'Pride and Prejudice',
//       author: 'Jane Austen'
//     }
//   ];

// const bookByModel = books.map( book => `${book.title} by ${book.author}`)

// console.log(bookByModel)

// const celsiusTemp = [25,30,15,10]

// const farhenietTemp= celsiusTemp.map( temp => (temp * 9/5) + 32)

// console.log(farhenietTemp)

// const fruits = ["apple", "banana"];
// const colors = ["red", "yellow"];

// const fruitColor = fruits.map( (fruit, index) => fruit +" - " + colors[index])

// console.log(fruitColor)

// const numbers = [1, 2, 3, 4, 5];

// const squareNum = numbers.map( num => num * num)
// console.log(squareNum)

// const numbers = [1,2,3,4,5,6,7,8]

// let evenNumber = numbers.map( number => number % 2 === 0)

// console.log(evenNumber)

// const users = [
//     { name: "Ram", age: 30 },
//     { name: "Sam", age: 25 },
//     { name: "Ravi", age: 35 }
//     ];

// let nameFromObj = users.map(user => user.name)

// console.log(nameFromObj)

// modifiying the user age

// const users = [
//     { name: "Ram", age: 30 },
//     { name: "Sam", age: 25 },
//     { name: "Ravi", age: 35 }
//     ];

// const ModifyName = users.map(user => {
//     return {
//         ...user,
//         age: user.age + 5
//     }
// })

// console.log(ModifyName)



// const strings = ['hello', 'world', 'javascript'];

// const stingLength = strings.map(string => string.length)

// console.log(stingLength);

// const students = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Mike', lastName: 'Johnson' }
//   ];

// const fullName = students.map( name => `${name.firstName} ${name.lastName}`)
// console.log(fullName)

// const dates = [
//     new Date("2022-01-01"),
//     new Date("2022-02-01"),
//     new Date("2022-03-01")
// ];

// const formatedDate = dates.map(date => date.toLocaleDateString() );
// console.log(formatedDate)

// const names = ['ravi', 'sam', 'ram']

// const nameElements = names.map(name => {
//     const nameElement = document.createElement("div")
//     nameElement.innerText = name;
//     return nameElement
// })

// console.log(nameElements)

// const currencies = [
//     { currency: 'USD', rate: 1 },
//     { currency: 'EUR', rate: 0.85 },
//     { currency: 'GBP', rate: 0.73 },
//     { currency: 'JPY', rate: 109.97 }
//   ];
//   const amount = 100; // Amount in USD
//   const targetCurrency = 'EUR';

//   const convertedAmount = currencies.map(currency => {
//     const convertedAmounts = amount * currency.rate
//     return { currency: currency.currency, amount: convertedAmounts }
//   })

//   console.log(convertedAmount)

// const phoneNumbers = ['1234567890', '9876543210', '5551234567'];

// const formattedNum = phoneNumbers.map(num => {
//     const formattedNumber = `(${num.slice(0,3)}) ${num.slice(3,6)} - ${num.slice(6)})`
//     return formattedNumber
// })

// console.log(formattedNum)

// const products = [
//     { id: 1, name: 'iPhone', price: 999, category: 'Electronics' },
//     { id: 2, name: 'Shirt', price: 25, category: 'Fashion' },
//     { id: 3, name: 'Book', price: 15, category: 'Books' },
//     { id: 4, name: 'TV', price: 799, category: 'Electronics' },
//   ];

//   const filterProducts = products.filter(product => product.category === 'Electronics' && product.price > 500)

//   products.map(product => ({id:product.id, name: product.name}))

//   console.log(filterProducts)

//   const response = [
//     { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
//     { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
//     { id: 3, name: 'Mike Johnson', age: 35, email: 'mike@example.com' }
//   ];

//   const users = response.map( user => ({
//     id: user.id,
//     name: user.name,
//     email: user.email
//   }))

//   console.log(users)

//   const cartItems = [
//     { name: 'Shirt', price: 20, quantity: 2 },
//     { name: 'Pants', price: 30, quantity: 1 },
//     { name: 'Shoes', price: 50, quantity: 1 }
//   ];

//   const item = cartItems.map(items => ({
//     name: items.name,
//     total: items.price * items.quantity
//   }))

//   console.log(item)

// reduce method

//   array.reduce(function(accumulator, currentValue, currentIndex, array) {
//     // code to be executed on each iteration
//   }, initialValue);

// let num = [1,2,3,4,5,6]

// let sum = num.reduce((accumulator, currentValue) => accumulator + currentValue)

// console.log(sum)

// let nestedArray = [ [1,2], [3.4], [5.6] ]
// let flattendArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue))

// console.log(flattendArray)


// let colors = ['red', 'blue', 'green', 'red', 'blue', 'yellow']

// let colorCounts = colors.reduce((accumulator, currentValue) => {
//     if(currentValue in accumulator){
//         accumulator[currentValue]++
//     } else {
//         accumulator[currentValue] = 1
//     }
//     return accumulator
//     }, {})

//     console.log(colorCounts)


// let number = [5, 10, 15, 20, 25]
// let largest = number.reduce((accumulator,currentValue) => {
//     return Math.max(accumulator, currentValue)
// })

// console.log(largest)


// let people = [
//     { name: 'Rakesh', age: 25, city: 'Chennai' },
//     { name: 'Raj', age: 30, city: 'Salem' },
//     { name: 'Sara', age: 35, city: 'Chennai' }
//     ];

// let groupByCity = people.reduce((accumulator, currentValue) => {
//     if(currentValue.city in accumulator){
//         accumulator[currentValue.city].push(currentValue)
//     } else{
//         accumulator[currentValue.city] = [currentValue]
//     }
//     return accumulator
// }, {})

// console.log(groupByCity)


// Navigating Complex Data Structures with Optional Chaining in JavaScript

// const user={
//     firstName:"Tutor",
//     lastName:"Joes",
//     address:{
//         street:"Cherry Road",
//         city:"salem",
//         contact:"9043017689",
//         }
// }

// console.log(user?.firstName);
// console.log(user?.address?.contact);


// Function Inside Object in JavaScript

// const object = {
//     method: function(){
//         console.log("hello i am a method")
//     }
// }

// console.log(object.method)


// // shorthand notation

// const object1 ={
//     method(){
//         console.log("hellow i am method in object1")
//     }
// }

// object1.method()

// const object2 = {
//     method: () =>{
//         console.log("hello i am a method in the object 2")
//     }
// }

// object2.method()

// const object3 = {
//     property: "I am a Property",
//     method: function(){
//         console.log(this.property)
//     }
// }
// object3.method()

// class Funinobj {
//     constructor(){
//     this.property = "I am a Property";
//       }
//    method(){
//     console.log("Hello I am a method!")
//    }
// }

// const obj = new Funinobj();
// console.log(obj.property)
// obj.method()


// function checkEligiblity(){
//     if(this.age>=18){
//         console.log(`${this.firstname} age is ${this.age} eligible for vote`);
//     }else{
//         console.log(`${this.firstname} age is ${this.age} not eligible for vote`);
//     }
// }

// const user1={
//     firstname:"Joes",
//     age:35,
//     eligiblity:checkEligiblity
// }

// user1.eligiblity();

// const user2={
//     firstname:"Sara",
//     age:12,
//     eligiblity:checkEligiblity
// }

// user2.eligiblity();

// Mastering the call, apply, and bind methods in js

// call

// function total (eng, mat){
//     console.log(this.name + " got " + (eng+mat)+ " Marks")
// }

// const user = { name : 'Ram'}
// total.call(user, 65, 75)


// apply

// function total(eng, mat){
//     console.log(this.name + " got " + (eng+mat) + " Marks")
// }

// const user = {name : 'Ram'}
// total.apply(user, [55,45])

// bind


// function total (eng, mat){
//     console.log(this.name + " got "+ (eng+mat)+ " Marks")
// }

// const user = {name : 'siva'}
// const fun = total.bind(user, 50,40)

// fun()

// Understanding the this keyword in JavaScript Arrow Functions

// const obj = {
//     name: 'John',
//   printName: () => {
//       console.log(this.name);
//     }
//   };
  
//   obj.printName(); //undefined


//   const obj = {
//     name: 'John',
//   printName() {
//       console.log(this.name);
//     },
//   printNameWithArrow: () => {
//       console.log(this.name);
//     }
//   };
  
// //   obj.printName(); //John
//   obj.printNameWithArrow(); //undefined


// Approach	Advantages	Disadvantages
// Object Literal Notation	Simple and easy to read	Does not allow for creating multiple instances
// Factory Function	Allows for creating multiple instances with shared methods	Requires an extra function to create each instance
// Prototype Inheritance	Allows for creating multiple instances with shared methods and avoids duplicating methods	Can be more complex to understand

// Define a person object with a name property


// function Person(name) {
//     this.name = name;
//   }
  
//   // Add a greet method to the person object's prototype
//   Person.prototype.greet = function() {
//   console.log("Hello, my name is " + this.name);
//   }
  
//   // Create a new person object and call the greet method
//   var person = new Person("John");
//   person.greet(); // output: "Hello, my name is John"

//   let obj1 = {
//     name: "Joes",
//     city: "salem",
//     info: function () {
//       return `${this.name} is from ${this.city}`;
//     },
//   };
  
//   const obj2 = Object.create(obj1);
//   obj2.name = "Raja";

//   // Access the name property of obj1
// console.log(obj1.name); // output: "Joes"

// // Call the info method of obj1
// console.log(obj1.info()); // output: "Joes is from salem"

// // Access the name property of obj2
// console.log(obj2.name); // output: "Raja"

// // Call the info method of obj2, which inherits from obj1
// console.log(obj2.info()); // output: "Raja is from salem"


// getter and setter

// const obj = {
//     get propertyName() {
//       // code to get the property value
//     },
//     set propertyName(value) {
//       // code to set the property value
//     }
//   };

//   const person = {
//     firstName: 'Tutor',
//     lastName: 'Joes',
//       get fullName() {
//         return this.firstName + ' ' + this.lastName;
//       },
//       set fullName(name) {
//         const parts = name.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//       }
//     };
    
//     console.log(person.fullName); // output: "Tutor Joes"
//     person.fullName = "Sam Sundar";
//     console.log(person.firstName); // output: "Sam"
//     console.log(person.lastName); // output: "Sundar"
//     console.log(person.fullName); // output: "Sam Sundar

// class Circle {
//     constructor(radius) {
//   this.radius = radius;
//     }
  
//     get diameter() {
//       return this.radius * 2;
//     }
  
//     set diameter(diameter) {
//   this.radius = diameter / 2;
//     }
  
//     get area() {
//       return Math.PI * this.radius * this.radius;
//     }
//   }
  
//   const myCircle = new Circle(5);
//   console.log(myCircle.radius); // output: 5
//   console.log(myCircle.diameter); // output: 10
//   console.log(myCircle.area); // output: 78.53981633974483
  
//   myCircle.diameter = 12;
//   console.log(myCircle.radius); // output: 6
//   console.log(myCircle.diameter); // output: 12
//   console.log(myCircle.area); // output: 113.09733552923254


// Define parent class
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
  
//     // Add method to class
//   sayHello() {
//   console.log(`Hello, my name is ${this.name}`);
//     }
//   }
  
//   // Define child class that inherits from parent class
//   class Student extends Person {
//   constructor(name, age) {
//       super(name); // Call parent constructor with this instance
//   this.age = age;
//     }
  
//     // Add method to child class
//   eligiblity() {
//     console.log (this.name +" age is "+this.age +" " + (this.age>= 18? "Eligible”: "Not Eligable"));
//    }
//   }
  
//   // Create instances of classes
//   let person = new Person("Joes");
//   let student = new Student("Joes", 35);
  
//   // Call methods on instances
//   person.sayHello(); // Output: Hello, my name is Joes
//   student.sayHello(); // Output: Hello, my name is Joes
//   student.eligiblity(); // Output: Joes age is 35 Eligible

// // Define parent class
// function Person(name) {
//     this.name = name;
//   }
  
//   // Add method to prototype
//   Person.prototype.sayHello = function () {
//   console.log("Hello, my name is " + this.name);
//   };
  
//   // Define child class that inherits from parent class
//   function Student(name, age) {
//   Person.call(this, name); // Call parent constructor with this instance
//   this.age = age;
//   }
  
//   // Set up prototype chain for inheritance
//   Student.prototype = Object.create(Person.prototype);
//   Student.prototype.constructor = Student;
  
//   // Add method to child class
//   Student.prototype.eligiblity = function () {
//   console.log (this.name +" age is "+this.age +" " + (this.age>= 18? "Eligible”: "Not Eligable"));
//   };
  
//   // Create instances of classes
//   var person = new Person("Joes");
//   var student = new Student("Joes", 35);
  
//   // Call methods on instances
//   person.sayHello(); // Output: Hello, my name is Joes
//   student.sayHello(); // Output: Hello, my name +is Joes
//   student.eligiblity(); // Output: Joes age is 35 Eligible










