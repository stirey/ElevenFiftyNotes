//The find() method is similar to the findIndex() method, however, it returns the value of the first element which satisfies the provided callback function as supposed to its index. If no element satisfies the callback then undefined is returned.

//arr.find(callback(element[, index[, array]])[, thisArg])

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ]
  
  const result = inventory.find( ({ name }) => name === 'cherries' )
  
  console.log(result)