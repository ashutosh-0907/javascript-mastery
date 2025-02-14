// function myName(){
//     console.log( "Ashutosh");
    
// }
// myName()

function sumTwo(num1, num2){
    return num1 + num2
}
result = sumTwo(30,3)
//console.log(result);

// function score(...num1){ //rest operator
//     return num1
// }
// console.log(7.45,67.5,98.2);

// function score(val1, ...num1){
//     return num1
// }
// console.log(score(7.45,67.5,98.2,34))

const user = { // Obj in fn
    username : "Rai",
    price : 200,
    loggedIn : true
}

function getUserDetails(anyobject){
    console.log(`Username is ${anyobject.username}, price is ${anyobject.price}, and user is ${anyobject.loggedIn}`); 
}
getUserDetails(user)

const myArray =[200,400.5,6,22] //Array in fn
 
function getArrayElement(getArray){
    return getArray[2]
}
console.log(getArrayElement(myArray));
