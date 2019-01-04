//question 1

const messyArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const finalArray = [];
const container = {};

//make a function that given that array, groups numbers that match
// [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591]

const answer = (array) => {
    for (i=0; i<array.length; i++) {
        if (container[array[i]]) {
            continue;
        } else {
            container[array[i]] = true;
        }
    }
    Object.keys(container).forEach(num => {
        let result = messyArray.filter(item=>item===Number(num));
        if (result.length === 1) {
            result = result[0];
        }
        finalArray.push(result);
    })
    return finalArray;
}


//question 2
//function that takes array of numbers and a target number
//find two numbers in array that will sum to target number
const sumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findSumNumbers = (array, number) => {
    const returnArray = [];

    for (i=0; i<array.length; i++) {
        if (number >= array[i]) { //don't need to look at numbers bigger than what we want
            let searchNum = number - array[i];

            let result = array.filter(item=>item===searchNum); // see if it's there
            if (result.length > 0) { //if we have a result
                if(returnArray.filter(item=>item===array[i]).length < 1 && 
                returnArray.filter(item=>item===result[0]).length < 1) { //and we don't already have it
                    returnArray.push(result[0], array[i]); // plop it in our return array
                }
            }
            
        }
    }
    return returnArray;  //return or shit or die!
}

//question 3
//function that converts HEX to RGB
//then make it auto detect if input is rgb or hex and convert respectively

//accepts hex ("#23af4f" or "23af4f") and rgb ("rgb(123,115,32)"" or "412,243,142")
const hexRGBConverter = (string) => {
    //figure out if string is a hex or rgb input

    //if it contains a comma it's rgb, otherwise it's hex.
    return string.contains(",") ? RGBToHex(string) : hexToRGB(string);

}

const RGBToHex = (rgb) => {
    //if it contains all the rgb nonsense, strip it out
    if (rgb.contains("rgb(")) {
        rgb = rgb.split("(")[1].split(")")[0];
    }

    //get rid of commas
    rgb = rgb.split(",");

    //loop on the new rgb array and convert the number to a base 16 string (hex)
    let hex = rgb.map(color=> {
        color = parseInt(color).toString(16);
        return (color.length==1) ? "0"+color : color; //add a zero if it's only 0-9.
    })
 
    hex = "#"+hex.join("");

    return hex
    //join it back together and put a hash tag in front
}

const hexToRGB = (hex) => {
    hex = hex.replace("#", ''); //strip out the #

    //get the r, g, and b, but pull the 2 characters and parseinting for 16.
    const r = parseInt(hex.substring(0,2), 16);
    const g = parseInt(hex.substring(2,4), 16);
    const b = parseInt(hex.substring(4,6), 16);

    result = `rgb(${r},${g},${b})`;
    return result;
}