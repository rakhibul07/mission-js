/*
1.stack(primitive)=> copy

2.heap(non-primitive)=> reference (original value)

*/
//stack changes just copy value
let city = "paris"

let city2 = city
  city2 = "london"
console.log(city)
console.log(city2)
//stack changes original value
let myObj = {
    name: "badhon",
    roll: 42
}

let myObj2 = myObj
myObj2.roll = 66;
console.log(myObj.roll)
console.log(myObj2.roll)

