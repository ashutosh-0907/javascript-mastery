// Immediately invoked function expression

(function dbConnect(){
    console.log("DB Connected");
})();

( (name) => {
    console.log(`Connection successful ${name}`);
 
})('Ashutosh');
