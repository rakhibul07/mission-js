const name = "luffy"
const age = 19
console.log(`My name is ${name} and i am ${age} years old`)
//use  backtick 

const animeName = new String("luffy")
console.log(animeName)//[String: 'luffy']
console.log(animeName.length)//5
console.log(animeName.toUpperCase())//LUFFy
console.log(animeName.charAt(2))//f
console.log(animeName.indexOf('y'))//4
console.log(animeName.substring(0,4))//luff
console.log(animeName.slice(-4,3))//uf

const user = "   monkey d luffy  "
console.log(user.trim())//remove white space
console.log(user.trimStart())
console.log(user.trimEnd())

const url = "www.google20%.com"
console.log(url.replace("20%",""))//www.google.com
console.log(url.includes("goog"))//true
console.log(url.split("."))//[ 'www', 'google20%', 'com' ]

const first = "itachi"
const second = "uchiha"
console.log(first.concat(" "+ second))
console.log(first.toLocaleUpperCase())