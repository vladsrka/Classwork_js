"use strict";
// const string = "string";
// const string2 = new String("string 2");
// console.log(string);
// console.log(string2);

// const leninSt = ["home 47", "home 32", "offise 22"];
// console.log(leninSt);
// leninSt.push("home 11");
// console.log(leninSt);
// leninSt.pop();
// console.log(leninSt);

const array = [1, 2, 3, 4, 5];
let sum = 0;
// 1 vr
// for (let index = 0; index < array.length; index++) {
//   sum += array[index];
// }
// 2 vr
// array.forEach((value) => {
//   sum += value;
// });
// 3 vr
sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);
