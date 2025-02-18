const userDetails = {
    username : "Ashutosh",
    emailId : "user@gmail.com",
    msg : function(){
        console.log(` user is ${this.username}`);
        console.log(`EMail id is ${this.emailId}`); 
    }
}

// userDetails.msg()

// userDetails.username = "sam"
// userDetails.emailId="sam@gmail.com"

// userDetails.msg()

/*function userDetails(){  we can't interpret this
 bcz this not worked in function

    username :"Rai"
    console.log(this.username);
    
}*/

// ++++++++++++++++ Arrow Function ++++++++++++

sumTwo = () => {  // remove function and add => is called arrow fn
    username = "Ashutosh"
    console.log(username);  
} //  output is Ashutosh

// sumTwo = () => {  
//     username = "Ashutosh"
//     console.log(this.username); 
// } // op is undefined bcz we cnt use this keyword in js

sumTwo()  

add2No = (num1,num2) => {
    return num1+num2
}
add3No = (num1,num2) => num1 + num2

add4No = (num1,num2) => (num1+num2)

console.log(add2No(99.8,19));
console.log(add3No(99.4,19));
console.log(add4No(99.99,19));


