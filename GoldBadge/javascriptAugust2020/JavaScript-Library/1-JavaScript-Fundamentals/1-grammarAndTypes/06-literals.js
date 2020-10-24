/* 
LITERALS

1-grammerAndTypes
    06-literals.js
*/

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//                  0           1       2           3           4
console.log(weekDays.toString());
console.log(weekDays[3]);

let soup = {
    a: 'chicken noodle', //the key is "a", the value is chicken noodle
    b: 'tomato',
    c: 'beef and barley'
}
console.log(soup.c);

//array and object literals can hold primitive and 'complex' types (arrays, objects, functions)
let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
//                       0    1        2        3           4           5  
console.log(complexArrLiteral[5]);   
console.log(complexArrLiteral[3]);

let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', arr: [1,2,3], obj: {key: 'test'}, func: function(){return 'yes'}};

console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr);
