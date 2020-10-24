/* 
ARRAYS
 */

 //WHAT IS AN ARRAY?
 //has [] brackets
 //can hold multiple datatypes
 //Array can list data types in an ordered, numbered way

 let students = ['Tony', 'Marshall', 'Rhys', 'Ray',23, true, ['Ryan', 'Iesha']];
// hidden keys:     0       1           2       3   4   5         6
 console.log(typeof students); // typeof doesn't tell me my variable is an array -> object
 console.log(students instanceof Array); //instances of tells me my array is an array
console.log(students[2]);
console.log(students[1]);
console.log(students[6]);

let name = students[6][1];
console.log(`Hello ${name},you look nice today.`);

//recall for-of loop -> gives the values of the array
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (f of food){
    console.log(f+` is amazing!`);
}

// //ARRAY METHODS- built in objects to javascript-lets us add elements to an array that already exist
// food.push('Pizza');//added to the end of our array
// console.log(food);
// food.splice(1, 1, 'Bananas');
// console.log(food);
// food.splice(2, 0, 'Sweet Potato Pie');//asks for an insertion point, how many things to remove, then
// //the items or items to add
// console.log(food);
// food.pop();//removes the last element of an array
// console.log(food);

// food = food.slice(2, 5);// the first number is the first element to slice fromthe array, while the 
// //second number is the stop position (not to be included)
// console.log(food);

//forEach allows us to iterate with loops specifically, and we can directly grab both the elements and
//their index numbers

//food.forEach((f) => console.log(f));//looping through the elements of the array without using the traditional for of loop

// food.forEach((food, index) => {
//     console.log(food);
//     console.log(index);
// })

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}`);//you can grab the arguments and combine themin a meaningful way
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

// movies.push('The Force Awakens');
// console.log(movies);
// movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
// console.log(movies);

movies.push('The Force Awakens');
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');

movies.forEach(movie => console.log(movie));
console.log(movies.length);

//let's do the following with an array:
//we will check if we are working with an array
//flip the values within th earray(what was in index 4 is now in 0, 3, to 1, etc.)
//using a method only, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);
console.log(arr);

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}


let favoriteMovie = {
    nameOfMovie: 'The Goonies',
    runTime: 114,
    characters: [
      {name: 'sloth', age: '60', item: 'babyruth', item: 'treasure'}, 
      { name: 'Data', age: '10', item: 'computer', item: 'gadget'} 
    ],
    genre: 'Comedy'
  }
  
  console.log(favoriteMovie);