
let num1 = 15;
let num2 = 20;
let num3 = 10;
let totalCost = num1 + num2 + num3;
console.log(`The total cost of the items is: $${totalCost}`);


let average = (num1 + num2 + num3) / 3;
console.log(`The average is: ${(num1 + num2 + num3) / 3}`);


let number = 14;
console.log(`${number} is ${number % 2 ? 'odd' : 'even'}.`);


let originalPrice = 100;
let discountPercentage = 20;
let discountAmount = (originalPrice * discountPercentage) / 100;
let discountedPrice = originalPrice - discountAmount;
console.log(`The discounted price is: $${discountedPrice}`);


let finalPrice = 80, discountPercent = 20;
let originalPrice1 = finalPrice / (1 - discountPercent / 100);
console.log(`The original price before the discount was: $${originalPrice1}`);
