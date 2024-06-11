// Operators from 18-22

// التكليف 1
// Replace ? With Arithmetic Operators
console.log (10 * 20 + 15 % 3 + 190 + 10 - 400); // 0


// التكليف 2

// let num = 3;

// // Solution One
// console.log(num + num ); // 6

// // Solution Two
// console.log(num * num / num + num); // 6

// // Soultion Three
// console.log(num +  true * num ); // 6

// // Soultion Four
// console.log( num * num - num); // 6

// // Solution Five
// console.log( num % true + num  + num); // 6

// // Solution Six
// console.log((num - true) * num); // 6



// التكليف 3
let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(+num * +num / +num + +num); // 20

// Solution Three
console.log(+num + +num * +num / +num); // 20

// Solution Four
console.log( (+num % num ) + +num + +num); // 20

// Solution five
console.log( +num + (+num  %  +num) * +num / +num + +num ); // 20



// التكليف 4

let points = 10;

points = ++points + ++points / points + true

console.log(points); // 13

// Write Your Code Here


points = ++points * points / (points + points) + true

console.log(points); // 8;


