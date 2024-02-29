let userName = "";
let userAge = 0;
let userHeight = 0;
let userWeight = 0;




userName = prompt('Type your name');
userAge = parseInt (prompt('Type your age'))
userHeight = parseFloat  (prompt ('Type your height'))
userWeight = parseInt(prompt("Type your Weight"))
birthYear = 0;
birthYear = 2024 - userAge

let userIMC = 0
userIMC = userWeight / (userHeight * userHeight)
console.log("hello! " + userName + ', ' +" you have " + userAge + " years, " + " born in " + birthYear + " have " + userHeight + " of height, " + " weighs " + userWeight + "kg" + " your IMC is " + userIMC + "kg/m2" )