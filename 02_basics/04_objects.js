//const metaUser = new Object() //singleton object
const metaUser = {} //non singleton object

metaUser.id = "user123"
metaUser.name = "user"
metaUser.isLoggedIn = false

//console.log(metaUser);

const xUser = {
    userName : {
        fullName : {
            firstName : "Ashutosh",
            lastName : "Rai"
        }
    }
}

//fconsole.log(xUser.hasOwnProperty('userName'));


//console.log(xUser.userName.fullName.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const objCom = Object.assign({},obj1,obj2)
// console.log(objCom);

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const course = {
    courseName : "Js ",
    price : "999",
    courseInstructor : "hitesh",
}

const {courseInstructor : inst} = course
console.log(inst);

//+++++++JavaScript object Notification(JSON)+++++++++


// {
//     "name" : "Ashutosh Rai",
//     "age" : "21",
//     "email": "user@mail.com"
// }