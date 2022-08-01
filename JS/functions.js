let num = parseInt(prompt('Enter number',''));
let order = parseInt(prompt('Enter another number',''));

function squared (num) {
    return num * num;
}


function cubed (num) {
    return num * num * num;
}


function power (num,order) {
    return num ** order;
}

function factorial (num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    }
    return num
}

console.groupCollapsed("Outcomes");
console.log(`${num} squared equals ${squared(num)}`);
console.log(`${num} cubed equals ${cubed(num)}`);
console.log(`${num} to the power of ${order} equals ${power(num,order)}`);
console.log(`${num} factorial equals ${factorial(num)}`);
console.groupEnd('Outcomes');

alert(
`
${num} squared equals ${squared(num)}
${num} cubed equals ${cubed(num)}
${num} to the power of ${order} equals ${power(num,order)}
${num} factorial equals ${factorial(num)}
`
);
