/* 
LOOPS

3-loops
    01-forLoops.js

*/

//allows you to repeat code all at once, versus functions allow you to repeat code whenever you order a reuse of code you've already written

/* 
Loops offer a quick and easy way to do something repeatedly

There are many different kinds of loops buty they all do roughly the same thing:
    for statement
    do while
    while
    labeled
    break
    continue
    for in
    for of
    .forEach
    .map
*/

//loop structure: a) creation of an indexing variable b) a run condition c) change to the indexing variable

//count to 10 from 0 and log the numbers, make the index value first(i), then check the run condition (i <=10), then you increment, add 1 to i(++)
//for (let i = 0; i <= 10; i++){
    //console.log(i);
//}

//loops can run infinitely- it keeps going and never stops and this would break your code
//for (let i = 0; ; i++){
  //  console.log(i);
//}

//counts to -25 by -3, starting from 2, logs the numbers
for (let i = 2; i >=-25; i = i - 3){
    console.log(i);
}

//display the letters in a name individually
let name = 'Kinkade';

for (let i = 0; i < name.length; i++){
    console.log(name[i]); //name is a string here, you can think of this as an array, i can be used to access those individual characters in a string
}

//for loops can use lots of variable:
//math is a built in javascript object with a random method and random gives us back a number between 0 and 1
let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment ){
    console.log(i);
}


let i;
for (i = 0; i <= 10; i++){
    console.log(i);
  
};
    
function countingToTen(){
  console.log("The number is even.");
}
////////////////////////////


for (i = 0; i <= 10; i++) {
    console.log(countingToTen(i));
};

function countingToTen(){
    if ( i % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.")
    } 
}


//////////////////////////
let i;
for ( {
    console.log(countingToTen());
}
function countingToTen(){
    i = 0; 
    i <= 10; 
    i++;
    if ( i % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.")
    } 
}

