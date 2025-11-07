let str = 'We are a joint family living in DELHI';

str.toLowerCase();
console.log(str); //---- We are a joint family living in DELHI

str = str.toLowerCase();
console.log(str);   //we are a joint family living in delhi

console.log(str.toUpperCase());  //WE ARE A JOINT FAMILY LIVING IN DELHI

console.log(str.trim());    //---- We are a joint family living in DELHI

let new_str = "      vinotha         ";
console.log(new_str);       //      vinotha        
console.log(new_str.trim());    //vinotha

let str1 = 'hhelloworld';
let str2 = 'world';

console.log(str1.slice(0,4));       //index 4 will not be included      -- hell
str1 = str1.slice(0,5);
console.log(str1);          //hello

str1 = str1.concat(str2);
console.log(str1);          //helloworld

str1 = str1.replace('h','H');
console.log(str1);          //Helloworld  only the first h will be updated to H

console.log(str1.charAt(0));    //H  

