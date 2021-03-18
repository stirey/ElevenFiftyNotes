//The fill() method changes all the elements in an array to a static value, from a start index (default 0) to an end index (default array.length). The updates will happen in place and will return a reference to the same array.
//arr.fill(value[, start[, end]])

const original = [1, 2, 3]
const result = original.fill(5)
console.log('original', original)
console.log('result', result)
console.log(original === result)