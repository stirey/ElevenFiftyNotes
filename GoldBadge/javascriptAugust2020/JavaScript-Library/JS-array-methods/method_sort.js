// The sort() function is very common and simply allows us to sort the elements of an array in place and returning the sorting array. The default sort order is ascending. The complexity and performance of this method cannot be guaranteed as it depends on the implementation.
//arr.sort([compareFunction])

const numbers = [4, 2, 5, 1, 3]
numbers.sort((a, b) => a - b)
console.log(numbers)


//Always remember that the sorting happens in place, so:
const numbers = [4, 2, 5, 1, 3]
const numbers2 = numbers.sort((a, b) => a - b)

console.log('numbers', numbers)
console.log('numbers2', numbers2)
console.log(numbers === numbers2)

//The sort function will modify the existing array, and return a reference to the same array, and thus the original array and the returned array will be the same.