// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:


const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

const biggestNumberInArray = (arr) => {
    let biggest = 0;
    arr.forEach(element => {
        element > biggest ? biggest = element : false;
    });
    return biggest;
}

const biggestNumberInArray2 = (arr) => {
    let biggest = 0;
    for (element in arr) {
        arr[element] > biggest ? biggest = arr[element] : false;
    }
    return biggest;
}

const biggestNumberInArray3 = (arr) => {
    let biggest = 0;
    for (element of arr) {
        element > biggest ? biggest = element : false;
    }
    return biggest;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not

const amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 3,
}

const checkBasket = (basket, lookingFor) => {
    for (item in basket) {
        return (item === lookingFor) ? true : false;
    }
}