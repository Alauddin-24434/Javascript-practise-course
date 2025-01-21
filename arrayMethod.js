
// 1. JavaScript Array length
// The length property returns or sets the number of elements in an array.
const city=["California", "Barcelona", "Paris", "Kathmandu"];

console.log(city.length);


// 2. JavaScript Array concat()

// The concat() method returns a new array by merging two or more values/arrays.

// let primeNumbers = [2, 3, 5, 7]
// let evenNumbers = [2, 4, 6, 8]


// const joinedArrayes=primeNumbers.concat(evenNumbers);

// console.log(joinedArrayes)

// 3. Javascript Array constructor
// The constructor property returns the constructor function for the array.

let languages = ["JavaScript", "Java", "Python"];

const constructor= languages.constructor;

console.log(constructor)

// 4.JavaScript Array.every()

// The every() method checks if all the array elements pass the given test function.
const ageArray= [19, 23, 18, 56,70]

function checkAdults(age){

        return age.every((el)=> ele =>18);


}

// const res= ageArray.every(checkAdults)
console.log(checkAdults(ageArray))

// 5. JavaScript Array includes()
// The includes() method checks if an array contains a specified element or not.

const progmmingLanguage = ["JavaScript", "Java", "Python"];

const lanRsult= progmmingLanguage.includes("Java");

console.log(lanRsult)

// 6. Javascript Array join()
// The join() method returns a new string by concatenating all of the elements in an array, separated by a specified separator.

let message = ["JavaScript", "is", "fun."];

const msgRes= message.join(" ");

console.log(msgRes)

// 7. JavaScript Array reverse()
// The reverse() method returns the array in reverse order.
// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.reverse());

//8.  Javascript Array reduce()
// The reduce() method executes a reducer function on each element of the array and returns a single output value.
// function joinString(accumuletor, currentValue){

//     return accumuletor + currentValue;


// }

// const joinedString= message.reduce(joinString);

// console.log(joinedString)
// let numbers = [1, 2, 3, 4, 5];

// function evenNumbers(arr){
//   return arr.reduce ((acc, value)=>{
//         if(value %2 ===0){
//             return acc+ value
//         }
//         return acc;
//     },0)
// }

// console.log(evenNumbers(numbers))
let numbers = [1, 2, 3, 4, 5];


function evenNumbersArry(arr){
    return arr.reduce((evenArray, value)=>{
        if(value % 2===0){
          evenArray.push(value) 
        }
        return evenArray;
    },[])
}

console.log(evenNumbersArry(numbers))