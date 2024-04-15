let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
console.log(num1.length)
delete num1[0]
console.log(num1.length)

let newArray = num1.concat(num_more, num_even_more)
console.log(newArray)
console.log(num1, num_more)

let compare = (a, b) => {
    return b - a;
  };
  
  let numbers = [5, 2, 9, 1, 5, 6];
  
  
  numbers.sort(compare);
  
  console.log(numbers); 

let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num.sort(compare)
num.reverse()
console.log(num)

