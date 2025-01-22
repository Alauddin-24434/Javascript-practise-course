// Task 1: Sum of All Elements
// Take an array of numbers and calculate the total sum of all elements using forEach.

const numbers = [1, 2, 4, 5, 6, 7, 8];

function sumAllNumebr(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(sumAllNumebr(numbers));

// Task 2: Count Even and Odd Numbers
// Create a function that takes an array and counts how many numbers are even and how many are odd. Print the counts.

const evenOddNumbers = [1, 2, 4, 5, 6, 7, 8];

function evenOddCount(arr) {
  let even = 0;
  let odd = 0;

  arr.forEach((elem) => {
    if (elem % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  });

  console.log(`${even} number even of ths array`);
  console.log(`${odd} number odd of this array`);
}

evenOddCount(evenOddNumbers);

// Task 3: Find Maximum and Minimum
// Write a function to find the maximum and minimum numbers in an array using forEach.

const maxMinNumbers = [1, 2, 4, 5, 6, 9, 7, 8];

function maxMinNum(arr) {
  let max = -Infinity;
  let min = Infinity;
  arr.forEach((ele) => {
    if (ele > max) {
      max = ele;
    } if(ele < min) {
     min=ele;
    }
  });

  console.log(`Maximum number is ${max}`);
  console.log(`Minmum number is ${min}`);
}

maxMinNum(maxMinNumbers);


