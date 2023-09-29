const arr1 = [2,5,7,78,8,7]
console.log(arr1)//[ 2, 5, 7, 78, 8, 7 ]

const arr2 = new Array(2,6,96,6,8)
console.log(arr2)//[ 2, 6, 96, 6, 8 ]

const arr3 = [5,8,2,75,7,5]
console.log(arr3.includes(8))//true
console.log(arr3.indexOf(8))//1
console.log(arr3.indexOf(25))//-1 
arr3.push(44)
console.log(arr3)//[ 5, 8,  2, 75,  7, 5, 44 ]
arr3.pop()
console.log(arr3)//[ 5, 8, 2, 75, 7, 5 ]
// shift same as pop and unshift same as push but shift and unshift work on the first index

const newArray = arr3.join()// join convert array to string
console.log(newArray)//5,8,2,75,7,5
console.log(typeof newArray)//

///splice don't change original array but splice change original array

const orgArray = ["jan", "feb", "mar", "april", "may"]

const sliceArray = orgArray.slice(1,3)
console.log(orgArray)//[ 'jan', 'feb', 'mar', 'april', 'may' ]
console.log(sliceArray)//[ 'feb', 'mar' ]

const spliceArray = orgArray.splice(1,3)
const spliceArray2 = orgArray.splice(1,2,"a", "b", "c")
console.log(orgArray)//[ 'jan', 'may' ] it changes the original array
console.log(spliceArray)//[ 'feb', 'mar', 'april' ]
console.log(spliceArray2)//[ 'feb', 'mar' ]