//1        //2
function hello() {
    //3
    console.log("Hello World!");
}

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();
//function with one parameter
function numberEntered(num){
    console.log("The number you entered was: ", num);
}

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}
//Two Parameters example
addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);


//write a function to display the difference of two numbers
//Declare it
function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

//Call it
subtractTwoNumbers(5, 7);
//the retrun keyword example
function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;

    return myAverage; 
}
console.log(getMyBattingAverage(250, 91)); // = 0.364

//return the sum of two numbers
function sumOfTwoNumbers(firstNum, secondNum){
    console.log(firstNum + secondNum);
}
sumOfTwoNumbers(2, 2);

//another possible solution
function add(x, y){
    let sum = x + y;
    return sum; // or return x + y;
}
console.log(add(1,1)); 

//Write a function with a first name and a last name as parameters. Then return the whole name.
function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName; // Or return first + " " + last;
}
console.log(fullName("Paul", "O'Connor"));

//Write a function to calculate and return the totalPrice of a quantity of products, including 7% tax.
function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; // Or return 1.07 * quantity * price;
}
console.log(calculatePriceIndiana(17, 5));

//Explain how the return statement works in a function. This is often asked at interviews. Know it.
