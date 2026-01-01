
// write a function repeatStr which  repeats a given string 'n' times;
//1- create a function named repeatString that takes two parameters: n (the number of times to repeat) and s (the string to be repeated).
//2- create an empty string variable named result to store the final repeated string.
// 3- use a for loop that runs from 0 to n-1 to repeat the string n times.
// 
function repeatString(n , s){
//  let result = '';
//  for (let i = 0; i < n; i++) {
//      result += s;
    
//  }
//  return result;
// or
// Using the built-in repeat method;
    return s.repeat(n);
}

console.log(repeatString(0, ' abc ')); // Output: '';
console.log(repeatString(2, 'hello - ')); // Output: 'hello - ';
console.log(repeatString(5, ' test -')); // Output: '';
