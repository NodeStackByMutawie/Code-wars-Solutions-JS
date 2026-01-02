
// convert-number to reversed array of digits

// given  a random non negative number you have to return the digits
//  of the number within an array in reverse order


// change number to string;
// split string to array of characters;
// change the string in array to number;
// reverse the array;

function digitize(n) {
    // return n.toString().split('').map((m)=> Number(m)).reverse()
     return n.toString().split('').map(Number).reverse()
}
console.log(typeof(digitize(12345)));
console.log(digitize(12345));
