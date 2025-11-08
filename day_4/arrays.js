let details = ['vinotha', 99, 'tiruppur'];

console.log(details[1]);                    // 99

console.log(details);                       // [ 'vinotha', 99, 'tiruppur' ]

console.log(details.length);                // length is a property of Array --> 3

details[0] = 90;

console.log(details[0]);                    // 90

console.log(details[1]);                    // 99

console.log(details[2]);                    // tiruppur

console.log(details[3]);                    // undefined

console.log(details[9]);                    // undefined


//traverse through loops
let names = ['vinotha', 'Ramadass', 'Bharathi', 'Gowtham', 'Arthy', 'Tamilselvan', 'Kalaivani', 'Moulika'];

// 1.for

for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

/*
OUTPUT:
vinotha
Ramadass
Bharathi
Gowtham
Arthy
Tamilselvan
Kalaivani
Moulika
*/

// 2. WHILE LOOP
i = 0;
while(i<names.length){
    console.log(names[i]);
    i++;
}
//same output

// 3. for of
for(let value of names){
    console.log(value);
}
//same output

// 4. for in
for(let data in names){
    console.log(data);
}
/*
for in ---> used for objects (key: value) pairs
yes array is also a object
here (index: value)
so it prints
0
1
2
3
4
5
6
7
*/

for(value in names){
    console.log(names[value]);
}
//now you got your output vinotha to moulika


//using string methods
console.log("Printing in uppercase:");
for(value of names){
    console.log(value.toUpperCase());
}
/*
Printing in uppercase:
VINOTHA
RAMADASS
BHARATHI
GOWTHAM
ARTHY
TAMILSELVAN
KALAIVANI
MOULIKA
*/