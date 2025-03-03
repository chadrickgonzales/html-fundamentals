//Task 1
function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr)); 
    }
    return result;
}

let numbers = [1, 2, 3];
let doubled = customMap(numbers, function(num) { return num * 2; });
console.log(doubled);



//Task 2
function filter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]); 
        }
    }
    return result;
}

let result = filter([1, 2, 3, 4, 15], function(val) { return val < 10; });
console.log(result); 



//Task 3
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true; 
        }
    }
    return false; 
}

let result1 = some([1, 2, 3, 4], function(val) { return val > 5; });
console.log(result1); 

let result2 = some([1, 2, 3, 6], function(val) { return val > 5; });
console.log(result2); 




//Task 4
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

let result3 = every([1, 2, 3], function(val) { return val > 0; });
console.log(result3);

let result4 = every([1, 2, -3], function(val) { return val > 0; });
console.log(result4);




//Task 5 
function reduce(arr, callback, initialValue) {
    let a = initialValue !== undefined ? initialValue : arr[0];  
    let startIndex = initialValue !== undefined ? 0 : 1;  

    for (let i = startIndex; i < arr.length; i++) {
        a = callback(a, arr[i], i, arr);
    }

    return a;
}

let sum = reduce([1, 2, 3], function(acc, num) { return acc + num; }, 0);
console.log(sum);

let product = reduce([1, 2, 3, 4], function(acc, num) { return acc * num; }, 1);
console.log(product);




//Task 6 
function includes(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false; 
}

let result5 = includes([1, 2, 3], function(val) { return val === 2; });
console.log(result5);

let result6 = includes([1, 2, 3], function(val) { return val === 5; });
console.log(result6);
