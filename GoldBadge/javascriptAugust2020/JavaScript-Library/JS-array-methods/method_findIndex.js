//The findIndex() method returns the index of the first element in the array that satisfies the provided callback function. Otherwise, it returns -1, indicating that no element passed the test. Unlike with other methods, findIndex() will execute the callback function even for indexes with unassigned values.
//arr.findIndex(callback( element[, index[, array]] )[, thisArg])

function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return num > 1
  }
  
  console.log([4, 6, 8, 9, 12].findIndex(isPrime))
  console.log([4, 6, 7, 9, 12].findIndex(isPrime))