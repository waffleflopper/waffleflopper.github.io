let userInput = document.querySelector("#userInput");
let enterBtn = document.querySelector("#enter");
let ul = document.querySelector("#myList");

const inputLength = () => userInput.value.length;

/* old - hmm which is better?
const checkItem = (evt) => {
    const classList = evt.target.classList;
    if (classList.contains("done")) {
        classList.toggle("done");
    } else {
        classList.add("done");
    }
}
*/
//toggles "done" css class or adds it if not already there
const checkItem = (evt) => evt.target.classList.toggle("done");

const deleteItem = (evt) => evt.target.parentElement.remove("li");

const createListElement = () => {
    //create li
    let li = document.createElement("li");
    li.addEventListener("click", checkItem);
    li.appendChild(document.createTextNode(` ${userInput.value}`));

    //create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", deleteItem);
    deleteBtn.appendChild(document.createTextNode("X"));
    deleteBtn.classList.add("deleteBtn");

    li.insertBefore(deleteBtn, li.firstChild);

    ul.appendChild(li);

    userInput.value = "";
}

const addToListAfterClick = () => (inputLength() > 0) ? createListElement() : false;

const addToListAfterEnter= (evt) => (inputLength() > 0 && evt.keyCode === 13) ? createListElement() : false;


/* ------  Adding Listener Functions ------ */

const addListenersToInputArea = () => {
    //add our event listeners to the input area
    enterBtn.addEventListener("click", addToListAfterClick);
    userInput.addEventListener("keypress", addToListAfterEnter);
}

const addListenersListItems = () => {
    //add listeners to our list items for strikethrough
    let listItems = document.querySelectorAll("li");

    for(i=0; i<listItems.length; i++) {
        listItems[i].addEventListener("click", checkItem);
    }
}

const addListenersToDeleteButtons = () => {
    let buttons = document.querySelectorAll("li button");

    for (i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", deleteItem);
    }
}


//onLoad shit

addListenersListItems();
addListenersToDeleteButtons();
addListenersToInputArea();



