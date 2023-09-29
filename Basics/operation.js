console.log("")//nothing
console.log(+"")//1
console.log(undefined)//undefined
console.log(null)//null
console.log(+null)//0

let num = 4;
let neg = -num;
console.log(neg)//-4

let count = 100
count ++//postfix increment
++count //prefix increment
console.log(count)//101

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);//in postfix firstly x value assign in y then update x value
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);//in prefix firstly update x value then x value assign in y
// Expected output: "a:4, b:4"
