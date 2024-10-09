// function myName(){
//     console.log( "Ashutosh");
    
// }
// myName()

function sumTwo(num1, num2){
    return num1 + num2
}
result = sumTwo(30,3)
//console.log(result);

// function score(...num1){
//     return num
// }
// console.log(7.45,67.5,98.2);

function score(val1,val2, ...num1){
    return num1
}
console.log(score(7.45,67.5,98.2,34))