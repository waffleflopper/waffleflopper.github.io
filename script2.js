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