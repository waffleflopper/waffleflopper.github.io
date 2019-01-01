// let and const

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    //wizardLevel=true exists only inside the scope of the if statement.
    // so inside here it's true, but at the window level it's still false

}

//wizardLevel is false here, despite the if statement
//this is because of 'let', instead of var.  don't use var anymore

//const - a constant cannot be changed in the code
const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false,
};

// with const objects, you can change properties of the object
// but you can't reassign the variable


/*-------------------- DESTRUCTURING OMG------------------- */

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
//^^ old way of doing it ^^

const { player, experience } = obj; // new way
let { wizardLevel } = obj; // since wizardlevel can be changed
// now you have player and experience variables with
// the values from your object


/*---------------OBJECT PROPERTIES------------------*/
const name = 'john snow';
const obj2 = {
    [name]: 'hello',  //more dynamic property values
    ['ray' + 'smith']: 'hihi',
};

//obj2 = {john snow: "hello", raysmith: "hihi"} from console

const a = "Simon";
const b = true;
const c = {};

//old way  (for matching property name with value variable)
const obj3 = {
    a: a,
    b: b,
    c: b,
}
//new way
const obj = {a, b, c};
