// Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.

function noOfVowels(line){
    let count = 0;
    line = line.toUpperCase();
    for(let i=0; i<line.length; i++){  // u can also do with for of loop
        let character = line.charAt(i);
        if(character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U'){
            count++;
        }
    }
    return count;
}

console.log(noOfVowels("vinotha gowtham"));

// create a arrow function for the same

const vowelCounter = (line) => {
    line = line.toUpperCase();
    let count = 0;
    for(let character of line){
        if(
            character == 'A' || 
            character == 'E' ||
            character == 'I' ||
            character == 'O' ||
            character == 'U'
        ){
            count++;
        }
    }
    return count;
}

console.log(vowelCounter("i am vintoha from tiruppur"));