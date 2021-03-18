// The forEach() method executes a provided function once for each array element.
//arr.forEach(callback(currentValue [, index [, array]])[, thisArg])

const array = [1, 2, 3, 4, 5]
array.forEach((item) => console.log(item))

//There are 2 important considerations when using forEach()
// There is no way to stop or break a forEach() loop other than throwing an exception.
// forEach() expects a synchronous callback, it won’t wait for promises to be resolved.

let ratings = [5, 4, 5]
let sum = 0

let sumFunction = async function (a, b)
{
  return a + b
}

ratings.forEach(async function(rating) {
  sum = await sumFunction(sum, rating)
})

console.log(sum)

//Even though we would have expected the variable sum to have accumulated all the values in the array and have a value of 14, the output was 0 as the forEach() statement ended without awaiting for the promises, and thus the console.log statement was executed before the variable sum was updated. So be very aware of this situation as it can lead to your code producing unexpected results.