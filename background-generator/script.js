/* 

get cssOutput area to print css code for user
get the colors from the input

add a listener that changes the backgrounds linear-gradient on input
for each color

output css code to cssOutput (create a textnode and shove it in that bitch)

*/

var css = document.querySelector("#cssOutput");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var body = document.querySelector("#gradient");

css.textContent = "background: linear-gradient(to right, " + color1.value + ", " + color2.value + ");";

function changeBG() {
    body.style.background = "linear-gradient(to right, "
     + color1.value + ", " + color2.value + ")";

     css.textContent = "background: " + body.style.background + ";";
}

color1.addEventListener("input", changeBG);

color2.addEventListener("input", changeBG);
