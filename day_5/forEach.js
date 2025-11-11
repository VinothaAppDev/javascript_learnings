let names = ["vinotha", "arthy", "Bharathi", 90, "Gowtham", "Ramadass", 88];

names.forEach(
    function travel(value){
        console.log(value);
    }
);

// can also written as arrow function
// names.forEach(
//     (value) => console.log(value)
// )

/*
vinotha
arthy
Bharathi
90
Gowtham
Ramadass
88
*/

names = ["vinotha", "arthy", "Bharathi", 90, "Gowtham", "Ramadass", 88];

names.forEach(
    function travel(value, index){
        console.log(value, "is in the index", index);
    }
);

/*
vinotha is in the index 0
arthy is in the index 1
Bharathi is in the index 2
90 is in the index 3
Gowtham is in the index 4
Ramadass is in the index 5
88 is in the index 6
*/

names = ["vinotha", "arthy", "Bharathi", 90, "Gowtham", "Ramadass", 88];

names.forEach(
    function travel(value, index, arr){
        console.log(value, "is in the index", index, "in the array", arr);
    }
);

/**
vinotha is in the index 0 in the array [
  'vinotha',  'arthy',
  'Bharathi', 90,
  'Gowtham',  'Ramadass',
  88
]
arthy is in the index 1 in the array [
  'vinotha',  'arthy',
  'Bharathi', 90,
  'Gowtham',  'Ramadass',
  88
]
Bharathi is in the index 2 in the array [
  'vinotha',  'arthy',
  'Bharathi', 90,
  'Gowtham',  'Ramadass',
  88
]
90 is in the index 3 in the array [
  'vinotha',  'arthy',
  'Bharathi', 90,
  'Gowtham',  'Ramadass',
  88
]
Gowtham is in the index 4 in the array [
  'vinotha',  'arthy',
  'Bharathi', 90,
  'Gowtham',  'Ramadass',
  88
]
Ramadass is in the index 5 in the array [
  'vinotha',  'arthy',
  'Bharathi', 90,
  'Gowtham',  'Ramadass',
  88
]
88 is in the index 6 in the array [
  'vinotha',  'arthy',
  'Bharathi', 90,
  'Gowtham',  'Ramadass',
  88
] 
*/