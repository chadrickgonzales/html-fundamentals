//Multiplication Table Generator
let number = 5;
console.log(`Multiplication Table for ${number}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


//Sum of First N Natural Numbers
let n = 5; 
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(`The sum of the first ${n} numbers is: ${sum}`);


//Array Elements Printer
let array = [2, 4, 6, 8, 10];
console.log("Array Elements:");
for (let i = 0; i < array.length; i++) {
    console.log(`Array Element: ${array[i]}`);
}


//Pattern Printer
let rows = 5; 
console.log("Pattern:");
for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}


//Reverse Array Elements
for (let i = array.length - 1; i >= 0; i--) {
    console.log(`Reversed Element: ${array[i]}`);
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   