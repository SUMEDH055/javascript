
// No 1


let age1 = prompt("What is your age?")
age1 = Number.parseInt(age)
if (age1 > 10 && age1 < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}




// //  No 2

// let num = prompt("What is your age?")
// num = Number.parseInt(num)
// if (num % 2 == 0 && num % 3 == 0) {
//   console.log("Your number is divisible by 2 and 3")
// }
// else {
//   console.log("Your number is not divisible by 2 and 3")
// }


// //  3
// let age3 = 19
// let a = age3 > 18 ? "You can drive" : "You cannot drive"
// console.log(a)

// const rl2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
  rl2.question('What is your age? ', (age2) => {
    age2 = Number.parseInt(age2);
  
    switch (age2) {
      case 12:
        console.log("Your age is 12");
        break;
      case 13:
        console.log("Your age is 13");
        break;
      case 14:
        console.log("Your age is 14");
        break;
      case 15:
        console.log("Your age is 15");
        break;
      default:
        console.log("Your age is not special");
    }
  
    rl2.close();
  });

