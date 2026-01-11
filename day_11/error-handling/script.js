let a = 1;
let b = 2;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`a + b = ${a + b}`);
// console.log(`a + b = ${a + c}`);    // other lines also wont run due to this error

//error handlinng
try{
  console.log(`a + b = ${a + c}`);
} catch(err){       ////err is error object
  // console.log(err);
  console.log('better luck next time');
}
console.log(`a + b = ${a + b}`);
console.log(`a + b = ${a + b}`);
console.log(`a + b = ${a + b}`);
console.log(`a + b = ${a + b}`);
console.log(`a + b = ${a + b}`);
console.log(`a + b = ${a + b}`);
console.log(`a + b = ${a + b}`);
console.log(`a + b = ${a + b}`);
