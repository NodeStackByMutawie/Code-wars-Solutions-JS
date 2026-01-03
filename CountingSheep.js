
// consider an array/list of sheep where some sheep may missing 
// from their place. We need a function that counts the number of sheep present in the array (true means present).

//  don't forget to check for bad values like null/undefined

// create a function named countingSheep that takes one parameter sheep (an array of boolean values).
//  initialize a variable count to 0 to keep track of the number of present sheep.
//  use a for loop to iterate through each element in the sheep array.
//  inside the loop, check if the current element is true (indicating a present sheep).
//  if it is true, increment the count variable by 1.
//  after the loop, return the count variable which represents the total number of present sheep.


function countingSheep(sheep) {
    if (sheep == null || sheep == undefined) {
        return 0;
    }

    let count = 0;
    // for (let i = 0; i < sheep.length; i++) {
    //     if (sheep[i] == true) {
    //        return count += 1;
    //     }
    // }

    sheep.map((s)=>{
        if (s === true)count += 1;
    });
    return count;
}
          














