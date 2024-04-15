let marks = {
    Sumedh: 90,
    Patil: 9,
    Vedant: 56,
    Ved: 4
  }
  
  for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
  }
  
  // Problem No 2
  for (let key in marks) {
    console.log("The marks of " + key + " are " + marks[key])
  }
  

  
  // Problem No 4
  const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
  }
  
  console.log(mean(4, 5, 6, 7))