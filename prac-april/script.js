// const s1 = Symbol(1)
// console.log(s1)

h = 'she can\'t walk straight'
console.log(h)

function handle(){
    let nite = "hello world"
    console.log(nite)
    return
}
handle()

// let color = style.color('blue')
// if(color || blur){
//     console.log("hello")
// } else {
//     console.log(`${color} 'bye'`)
// }

// while(i=0; i<=10;i++){    
//     key 

// }

let keyarea = "Rockstar";

switch('entha monea yara nee rokana kuduka'){
    case 1: 'poda';
    break
    case 2: 'yaru da nee';
    break
    case 3: "prantha";
    break
    default: "Kiruku paiyalea"
    break
}

function tossCoin(){
    return new Promise((resolve, reject)=>{
        const rand = Math.floor(Math.random()*2)
        if(rand == 0){
            resolve()
        }else{
            reject()
        }
        })
}

let reachA = new Promise((resolve, reject) => {
    const reached = true
    if(reached)
    setTimeout(resolve, 3000, 'vidhya')
else 
    reject ('vidhya not required')
})

let reachB = new Promise ((resolve, reject) => {
    const reached = true
    if(reached)
    setTimeout(resolve,1000, "ramya reached")
    else
    reject ("ramya not reached")
})

Promise.all([reachA, reachB])
.then((message) => console.log(message))
.catch((message) => console.log(message))

Promise.any([reachA, reachB])
.then((message) => console.log(message))
.catch((message) => console.log(message))

Promise.race([reachA, reachB])
.then((message) => console.log(message))
.catch((message) => console.log(message))

async function fn1(){
    return 'hello'
}

console.log(fn1())

fn1().then((msg) => Promise((resolve,reject) => {
    const reached = true
    if(reached)
    setTimeout(resolve, 3000, 'vidhya gundu')
    else
    reject ('vidhya kinky')
}))

async function asyncStatus (){
    try{
        console.log('hi..')
        res = await reachA
        console.log(res)
        console.log('bye')
    }
    catch (err){
        console.log(err)
    }
}
asyncStatus()

let json2 = 3
let json3 = true
let json4 = [4,5,6]
let json5 = `[
    {"stock":"Tcs",
    "Price": 3500},
    {"stock":"hull",
    "Price" : 2500},
    {"stock" : "sbi",
    "Price" : 1500}
}]`

let parsed = JSON.parse(json6)
console.log(parsed[1].Price)

console.log(JSON.stringify(parsed))
console.log(parsed)

console.log(parsed)

// fetch

fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res) => res.json())
.then((msg) => console.log(msg [0].setup, msg[0].pushline))
.catch((err) => console.log(err))

fetch('https://api-thirukkural.vercel.app/api?num=25')
.then(res => {
    if(res.ok)
    console.log('success')
else
console.log('failed')
return res.json()
})

.then(msg => console.log(msg.line1, msg.line2, msg.tam_exp))
.catch(err => console.log(err))

fetch('http://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))

fetch('http://jsonplaceholder.typicode.com/todos',{
    method: 'POST',
    headers : {'content-type':'application/json'},
    body: Json.stringify({
        userID: 22,
        id: 456,
        title: test,
        completed: false
    })
})

.then(response => response.json())
.then(json = console.log(json))



let user1 = {
    name : 'ramya',
    age: 22,
    login(){
        console.log('you are logged in')
    },
    logout(){
        console.log('you are logged out')
    }

}

let user2 = {
    name : 'vasanth',
    age: 24,
    login(){
        console.log('hi', this.name)
        console.log('you are logged in')
    },
    logout(){
        console.log('you are logged out ')
    }
}

let user3 = {
    name : 'john',
    age : 21,
    login(){
        console.log('hi', this.name)
        console.log('you are logged in')
    },
    logout(){
        console.log('you are logged out')
    }
}

user2.login()
user3.login()

//Class is a template of properties 
//   and methods
//static - common variables/methods for class
//       - accessed with className
//ES6

class user {
    static numbersOfUsers = 0;
    constructor(name, age){
        this.name = name;
        this.age = age;
        user.numbersOfUsers++
    }
    login(){
        console.log('hi', this.name)
        console.log('you are logged in')
    }
    logout(){
        console.log('you are logged out')
    }

    static displayTotalUsers(){
        console.log('total number of users is' + user.numbersOfUsers++)
    }
}

let userOne = new user('vidhya', 23)
let userTwo = new user('ramesh', 35)
let userThree = new user ('Mano', 45)

userOne.login()
userTwo.logout()

user.displayTotalUsers()

let movie = 'PS1'
let music = new String('arr')

//inheritance - acquiring properties of
//            - a base class

class Paiduser extends User {
    constructor (name, age){
        super( name, age);
        this.storage = 100;
    }
    message(){
        console.log('you have 100GB free storage')
    }

    login(){
        console.log('thank you for the support')
        return this
    }
}

let paidUser1 = new Paiduser ('Dhana', 21)
paidUser1. login()
paidUser1. message()

// method Chaining

paidUser1.login().message()

function User(name, age){
    this.name = name;
    this. age = age;
}

User.prototype.login = function (){
    console.log('hi',this.name)
    console.log('you are the logged in')
}

let user1 = new User ('abdul', 34)
user1.login()

class Temperature{
    constructor(temp){
        this._temp =temp
    }
    get temp(){
        return `${this._temp} 'deg celsius`
    }

    set temp(temp){
        if(temp > 100)
        temp = 100;
    this._temp = temp
    }
}

let temp1 = new Temperature(25)

temp1.temp = 150
console.log(temp1.temp)

import C, {fillGas as fill, repair} from './car.js'

let car1 = new C ()
car1.drive()
fill()

// ES6 - MODULES

export default class Car{
    drive(){
        console.log('drving')
    }
}

export function fillGas(){
    console.log('Filling Gas')
}

export function repair(){
    console.log('repairing')
}







