
//  you get an array of numbers return the sum of all of the positives ones</p>
//   Example [1,-4,7,12] => 1 + 7 + 12 = 20</h3>
//    note: if there is nothing to sum , the sum is default to 0;

// 1- array loop;
// 2- check if the number is positive or not ;
// 3- inti value = 0;
// 4- add the number to the init value if positive

function sumOfPositive(array){
    // let initValue = 0;
    // for (let i = 0; i < array.length; i++) {
    //    if (array[i] > 0) {
    //      initValue += array[i];
    //    }
    // }
    //  return initValue;
         
    //  using filter();
    return array.filter((x) => x > 0).reduce((acc , current) => acc + current ,0);



}

 console.log(sumOfPositive([1,4,7,-12]))
















