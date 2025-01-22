


// sum all array with reducej


const array=[1,3,5,6];

function sumArray(arr){
    const initalValue=0;

  return arr.reduce((acc, curentValue)=>{
      return curentValue +acc
    },initalValue)

}


console.log(sumArray(array))



//  even number array print

const evenOddNumbers=[1,2,4,5,6,9,7,8]
function evenNumber(arr){
    return arr. reduce((acc, currentVal)=>{
        if(currentVal % 2===0) {
            acc.push(currentVal)
        }

      return acc;
    },[])
}

console.log(evenNumber(evenOddNumbers))



