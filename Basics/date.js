let date = new Date()
console.log(date)//2023-09-28T11:35:18.979Z
console.log(date.toString())//Thu Sep 28 2023 17:36:10 GMT+0600 (Bangladesh Standard Time)
console.log(date.toDateString())//Thu Sep 28 2023
console.log(date.toLocaleString())//9/28/2023, 5:38:45 PM
console.log(date.toISOString())//2023-09-28T11:35:18.979Z
console.log(date.toLocaleDateString())//9/28/2023
console.log(date.toJSON())//2023-09-28T11:41:14.584Z 
const newDate = new Date(2023,8,22,5,20)
console.log(newDate.toLocaleString())//9/22/2023, 5:20:00 AM

const date2 = new Date("2001-11-20")
console.log(date2.toLocaleString())//11/20/2001, 6:00:00 AM

var user = "badhon"
var user = "islam"//don't use var
console.log(user)

const timeStamp = Date.now()
console.log(timeStamp)//1695906503958 it return mili second

const date4 = new Date()
console.log(date4.toLocaleString("default",{
    weekday:'long',
    day:'2-digit',
    year:"numeric"
}))//28 Thursday 2023

console.log(date4.getDate())
console.log(date4.getFullYear())
console.log(date4.getMonth())
console.log(date4.getHours())

