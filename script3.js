var userInput = document.getElementById("userInput");
var enterBtn = document.getElementById("enter");
var ul = document.getElementById("myList");

function inputLength() {
    return userInput.value.length;
}

function createListElement() {
    //create the li
    var li = document.createElement("li");
    li.addEventListener("click", checkItem);
    li.appendChild(document.createTextNode(" " + userInput.value));
    //create the delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", deleteItem);
    deleteBtn.appendChild(document.createTextNode("Delete"));
    //append the button to the li
    li.insertBefore(deleteBtn, li.firstChild);
    //append the li to the ul
    ul.appendChild(li);
    userInput.value = "";
}

function addToListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addToListAfterEnter(event) {
    if (event.keyCode === 13 && inputLength() > 0) {
        createListElement();
    }
}

enterBtn.addEventListener("click", addToListAfterClick);
userInput.addEventListener("keypress", addToListAfterEnter)

//add event listeners to existing li's
//strike through on click
function checkItem(evt) {
    var classList = evt.target.classList;
    if (classList.contains("done")) {
        classList.toggle("done")
    } else {
        evt.target.classList.add("done");
    }
}

var lis = document.getElementsByTagName("li");

for(i=0; i<lis.length; i++) {
    lis[i].addEventListener("click", checkItem);
}

//add delete buttons to existing lis
//delete on click
function deleteItem(evt) {
    evt.target.parentElement.remove("li");
}

var buttons = document.querySelectorAll("li button");

for (i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", deleteItem);
}