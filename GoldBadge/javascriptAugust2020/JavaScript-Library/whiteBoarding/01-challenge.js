
//challenge 1
//CHALLENGE #1
// - Write a function that accepts two names as parameters, and then prints the full name to the console.


function names(firstName, lastName ) {
	return `${firstName}, ${lastName}`;
}

console.log(names('Sarah' , 'Tirey'));

//challenge 2
// CHALLENGE #2
// - Write a program that prints all numbers from 0-100
// - for multiples of 6, instead of the number, print 'Fizz'
// - for multiples of 8, instead of the number, print 'Buzz'
// - for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'
// */

for (i = 0; i <= 100; i++) {
	fizzy();
};

function fizzy(){
	if (i % 6 === 0) {
	console.log("Fizz");
  } else {
    (i % 8 === 0) 
	console.log("Buzz");
  } if (i % 6 === 0 && i % 8 === 0) {
      console.log("Fizz Buzz");
  }
}
	

/*
    - CHALLENGE #3
        - Write a function called findPerimeter() that accepts 2 parameters called: length, width.
            - The function should return an interpolated string of 'True: the perimeter is ___' if the perimeter is over 20
            - the function should return an interpolated string of 'False: the perimeter is ___' if the perimeter is under 20
            HINT: P = x + x + y + y
                  P = 2x + 2y
                  P = 2(x + y)
*/

function findPerimeter(length, width){
    let perimeter = (length + length + width + width);
    if (perimeter > 20){
    return (`True: the perimeter is ${'great than twenty.'}`);
} else {
    return(`False: the perimeter is ${'less than twenty.'}`);
}
}

console.log(findPerimeter(10, 2));

// - CHALLENGE #4
// - Create an object literal called library.
//     - the library object will contain 3 properties: name, address, sections
//         - name and address will both hold values that are strings. You can fabricate the information.
//         - sections will be an object that will store a property called collections, which is an array of more objects. You should include at least 2 objects inside the collections array.
//             - the objects stored in the collections array will hold properties of classification, count, and aisle. 
//                 - both the classification and aisle properties should hold strings as values, and count should hold a value that is a number.

let library = {
    name: 'Food',
    address: 'Twenty',
    sections: {
            collections: [
             {classification: 'Thai', count: 10, aisle: 'a'},
             {classification: 'Italian', count: 4, aisle: 'b'},
             {classification: 'Korean', count: 12, aisle: 'c'}   
    ]
}
}
console.log(library.sections.collections[2]);

function name(firstName, lastName){
	return `${firstName}, ${lastName}`;
	
}
console.log(name('Sarah' , 'Tirey'));

function name(firstName, lastName) {
	return `${firstName} , ${lastName}`;
}
console.log(name('Sarah' , 'Tirey'));
//////////////////////////////////////////
for (i = 0; i <=100; i++) {
	fizzy();
};

function fizzy() {
	if (i % 6 ===0) {
	console.log('fizz');
}	else {
(i % 8 === 0)
console.log('Buzz');
} 	if (i % 6 === 0 && i % 8 === 0) {
	console.log('Fizz Buzz');
}
}

for (i = 0; i <=100; i ++) {
	fizzy();
};

function fizzy() {
	if (i % 6 === 0) {
	console.log('Fizz'); 
} 	else {
(i % 8 === 0)
console.log('Buzz');
}	if (i % 6 === 0 && i % 8 === 0 ) {
	console.log('Fizz Buzz');
}
}

////////////////
const calculatePerimeter = function house(length, width){
    const perimeter = (length + length + width + width); 
    
    if (perimeter > 20) {
        return(`True: the perimeter is ${perimeter}.`);
    } else {
        (perimeter < 20)
        return(`False: the perimeter is ${perimeter}.`);
    } 
    }
    
    console.log(calculatePerimeter(2,5));

 
    let library = {
        name: 'Art Movements',
        address: 'ArtMov',
        section: {
            collections:[
     {classification: 'Dada' , count: 10, aisle: 'D'},
     {classification: 'Realism', count: 5 , aisle: 'R'}
    ]
    }
    }
    
    console.log(library.section.collections[1].aisle);
    

    function nameAge(name, age) {
        return `${name}, ${age}`;
    }
    console.log(nameAge('Ansel', 10));

    for (i = 0; i <= 100; i++) {
        fizzy();
    }
     
    function fizzy() {
        if (i % 3 === 0) {
        console.log('Fizz');
    }	else {
        (i % 5 === 0)
        console.log('Buzz');
    }	if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizz Buzz');
    }
    }
    

    const calculateRightTriangle = function isRightTriangle(side, base, hypotenuse){
        const RightTriangle = (side**2 + base**2 === hypotenuse**2);
     
        if (side**2 + base**2 === hypotenuse**2) {
        console.log('true');
    }	else {
    (side**2 + base**2 || hypotenuse**2) 
    console.log('false');
    }
    }
    console.log(calculateRightTriangle(1, 2, 3));
    
    
    let netflix = {
        id: 20,
        name: 'Fruity Shows',
        seasonInfo: {
            episodeInfo [
                {episodeNumber: 1, episodeName: 'Apples'},
                {episodeNumber: 2, episodeName: 'Bananas'},
                {episodeNumber: 3, episodeName: 'Kiwi'}
    ]
    }
    };
    
































































































