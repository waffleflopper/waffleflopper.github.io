/*---------------------- OBJECTS -----------------*/
var user = {
    name: "John",
    age: 32,
    hobby: "Soccer",
    isMarried: false,
    kids: ["joey", "billy", "joelle"],
    shout: function() {
        console.log("AHHHHH");
    }
};
//basically an associative array it seems

//-----------------//a function inside an object is a method//--------------//

user.favoriteFood = "spinach" //don't have to declare proprties first, can just assign them

var list = [
    {
        username: "andy",
        password: "secret",
    },
    {
        username: "jess",
        password: "asdf1234",
    },
]



/* ------------------- LOOOPING ---------------------- */
var todos = [
    "clean room",
    "brush teeth", 
    "exercise",
    "study js", 
    "eat healthy",
];

var todoLength = todos.length;
for (var i=0; i < todoLength; i++) {
    console.log(i);
}

todos.forEach(function(item, index) {  //todos.forEach(<argument>).  argument we are creating a function that takes an argument
    console.log(item, index);          // function (item, index) wher item is the list item and index is it's numerical location
})

todos.forEach(logTodos); //can do it this way as well with custom function, doesn' thave to be anonymous function

function logTodos(todo, i) {
    console.log("function: " + todo, i);
}

// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }

var counterTwo = 10;
do { // will run this once, then check the condition to see if it get run again
    console.log("do loop: " + counterTwo);
    counterTwo--;
    
} while (counterTwo > 10);

