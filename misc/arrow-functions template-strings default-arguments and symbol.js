const name = "Sally";
const age = 34;
const pet = "dog";

//old way
const greeting = "Hello " 
+ name + " you seem to be doing " + greeting + "!";

// can also use " and ' with no problem.
const greetingBest = `Hello ${name} you seem to be ${age-10}, what a lovely ${pet} you have.`;

//---------------------default arguments-------------
function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}, what a lovely ${pet} you have.`;
};
//good to have a function work if someone doesn't provide args

/* ------------------- JS Type: Symbol -----------*/

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym3 === sym2; //(returns false)

//symbols are completely unique, there will never be conflict
//sometimes used for object properties when you have and obj
//with hundreds or thousands of properties to make sure they
//dont collide and cause bugs



/*--------- ARROW FUNCTIONS --------------*/
//these are all the same
function add(a, b) {
    return a + b;
}

const add = (a, b) => a + b;
// for single line return use ^^^
//for more than just a return use below
const add = (a, b) => {
    return a + b;
}