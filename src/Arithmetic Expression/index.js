/*
    arithmetic expression is a combination of...
    operands (values, variables, etc.)
    operators (+ - * / %)
    that can be evaluated to a value
    ex. y = x + 5
*/

// to raise to a power use: **

//augmented assignment operator: += , -=, *=, /=, %=, **
//used when reassigning the same variable

let students = 20;

students **= 2;

console.log(students);

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let result = 1 + 2 * (3 + 4);
// 3 + 4 first = 7
// 7 * 2 = 14
// 14 + 1 = 15

console.log(result);