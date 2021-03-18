// every() method is similar to some(), but it tests whether all the elements in the array pass the test implemented by the callback function. 
//  arr.every(callback(element[, index[, array]])[, thisArg])

const a = [10, 9, 8, 7, 6].every(item => item > 5)
const b = [7, 6, 5].every(item => item > 5)

console.log(a)
console.log(b)