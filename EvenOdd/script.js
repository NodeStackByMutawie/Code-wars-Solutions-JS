
//  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function EvenOdd(value){
//     // if (value%2 == 0) {
//     //    console.log("even")
//     // }else{
//     //     console.log("odd")
//     // }

//     return value%2 ==0?"even":"odd";
// }
// console.log(EvenOdd(7))

// let evenOrOddOptimized = addValue => addValue %2 == 0?"even" : "odd";
// console.log(evenOrOddOptimized(40));



function EvenOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}


function checkNumber() {
    let input = document.getElementById("numberInput");
    let resultDiv = document.getElementById("result");
    let val = input.value;

  
    if (val === "") {
        resultDiv.innerHTML = "Please enter a number first!";
        return; 
    }

   
    let result = EvenOdd(Number(val));
    
    
    resultDiv.innerText = `The number is: ${result}`;
}