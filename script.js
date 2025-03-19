//check the user's age
function checkAge() {
    let age = prompt("Enter your age:");
    if (age >= 25) {
        alert("You are 25 years old or older.");
    } else {
        alert("You are younger than 25.");
    }
}

//check if a number is less than 100
function checkNumber() {
    let number = prompt("Enter a number:");
    if (number < 100) {
        alert("The number is less than 100.");
    } else {
        alert("The number is 100 or more.");
    }
}

//display numbers from 0 to 30
let numOutput = "";
for (let i = 0; i <= 30; i++) {
    numOutput += i + "<br>";
}
document.getElementById("numbers").innerHTML = numOutput;

//even numbers from 0 to 40
let evenOutput = "";
for (let i = 0; i <= 40; i += 2) {
    evenOutput += i + "<br>";
}
document.getElementById("evenNumbers").innerHTML = evenOutput;

//multiples of 3 from 40 to 10
let multiplesOutput = "";
for (let i = 40; i >= 10; i--) {
    if (i % 3 === 0) {
        multiplesOutput += i + "<br>";
    }
}
document.getElementById("multiplesOfThree").innerHTML = multiplesOutput;
