function add7(num) {
    return num + 7;
}

function multiply(x,y) {
    return x * y;
}

function capitalize (text) {
    text = String(text.toLowerCase());
    let result = text.substring(0,1).toUpperCase()+text.substring(1);
    return result;
}

function lastLetter (text) { return text.substr(-1);}

console.log(add7(12)); // should result in 19
console.log(multiply(12,13)) // should result in 156
console.log(capitalize('OnGeLoFeLoOs')); // should result in Ongelofeloos
console.log(lastLetter('Detective Pikachu')); // should return u
