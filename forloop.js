// // Program to add first n natural numbers
// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for (let i = 0; i < n; i++) {
//   sum += (i + 1)
//   // console.log((i+1), "+")
// }
// console.log("Sum of first " + n + " natural numbers is " + sum)
// // console.log(i)
let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}
for (let b of "Harry") {
  console.log(b)
}


// new code to avoid prompt line                 add first n numbers 
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = 0;

rl.question('Enter the value of n: ', (nStr) => {
  let n = Number.parseInt(nStr);

  for (let i = 0; i < n; i++) {
    sum += (i + 1);
    
  }

  console.log("Sum of first " + n + " natural numbers is " + sum);

  rl.close(); 
});
