function sayHello () { // function delcaration
    console.log("hello");
}
sayHello();

//function expression
//could also do var sayBye = function byebye() {} but use would be limited;
var sayBye = function() { //called an anonymous function. it's stored in variable but otherwise can't be accessed
    console.log("Bye");
}
sayBye();


/*-----------functions arguments/parameters-----------------*/
function sing(song) {
    console.log(song);
}
sing("laaa deeee daa");
sing("AHHHHHHHHH\nTEEEEEEEEE");


/* ------------------------*/
function multiply(a, b) {  // a and b are parameters
    return a * b;
}
//alert(multiply(3,4));  // 3 and 4 are arguments

/* -------------EXERCISE 5 FUNCTIONS--------------- */

function checkDriverAge() {
    var age = Number(prompt("What is your age"));

    if(age < 18 ) {
        alert("sorry, you are too young to drive this car, powering off");
    } else if (age > 18) {
        alert("powering on, enjoy the ride!");
    } else if (age === 18) {
        alert ("Congratulations on your first year of driving, Enjoy the ride!");
    }
}

var checkDriverAge2 = function() {
    var age = Number(prompt("What is your age"));

    if(age < 18 ) {
        alert("sorry, you are too young to drive this car, powering off");
    } else if (age > 18) {
        alert("powering on, enjoy the ride!");
    } else if (age === 18) {
        alert ("Congratulations on your first year of driving, Enjoy the ride!");
    }
}

function checkDriverAge3(age) {
    if(age < 18 ) {
        return "sorry, you are too young to drive this car, powering off";
    } else if (age > 18) {
        return "powering on, enjoy the ride!"; 
    } else if (age === 18) {
        return "Congratulations on your first year of driving, Enjoy the ride!";
    }
}

/* -----------Arrays-------------------- */

var list = ["tiger", "cat", "bear", "bird"];
var nestedList = [
    ["tiger", "bear", "cat"],
    ["apple", "orange", "banana"],
    ["desk", "lamp", "chair"]
];
var numbers = [1, 2, 3, 4, 5];
var bools = [true, false, true, true];
var funcList = [checkDriverAge, checkDriverAge2, checkDriverAge3];
var mixedList = ["apples", 3, undefined, multiply, true];

/*
list
    (4) ["tiger", "cat", "bear", "bird"]
list.shift();
    "tiger"
list
    (3) ["cat", "bear", "bird"]
list.pop();
    "bird"
list
    (2) ["cat", "bear"]
list.push("elephant");
    3
list
    (3) ["cat", "bear", "elephant"]

var something = list.concat(["item", "item2"]);

*/

/* ------------ OBJECTS ----------------*/