/* 
FUNCTIONS
*/

//General ideas: at their broadest level, functions do the following:
//1) they take some input which the function will handle/process
//2) they process the input given to them
//3) they usually, but not always, return some value
// //4) they can be invoked (used/called) as many times as we want, cutting down on code repetition
// //not every function returns a value
// //example one:
// function newFunc(num){
//     return num + 1;
// }

// console.log(newFunc(7));
// console.log(newFunc(10));
// console.log(newFunc(11));
// console.log(newFunc(-2));

// //example two:
function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`; //string interpolation
}

console.log(sentence('Jonathan', 'Huer'));
// console.log(sentence('Tyler', 'Shelton'));
// let superImportantSentence = sentence('Nicky', 'Disborough');
// console.log(superImportantSentence);

// //let's build a function that takes a complex type--an array in this case, and console.logs each
// //item in the input array

// let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
// let arr2 = [5,6,7,8,9,10];

// function iteratorFunc(inputArr){
//     for (let element of inputArr){
//         console.log(element);
//     }
// }
// iteratorFunc(arr);
// iteratorFunc(arr2);

// function count() {
//     for (number = 1; number <= 10; number++) {
//       console.log(number);
//     }
//   }
// count();
// //function/loops challenge
// function countingToTen(){
//     for (number = 1; number <= 10; number++){
//       console.log(number);
//     }
    
    
//      if (number % 2 === 0) {
//          console.log("The number is even");
//        } else {
//          console.log("The number is odd.")
//        }
//      };
 
  
//  countingToTen();

for (i = 0; i <= 10; i++){
   console.log(i);
};

function countingToTen(i) {
    if ( i % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.")
    } 
}
countingToTen(i);



    

 
  