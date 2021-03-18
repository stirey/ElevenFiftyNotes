// reduce() method executes a callback function once for each assigned value present in the array, taking 4 arguments
//Arguments:  accumulator, currentValue, currentIndex, array
// The first time the callback is called, accumulator and currentValue can be either the initialValue if provided, and the first value in the array if not
// arr.reduce(callback( accumulator, currentValue[, index[, array]])[, initialValue])
//The reduce() function is great and it has several uses like sum all the values of an array or in an object array, counting for particular items in the array, grouping objects, merging arrays contained in array of objects, removing duplicates, etc.

[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue)

const initialValue = 10
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue, initialValue)