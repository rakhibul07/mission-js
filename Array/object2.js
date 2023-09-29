const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}
const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj4 = {...obj1,...obj2}////always use it
console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(Object.keys(obj4))//[ '1', '2', '3', '4', '5', '6' ]
console.log(Object.values(obj4))//[ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(Object.entries(obj4))
/*[
  [ '1', 'a' ],
  [ '2', 'b' ],
  [ '3', 'c' ],
  [ '4', 'd' ],
  [ '5', 'e' ],
  [ '6', 'f' ]
] */
console.log(obj4.hasOwnProperty("1"))//true