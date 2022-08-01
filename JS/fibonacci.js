function getFibonacciNumberByIndex (indexZero,indexOne,indexOfRequestedNumber) {
    let iZ = indexZero;
    let iO = indexOne;
    let n = indexOfRequestedNumber;

    const phiPositive = (1+(5**0.5))*0.5; // The positive solution of the solution x^2 - x - 1 = 0 - leads to Phi = 1.618....
    const phiNegative = (1-(5**0.5))*0.5; // The negative solution of the solution x^2 - x - 1 = 0 - leads to phi = -0.618....

    // a and b are necessary to create a continuous function with structure Fn = ax^n+bx^n that allows for evaluating 
    // all values through a difference equation which solves the starting solutions (indexZero and indexOne)

    // | indexZero = a(phiPositive^0) + b(phiNegative^0) = a + b
    // | indexOne = a(phiNegative^1) + b(phiNegative^1)
    // phiNegative can be written as -phiPositive+1 and therefore becomes redundant

    // Solving for a and b leads to following expressions:

    let b = (iO - (phiPositive*iZ))*((1-(2*phiPositive))**-1);
    let a = iZ - b;

    let numberAtIndex = Math.round((a*(phiPositive**n))+(b*(phiNegative**n)));
    return numberAtIndex;
}

let indexZero = parseInt(prompt('First number',''));
let indexOne = parseInt(prompt('Second number',''));

document.getElementById("indexZero").innerText = getFibonacciNumberByIndex(indexZero,indexOne,0);
document.getElementById("indexOne").innerText = getFibonacciNumberByIndex(indexZero,indexOne,1);
document.getElementById("indexTwo").innerText = getFibonacciNumberByIndex(indexZero,indexOne,2);
document.getElementById("indexThree").innerText = getFibonacciNumberByIndex(indexZero,indexOne,3);
document.getElementById("indexFour").innerText = getFibonacciNumberByIndex(indexZero,indexOne,4);
document.getElementById("indexFive").innerText = getFibonacciNumberByIndex(indexZero,indexOne,5);
document.getElementById("indexSix").innerText = getFibonacciNumberByIndex(indexZero,indexOne,6);
document.getElementById("indexSeven").innerText = getFibonacciNumberByIndex(indexZero,indexOne,7);
document.getElementById("indexEight").innerText = getFibonacciNumberByIndex(indexZero,indexOne,8);
document.getElementById("indexNine").innerText = getFibonacciNumberByIndex(indexZero,indexOne,9);
document.getElementById("indexTen").innerText = getFibonacciNumberByIndex(indexZero,indexOne,10);