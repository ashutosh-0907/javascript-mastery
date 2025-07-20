
const myObj = {
    cpp : "C++",
    js : "JavaScript",
    java : "Java",
    py : "Python"
}

for (const key in myObj) {
   //console.log(`${key} is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}
