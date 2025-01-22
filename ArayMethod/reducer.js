


// sum all array with reducej


const array=[1,3,5,6];

function sumArray(arr){
    const initalValue=0;

  return arr.reduce((acc, curentValue)=>{
      return curentValue +acc
    },initalValue)

}


console.log(sumArray(array))