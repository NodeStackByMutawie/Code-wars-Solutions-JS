
// check if empty value return 0
// find the highest number 
// find the lowest number 
// sum all number in the array

function sumArrayWithoutHighestAnLowestNum(array) {
    if (array == null )  return 0;
    // let maxValue = Math.max(...array);
    // let minValue = Math.min(...array);
    // let filterArray = array.filter((x)=> x !==maxValue && x !== minValue);
    // let sumArray = filterArray.reduce((acc,current) => acc + current,0);
    // console.log(sumArray);

    // or
    // let sumTheNumber = array.filter((x) => x !== Math.max(...array) && x !==Math.min(...array)).reduce((acc , current) => acc + current ,0)
    // console.log(sumTheNumber);

    // or 
     return array.sort((a , b) => a - b).slice(1,-1).reduce((acc , current) => acc + current ,0);
}
 //sumArrayWithoutHighestAnLowestNum([1,2,3,4,5,6])
 console.log(sumArrayWithoutHighestAnLowestNum([1,2,3,4,5,6]));
  







