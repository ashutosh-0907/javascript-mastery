// let a =10; // let 
// a=12
// console.log(a); // op is 12

// const b=33
// b=35
// console.log(b); // TypeError: Assignment to
//constant variable

// var c = 37
// c=43
// console.log(c);


 

if(true){
   let a = 1
   const b = 20
   var c = 3  // var has scope problem
}
//console.log(a);
//console.log(b);
console.log(c); // var will print 3 here
//console.log({a,b,c});

console.log(addOne(5));
function addOne(num){
   return num + num
}

console.log(sum(33));
sum = function add(num){
   return num + num
}

console.log(sum(33));




