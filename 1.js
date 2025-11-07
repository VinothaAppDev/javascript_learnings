var value1 = 89;
console.log(value1)
var $a = 100, b = 90
console.log($a)
function fun(){
    var fun_value = 90;
    console.log("i am in fun " + fun_value)
}
fun();
let a = 90;
console.log("i am outside fun " + a)


console.log(var_variable);
var var_variable =9;

// console.log(let_variable)
// let let_variable=900;

var num = 90;
console.log(num);
console.log(typeof(num))
num = 'v';
console.log(num);
console.log(typeof(num))
console.log(typeof num)

let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber)

let value = null;
console.log(typeof(value));

var x = 1;
function foo() {
  console.log(x);
  var x = 2;
}
foo();

let s1 = Symbol('s');
let s2 = Symbol('s');
console.log(s1==s2)
console.log(Symbol()===Symbol());
console.log('9'===9)

let name = Symbol();

function fun1(arr1){
  arr1[0] = 7;
}
let arr = [9]
fun1(arr);
console.log(arr[0])

let ar;
if(ar = 12){
  console.log(ar)
}

console.log(x);
var x = 90;
console.log(x);
if(x<10)
{
  x = 9;
}
console.log(x);

const bore = new Boolean(false);
if(bore){
  console.log("true");
}
if(bore == true){
  console.log("false");
}