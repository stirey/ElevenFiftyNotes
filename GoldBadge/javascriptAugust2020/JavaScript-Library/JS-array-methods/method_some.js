// some() tests whether at least one element in the array passes the test implemented by the callback function. The callback function will receive 3 arguments, the item, the index, and the full array.
// arr.some(callback(element[, index[, array]])[, thisArg])

const a = [1, 2, 3, 5, 8].some(item => item > 5)
const b = [1, 2, 3, 4, 5].some(item => item > 5)

console.log(a)
console.log(b)

