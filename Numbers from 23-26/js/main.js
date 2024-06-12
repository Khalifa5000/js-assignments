// Numbers

// 1 التكليف

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(150000 - 50000); // 100000
console.log(2 * 5e4); // 100000
console.log(1e6 / 10); // 100000
console.log(1e5); // 100000
console.log(100 ** 2.5); // 100000
console.log(parseInt("100000.8")); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.sqrt(10000000000)); // 100000


// التكليف 2

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991


// التكليف 3

console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16


// another solution
console.log(("" + Number.MAX_SAFE_INTEGER).length);


// another solution
console.log(Math.abs(Number.MAX_SAFE_INTEGER).toString().length); // 16



// التكليف 4

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57


// التكليف 5

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2


// التكليف 6

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed())); // 10


// التكليف 7

console.log(Math.round(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4