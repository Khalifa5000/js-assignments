// Introduction 


// التكليف 2

document.write("<h1>ELZERO</h1>");
document.querySelector("h1").style.color= "blue"
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";


// التكليف 3
console.log("%cElzero %cWeb %cSchool", "color: red; font-size:40px;", "color: green; font-size:40px; font-weight: bold", "color: white; font-size: 40px; background-color: blue;")

// التكليف 4

console.group("group 1");
console.log("message one");
console.log("message two");
console.group("child group")
console.log("message one");
console.log("message two");
console.group("grand child group")
console.log("message one");
console.log("message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group 2")
console.log("message one");
console.log("message two");


// التكليف 5

console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);


// التكليف 6


// console.log("Iam In Console");
// document.write("Iam In Page");


/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
