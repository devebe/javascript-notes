let message;
// Declaring variable message that will store information

message = "Hello";
// Store the string "Hello World" in variable named message

console.log(message);
// Show the content that is stored in variable message

let firstname = "John";
// Declaring a variable message and immediately storing information
// in it is possible too.

let user;

user = firstname;
// Copies data from one variable into another

console.log(message+" "+user);
// User will show the same as firstname

// When changing the stored information in a variable, one should not
// use let twice as it will run into an error.

// Variable naming rules

// - The name must contain only letters, digits, or the symbols $ and _.
// - The first character must not be a digit.
// - Variables are case-sensitive so APPLE and apple are not the same
// - Words such as let, class, return and function are reserved
//   and cannot be used.

// For longer names camelCasing is used

const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;

// Declaring variables - Number can take integer (int), floating point 
// numbers (decimal numbers) as well as doubles (decimals with higher precision)

console.log(typeof myInt);
console.log(typeof myFloat);

// typeof operator allows to check what type of variable is declared. In this
// case it is a number.

const lotsOfDecimals = 1.27388364634;
const twoDecimalPlaces = lotsOfDecimals.toFixed(2);
console.log(twoDecimalPlaces);

// the method .toFixed(n) allows rounding numbers to a precision of n decimal
// places.

let num1 = 4;
num1++;
console.log(num1);

// the increment operator (++) will add increment the number value stored
// by 1 - as opposed to the decrement (--) operator that will decrement it by 1.

const leftSide = 5;
const rightSide = (6 + 7) - 2;

console.log(leftSide === rightSide); //TRUE
// returns true or false on the test if both sides are equal
// == will also do this but will also prove values true with unequal data types

console.log(leftSide !== rightSide); //TRUE
// returns true of false on the test if values on both sides are unequal
// != will also do this but will also prove values true with unequal data types

console.log(leftSide > rightSide); //FALSE
// returns true of false on the test if values on left side are 
// larger than values on right side

console.log(leftSide < rightSide); //TRUE
// returns true of false on the test if values on left side are 
// smaller than values on right side

// unary negation means that operations are done on one operand (e.g value x)
// binary negation means that operations are done on two operand (e.g. value x and y)

console.log(23+97);
console.log(1 + 2 + 3 + 4 + 5 + 6);
console.log((4 + 6 + 9)/77);

let a = 10;
console.log(a);
console.log(9 * a);

let max = 57;
let actual = max - 13;
let percentage = (actual / max);
console.log(percentage);





