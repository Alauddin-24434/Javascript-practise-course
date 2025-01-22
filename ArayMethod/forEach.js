// Task 1: Sum of All Elements
// Take an array of numbers and calculate the total sum of all elements using forEach.


const numbers= [1,2,4,5, 6,7,8];


function sumAllNumebr(arr){
    let sum= 0;
   arr.forEach(element => {
     sum += element;
    });
    return sum;
}

console.log(sumAllNumebr(numbers))