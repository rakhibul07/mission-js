const userId = 69;
// const userId = 44;
// userId = 41;
 // we can't redeclare and reassign if using const
console.log(userId);

let userName = "badhon";
// let userName = "islam";
// it's allow to reassign but not redeclare
userName = "islam";
console.log(userName)
// we never use var because of issue in block scope and functional scope
country = "bangladesh";
var city = "paris"
console.log(city);
let road;
// if we don't assign any value it will return undefined
console.table([userId,userName,city,road,country]);

