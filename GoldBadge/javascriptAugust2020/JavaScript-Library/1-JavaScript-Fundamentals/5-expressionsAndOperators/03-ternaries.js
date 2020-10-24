/* 
TERNARIES- ternary expressions do not have to provide a default case

5-expressionsAndOperators
    03-ternaries.js
*/
//setup a ternary based on some sort of comparison operator i use
let x = -6;
//x > 0 is a conditional                            ('x is negative') is an "else clause"
x > 0 ? console.log('x is positive') : console.log('x is negative');


if (x > 0){
    console.log('x is positive');
} else {
    console.log('x is negative');
}

let greeting = 'salutations!';
//greeting.length > 10 is the conditional
if (greeting.length > 10){
    console.log('that is a long greeting!');
} else if (greeting.length == 10){
    console.log('your greeting is exactly 10 characters!');
} else {
    console.log('what a normal greeting!');
}
//to turn the above into a ternary...see below
greeting.length > 10 ? console.log('that is a long greeting!') :
greeting.length == 10 ? console.log('your greeting is exactly 10 characters!') :
console.log('what a normal greeting!');

//ternaries are a fast way to do checks
