let noun1 = 'cat';
let adjective = 'grey';
let noun2 = 'dog';
let verb = 'run';
let noun3 = 'beef';


console.log(`The world's first ${noun1} was a very ${adjective} ${noun2} who loved to ${verb} while eating ${noun3} for every meal.`);

let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];


///////////////////////////////////////////////////////////
// Accessing a Process Object //

let initialMemory = process.memoryUsage().heapUsed;
// When a user initiates the program with an additional cmd line argument, word will be assigned that value. In the terminal, run node node.js blue and it would result in word being assigned 'blue'
let word = process.argv[2];

console.log(`Your word is ${word}`)

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time 
for (let i = 0; i < 1000; i++){
  wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)