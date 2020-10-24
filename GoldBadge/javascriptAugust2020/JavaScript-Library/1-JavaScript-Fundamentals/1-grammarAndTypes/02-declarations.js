/*
VARIABLES- a bucket to store something

1-grammarAndTypes
*/

//What is a variable? The bucket is "a", the contents are "1"

var a = 1;
var b = 2;
console.log(a+b);

//notes on naming variables:
//1) a variable must being with a letter, underscore, or dollar sign
//2) numbers may follow the above characters, but cannot come first
//3) Javascript is case sensitive--'hello' and 'Hello' are different variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a variable

Initializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value. This can be after initialization.
*/

var x;
console.log('Declaration 1:', x) //undefined (undefined bucket content-you made a variable but haven't filled it yet)

x=10;
console.log('Initialization 1:', x); //10

x=33;
console.log('Assignment 1:', x); //33

var y;
console.log(y);

y = 'hello';
console.log(y);

y='you are my friend'
console.log(y);

/*
Var, Let, and Const:

Var = 'old' keyword for variables (buckets without lids)
Let = 'new' keyword for variables (introduced with ES6) (buckets without lids, use LET over VAR because it is more predictable)
const = also 'new', declares unchangeable variables (you can't dump the contents out and replace it, think of it as a bucket with a lid)
*/

let tonight = 'great!';
const elevenFifty = 'Amazing';
console.log(tonight, elevenFifty);

tonight = 'lovely';
console.log(tonight, elevenFifty);

//elevenFifty = 'Super!';




