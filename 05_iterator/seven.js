const myNum = [1,2,3,4,5,6,7,8,9,10]

//console.log(myNum.map((n) => n + 10));

/*console.log(
    myNum
    .map((n) => n + 10)
    .map((m) => m + 1)
    .filter((p) => p > 20)
);*/

let opNum = myNum
    .map((n) => n * 10)
    .map((m) => m + 1)
    .filter((p) => p > 50)

console.log(opNum);
    


