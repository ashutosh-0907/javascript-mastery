// Type of data in js

// Primitive and Non primitive

//primitive 7 types: Number, String, Null, undefined, Boolean, BigInt, Symbol

const name= "Ashutosh" //string
const age = 21 //Number
const isLogged = true //bool
const outsideTemp = null; //null

let score //undefined


//Non primitive: Array, Objects, Functions

const cricketer = ["Rohit","Kohli","Dhoni","Yuvraj"] //Array

let myDetails = {
    name : "Ashutosh",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World");
}


//**************************************** Memory in Javascript *************************************

//Stack (Primitive) (copy of value and only copied value changed not actual value)  and

// Heap(Non-Primitive)(Reference of same value and all value changed)

let bankName1 = "State Bank of India"
let bankName2 = bankName1

bankName2 = "Union Bank of India"

console.log(bankName1);
console.log(bankName2);

let userDetail1 = {

    name : "User rai",
    emailId : "user@gmail.com",
}

let userDetail2 = userDetail1

userDetail2.emailId = "user2@gmail.com"

console.log(userDetail1.emailId);
console.log(userDetail2.emailId);


