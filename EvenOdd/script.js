
//  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function EvenOdd(value){
    // if (value%2 == 0) {
    //    console.log("even")
    // }else{
    //     console.log("odd")
    // }

    return value%2 ==0?"even":"odd";
}
console.log(EvenOdd(8))