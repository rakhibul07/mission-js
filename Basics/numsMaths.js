const score1 = 25;
console.log(score1); //25

const score2 = new Number(209.544484);
console.log(score2); //[Number: 209.548484]
console.log(score2.toFixed(2)); //209.54//it works after the point
console.log(score2.toPrecision(4)); //209.5 //it works before and after point
console.log(score2); //[Number: 209.548484]

const hundreds = 10000000000;
console.log(hundreds.toLocaleString()); //10,000,000,000
console.log(hundreds.toLocaleString("en-IN")); //10,00,00,00,000

/////maths///////

console.log(Math);
console.log(Math.PI); //3.141592653589793
console.log(Math.max(2, 5, 8, 4, 9)); //9
console.log(Math.min(2, 4, 8, 6, 7)); //2
console.log(Math.abs(-74)); //74
console.log(Math.round(7.4)); //7
console.log(Math.round(7.5)); //8
console.log(Math.ceil(4.5)); //5
console.log(Math.floor(4.9)); //4

console.log(Math.floor(Math.random() * 10 + 1));

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
