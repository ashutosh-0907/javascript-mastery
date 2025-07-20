
const arr = [1,2,3,4.6,7]

for (const i of arr) {
    //console.log(i);
}

const greet = "Hi geeks"

for (const i of greet) {
    //console.log(`Each char is ${i}`);   
}

const map = new Map()
map.set("IN", "India")
map.set("UK","United Kingdom")
map.set("AUS","Australia")
map.set("IN","Indian")

for (const [key,value] of map) {
   // console.log(key, "=>", value );
}
