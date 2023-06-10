/*
CIT 281 Project 1
Name: Rose Gbaanador
*/
const dayofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"];

const day = new Date();

let answer = dayofweek[day.getDay()];

console.log(answer);

