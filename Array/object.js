const obj1 = {}//non-singleton object//both return {}
const obj2 = new Object()//singleton object

const mySymbol = Symbol("key1")
const user = {
    name: "Badhon",
    age: 21,
    email: "badhon@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["sat","mon","wed"],
    "city": "Bogura",
    [mySymbol]: "symbol12"
}
// console.log(user.name)//Badhon
// console.log(user["name"])//Badhon
// console.log(user.city)//Bogura
//  console.log(user)
 /*{
  name: 'Badhon',
  age: 21,
  email: 'badhon@gmail.com',
  isLoggedIn: false,
  lastLoggedIn: [ 'sat', 'mon', 'wed' ],
  city: 'Bogura',
  [Symbol(key1)]: 'symbol12'
} */
user.email = "luffy@com"
console.log(user)
Object.freeze(user)
user.email = "naruto@com"
console.log(user)