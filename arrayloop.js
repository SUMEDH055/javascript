let num = [3, 5, 1, 2, 4]

for(let i=0; i<num.length;i++){
  console.log(num[i])
}


num.forEach((element) => {
  console.log(element * element)
})

 
let name = "Sumedh"
let arr = Array.from(name)   // .from 
console.log(arr)

for (let item of num){
  console.log(item)
}

for (let i in num){
  console.log(num[i])    // for...in
}