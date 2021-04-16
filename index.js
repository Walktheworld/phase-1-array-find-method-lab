
//*my code */
// function superbowlWin(record){

//   let val = record.find(record =>record.result === "W")

//   if (val && true){
//     return val.year
//   }
//   else (val && false)

// }

// Pair Programming with christine** she helped me realize that i dont need 
// the boolean in my if statement sense the find function is a boolean in its self.


function superbowlWin(record){

  let val = record.find(record =>record.result === "W")

  if (val){
    return val.year
  }
  else (false)
  
}










             



                        
























// function superbowlWin(arr) {
//   for(const value in arr){
//     if (arr[value]){
//       return(arr[value])
//     }
//   }
//   return arr.find(superbowlWin)
// }
// const record= {year,result}

// function superbowlWin (collection) {
//   for (const result of collection) {
//     if (result.record === 'W') {
//       console.log(result.year);
//     }
//   }
// }

// function superbowlWin(oneArg) {
//   if (element.find());
// }


// function superbowlWin(isWin) {
//   if(isWin.arr.result==='W'){
//     return (arr.find(isWin).year)
//   }
// }



// function superbowlWin(array) {
//     while (array= array.result) {
//       if (array.result === 'W') {
//         return result[0];
//       }
//     }
//   }
// *****

//   function isPrime(element, index, array) {
//     let start = 2;
//     while (start <= Math.sqrt(element)) {
//       if (element % start++ < 1) {
//         return false;
//       }
//     }
//     return element > 1;
//   }
  
//   console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
//   console.log([4, 5, 8, 12].find(isPrime))