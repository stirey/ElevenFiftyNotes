/* 
SWITCH STATEMENTS- a switch exits from a case statement
*/

let friend = 'Tom';

switch(friend){
    case 'Tom':
        console.log('Hey Tom, when will you bring sourdough bread for me?');
        break;
    case 'Kenn':
        console.log('Hey Kenn, do you own a wolf in your backyard?');
        break;
    case 'Alecx':
        console.log('Hey Alecx, how many Magic cards to you own?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`); //this is string interpolation       
}

//without the breaks all of the code gets run.

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yep is not a string or a number');    
}