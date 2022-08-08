const output = document.querySelector('.output');
let userInput = parseInt(prompt('Enter a number',''));
output.textContent = 'Primes: ';

function testPrime(number){
    let prime = true;
    for (i = 2; i < number; i++){
        if ((number % i) == 0) {
            prime = false;
        }
    }
    
    if (prime){
        output.textContent += `${number} `;
    }
}

for (let j = 2; j < userInput; j++){
    testPrime(j);
}

function testPrimeAKS (number); 