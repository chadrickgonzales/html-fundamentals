// Task 1: Grading System
let score = 90;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`Your grade is: ${grade}`);



// Task 2: Weather Advisor
let temperature = 30;

if (temperature < 0) {
    console.log("It's freezing outside! Bundle up!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature >= 16 && temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
} else {
    console.log("It's hot outside. Stay hydrated!");
}



// Task 3: Eligibility Checker
let age = 20;

if (age < 13) {
    console.log("You are too young for this activity.");
} else if (age >= 13 && age <= 17) {
    console.log("You need parental permission.");
} else {
    console.log("You are eligible for this activity.");
}



// Task 4: Ticket Price Calculator
let isMember = true;
let ticketPrice;
let age2 = 11;

if (age2 < 12) {
    ticketPrice = "Free";
} else if (age2 >= 12 && isMember) {
    ticketPrice = "$10";
} else {
    ticketPrice = "$15";
}

console.log(`The ticket price is: ${ticketPrice}`);



// Task 5: Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(`Is 2024 a leap year? ${isLeapYear(2024)}`); 
console.log(`Is 2023 a leap year? ${isLeapYear(2023)}`); 
console.log(`Is 2000 a leap year? ${isLeapYear(2000)}`); 
console.log(`Is 1900 a leap year? ${isLeapYear(1900)}`); 
