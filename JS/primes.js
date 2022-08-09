const output = document.querySelector('.output');
let userInput = parseInt(prompt('Enter a number',''));
output.textContent = 'Primes: ';

function testPrime(number){
    let prime = true;
    for (i = 2; i < number; i++) {
        if ((number % i) == 0) {
            prime = false;
        }
    }
    
    if (prime){
        output.textContent += `${number} `;
    }
}

// for (let j = 2; j < userInput; j++){
//     testPrime(j);
// }

// Create array lucasNumber with Lucas sequence 1, 3, 4, 7, 11 ...
// Test if number is divisible by (lucasNumber[number-1]-1) without remainder
// If true number is lucasPseudoPrime
// Generate a random integer A smaller than lucasPseudoPrime


let index;
function getLucasNumber(index){
    // Return n-th term of Lucas number sequence without loop
    const lucasIndexZero = 1;
    const lucasIndexOne = 3;
    const phi = (1+(5**0.5))*0.5;

    // Constants to use in difference equations that lead to Lucas Numbers
    let differenceConstantB = (lucasIndexOne - (phi * lucasIndexZero)) * ((1 - (2 * phi)) ** -1);
    let differenceConstantA = lucasIndexZero - differenceConstantB;

    // Formula to n-th term of Lucas number sequence (at index)
    let lucasNumber = Math.round((differenceConstantA * (phi ** index)) + (differenceConstantB * ((-phi + 1) ** index)));

    return lucasNumber;
}

function testLucasPrime(number) {
    // If test is true there is a high likeliness for the number to be prime
    let lucasPrime = false; 
    if ((getLucasNumber(number - 1) - 1) % number === 0) {
        lucasPrime = true;
    }
    return lucasPrime;
}

function testFermatPrime(number) {
    let fermatPrime = false;
    let a = number - 2;
    console.log(`a equals ${a}`);
    let fermatPrimeTest = (a ** (number-1)) % number;
    console.log(`fPT equals ${fermatPrimeTest}`);
    if (fermatPrimeTest === 1) {
        fermatPrime = true;
    }
    return fermatPrime;
}

function getPrimeList(userInput){
    for (let i = 0; i < userInput; i++) {
        if (testLucasPrime(i) && testFermatPrime(i)) {
            output.textContent += `${i} `;
        }
    }
}

testFermatPrime(67);
