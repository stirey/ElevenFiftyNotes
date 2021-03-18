//The map() method creates a new array populated with the results of the callback function for each element in the array. Similar to the other methods, the callback function will receive 3 arguments, currentValue, index, and array. As is with the case of reduce(), the callback is only invoked for indexes of the array which have assigned values (including undefined).
//Always be careful when using map(), remember that on each call will create a new array, if you don’t actually need the array and you are simply trying to iterate, use forEach() or for-of instead.
// arr.map(callback( currentValue[, index[, array]])[, thisArg])

const numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map(value => value * 2)

console.log(doubled)

//map() will create a new array, so the following is a consequence of that:
//Even though each array contains the exact same elements, they are not the same reference and thus the numbers === numbers2 resolves to false.
const numbers = [1, 2, 3, 4, 5]
const numbers2 = numbers.map(value => value)
console.log('numbers', numbers)
console.log('numbers2', numbers2)
console.log(numbers === numbers2)

