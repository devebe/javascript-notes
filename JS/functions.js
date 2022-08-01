let num = 5;
let order = 5;

function squared (num) {
    return num * num;
}
console.log(`${num} squared equals ${squared(num)}`);

function cubed (num) {
    return num * num * num;
}
console.log(`${num} cubed equals ${cubed(num)}`);

function power (num,order) {
    return num ** order;
}
console.log(`${num} to the power of ${order} equals ${power(num,order)}`);

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
console.log(`${num} factorial equals ${factorial(num)}`);