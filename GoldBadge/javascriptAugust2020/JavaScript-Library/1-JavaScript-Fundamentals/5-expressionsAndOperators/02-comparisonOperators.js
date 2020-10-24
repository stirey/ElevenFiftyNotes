/* 
COMPARISON OPERATORS

5-expressionsAndOperators
    02-comparisonOperators.js
*/

//equality comparison operator
console.log('3' == 3);
console.log(4 == 4);
console.log(3 == '4'); //it cannot do a type coercion because the values are different

//strict equality comparison operator
console.log(3 === 3); //these have the same values and same type
console.log('3' === 3); //triple equal === cares about the value and the type so this will return a false

//not equal comparison operator
console.log('3' != 4); //this wants to see diferrent-ness != is a "not equal" sign
console.log('3' != 3); //

//strict not equal comparison operator (triple inequality)
console.log('3' !== 3); // this is true. They are not the same because the types are different and the !== cares about the types)
console.log(3 !== 3);  //this produces a false because they are the same value and the same type.

//greater than
console.log(3 > 2);
console.log(2>3);

//less than
console.log(2 < 3);
console.log(3<2);

//greater than or equal to
console.log(3 >= 2);
console.log(3 >= 3);

//less than or equal to
console.log(2 <= 3);
console.log(3 <= 2);

//And (both expressions on either side of the operator must be true for 'And' to return true) 
console.log(1<3 && 3>0 );
console.log(2<1 && 3>0);

//Or (either expression on one side of the operator must be true for 'Or' to return true)
console.log(1<2 || 3<0);
console.log(2<1 || 3<0);

/* complex types, you're not comparing the actual values or the actual contents, youre comparing is it the exact same thing.They may look the same but their not the same. Compare this to a set of twins. They look the same but theyre two different people. */
let obj = {key: 'test'};
console.log(obj == {key: 'test'});

console.log(obj == obj);

let arr = [1,2,3,4];
console.log(arr == [1,2,3,4]);
console.log(arr == arr);

