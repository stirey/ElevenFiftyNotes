//The filter() method creates a new array with all the elements that pass the test implemented by the callback function.
//arr.filter(callback(element[, index, [array]])[, thisArg])

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return num > 1
}

console.log(array.filter(isPrime))