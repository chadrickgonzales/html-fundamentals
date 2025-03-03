//task 1
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function substractions(a,b) {
  return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division (a,b) {
  return a % b;
}

console.log(calculate(5, 3, add));      
console.log(calculate(8, 9, substractions)); 
console.log(calculate(4, 2, multiply)); 
console.log(calculate(3,9,division));




//task 2
function delayedMessage(message, delay, beforeDelayCallback, afterDelayCallback) {
    beforeDelayCallback(); 
    
    setTimeout(() => {
        afterDelayCallback(message);
    }, delay);
}

delayedMessage("Hello, world!", 2000, function() {
        console.log("Delay started...");
    }, 
    function(msg) {
        console.log(msg);
    }
);



// task 3 

document.getElementById("clickMe").addEventListener("click", function () {
    alert("Button clicked!");
});

document.getElementById("secondButton").addEventListener("click", function () {
    alert("Second button clicked!");
});

// task 4

function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i) === false) {
            break; 
        }
    }
}

repeatTask(5, function(index) {
    console.log("Iteration:", index);
    if (index === 2) return false; 
});
