//object literals

let mySym = Symbol("key1");

let user = { //decln of objects
    name : "Ashutosh",
    "full name" : "Ashutosh Rai ", //
    [mySym] : "my key 1",           // declearn of symbol in object
    age : 21,
    email : "aashutoshrai0907@gmail.com"
}


//Object.freeze(user) // we can't change values after freeze

user.name = "Ashutosh rai" //to change value

// console.log(user.name);
// console.log(user.age);
// console.log(user.email);
// console.log(user["full name"]);
// console.log(user[mySym]);

console.log(user);

user.welcome = function(){
    console.log(`Hello ${this.name}`);
}
console.log(user.welcome());

