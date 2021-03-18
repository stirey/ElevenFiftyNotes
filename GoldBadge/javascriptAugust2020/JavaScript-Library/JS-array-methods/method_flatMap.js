//The flatMap() method applies a function to each element of the array and then flatten the result into an array. It combines flat() and map() in one function.
//arr.flatMap(callback(currentValue[, index[, array]])[, thisArg])

const array = [[1], [2], [3], [4], [5]]

const a = array.flatMap(arr => arr * 10)


// With .flat() and .map()
const b = array.flat().map(arr => arr * 10)

console.log('flatMap', a)
console.log('flat&map', b)