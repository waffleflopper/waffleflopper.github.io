//reference type
/*
Objects are reference types.  They are non-primitive and not defined by the programming language
Created by the programmer.
*/
[] === []   //false  -- an array is an object at the end of the dya

[1] === [1]   //false

var object1 = { value: 10 };
var object2 = object1;           // REFERENCES object1, doesn't duplicate it.
var object3 = {value: 10};

object1 === object2;  // true  because they're the same object

object1 === object3;  // false


object1.value = 15;

object2.value; //15

object3.value; // 10

//context vs scope
function b() {  //scope is made from curly brackets
    let a = 5;
}

//context tells you where we are within the object

console.log(this);  // the window object.
this === window; //true

function a() {
    console.log(this);  // stil window
}

this.a(); //runs the function


const object4 = {
    a: function() {
        console.log(this); 
    }
}

object4.a(); // this is now the object.

//instantiation

// when you make a copy of an object and reuse the code

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`weeeeee I'm a ${this.type}`);
    }
};

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Burt', 'Summoner');





//es6 and react
//classical inheritance

/* var Player = function(name, type) {
    this.name = name;
    this.type = type;
}

Player.prototype.introduce = function() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}.`);
}

var wizard1 = new Player('Shelly', 'headler');
var wizard2 = new Player('Burt', 'summoner');

wizard1.play = function() {
    console.log(`weeeeeeeeee I'm a ${this.type}`);
}

wizard2.play = function() {
    console.log(`weeeeeeeeee I'm a ${this.type}`);
} */