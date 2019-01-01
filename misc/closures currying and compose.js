const first = () => {
    const greet = "hi";
    const second = () => {
        alert(greet);
    }
    return second;
};

const newFunc = first();  //assigns the second() function to newFunc
newFunc(); 

//closures make sure that the child scope always has access to parent scope
//variables, etc.  this is why newFunc can access 'greet' variable.
//SECTION 13 LESSON 137

//newFunc "remembers" the 'greet' variable because second() needed it and was
//a child scope of first()

//CURRYING is the process of taking a function that takes multiple
//arguments into taking one at at time

const multiply = (a, b) => a * b;

const curriedMult = (a) => (b) => a * b; //but whats the point?

/* curriedMult(3) would return (b) => a * b;
curriedMult(3)(4) would return 12; 
whats the point? can do things like this:*/
const multiplyBy5 = curriedMult(5);


/*_--------------------COMPOSE

the act of putting two functions together to form a third 
function where the output of one function is the 
input of the other */

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

/*-breakdown
compose = (f, g) => (a) => f(g(a));
compose(sum, sum)(5);
**compose = (sum, sum) => (5) => sum(sum(5));
                                 sum(6);
                        returns  7  */
                            
// Avoiding side effects and functional purity

//side effects anything that happens inside the function that we
//don't know about (it's not in the return process)
// changing variables, console logs, etc

//functional purity is avoiding side effects and we always want
//to return /something/.  In this way we create something deterministic
//no matter what if my inputs go through this function, the return value
//will always be the same.