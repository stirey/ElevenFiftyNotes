//these are amazing for working through objects and arrays
/* 
For IN LOOPS
In does not require that the thing you loop through be numbered
*/
// lets item represent the "keys" in each object
//item is a string representing the "key" name (keys are name, awesome, degree, week)
let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

//for (item in student){
//    console.log(item);
//    console.log(student[item]);
//}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

//let's write a for-in loop that capitalizes the first letter of a name

let instructor = 'pAul';
let capName; 
//n equals the numbers of the posiition of the letters in pAul
for (n in instructor){
    if (n == 0){
        capName = instructor[n].toUpperCase();
    }   else {
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);


