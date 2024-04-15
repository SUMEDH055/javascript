console.log("Primitives in Js")
let a = null;
let b = 345;
let c = true;   // true or false 
let d = BigInt("567") + BigInt("3")
let e = "Harry"
let f = Symbol("it can be any symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

console.log("Non Primitive Data Type")
const item = {
  "Sumedh": true,
  "Patil": false,
  "Vedant": 67,
  "ved": undefined
}
console.log(item["Sumedh"])