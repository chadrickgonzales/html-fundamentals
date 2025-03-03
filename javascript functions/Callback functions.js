//Task 1

function customFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  




//Task 2
function countdown(start, callback) {
    function count(num) {
        if (num < 0) return;
        callback(num);
        setTimeout(() => count(num - 1), 1000);
    }
    
    count(start);
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);



//Task 3
function createButton(buttonText, callback) {
    let button = document.createElement("button");
    button.textContent = buttonText;
    button.addEventListener("click", callback);
    document.body.appendChild(button);
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);



//Task 4
function runTasks(tasks) {
    function executeTask(index) {
        if (index >= tasks.length) return;
        tasks[index](); 
        setTimeout(() => executeTask(index + 1), 1000); 
    }

    executeTask(0); 
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]); 



//Task 5
const readline = require("readline");

function askQuestion(question, choices, correctAnswer, callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log(question);
    choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice}`);
    });

    rl.question("Your answer (enter the number): ", (answer) => {
        const selectedChoice = choices[parseInt(answer) - 1];
        rl.close();
        callback(selectedChoice === correctAnswer);
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);