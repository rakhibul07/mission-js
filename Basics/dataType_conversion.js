let score = 23;
let value = "44ab";
let tem = null;
console.log(typeof score)//number
console.log(typeof (score))//number
console.log(typeof (value))//string

let valueScore  = Number(value)
let valueTem  = Number(tem)
console.log(valueScore);//NaN => Not a Number
console.log(valueTem);//0
console.log(typeof valueTem);//number
console.log(typeof valueScore);//number

let english = 44
let englishMark = String(english)
console.log(englishMark)//44
console.log(typeof englishMark)//string

let math;
let mathMark = Number(math)
console.log(mathMark)//NaN
console.log(typeof mathMark)//Number

let isLogged = 1;
let booleanLogged = Boolean(isLogged)
console.log(booleanLogged)


/*
true => 1
false => 0
null => 0
"" => false
"english" => true

*/