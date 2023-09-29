const marvel_heros = ["ironman", "thor", "spiderman", "wolverine"]

const dc_heros = ["batman", "superman", "flash", "sazam"]

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

/*[
  'ironman',   'thor',
  'spiderman', 'wolverine',
  'batman',    'superman',
  'flash',     'sazam'
] */

const heros = [...marvel_heros,...dc_heros]
console.log(heros)
/*[
  'ironman',   'thor',
  'spiderman', 'wolverine',
  'batman',    'superman',
  'flash',     'sazam'
] */
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat(Infinity));
expected output: Array [0, 1, 2, 3, 4]

const convertArray = Array.from("Badhon")//it convert to array
console.log(convertArray)//[ 'B', 'a', 'd', 'h', 'o', 'n' ]



const arr7 = Array.from({name:"badhon"})//you should specify which will return in array else it returns empty array 
console.log(arr7)//[]


const num1 = 45
const num2 = 89
const num3 = 58
const num = Array.of(num1,num2,num3)
console.log(num)//[ 45, 89, 58 ]

console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false

