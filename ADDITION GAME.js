let num1Element = document.getElementById("firstNumber");
let num2Element = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");


let successMsg = "Congratulations! You got it right.";
let failureMsg = "Please Try Again!";

function check() {
    let num1 = num1Element.textContent;
    let num2 = num2Element.textContent;
    let answerElement = parseInt(num1) + parseInt(num2);
    let enteredElement = userInputElement.value;
    let enteredvalue = parseInt(enteredElement);
    if (answerElement === enteredvalue) {
        gameResultElement.textContent = successMsg;
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = failureMsg;
        gameResultElement.style.backgroundColor = "#1e217c";
    }

}

function restart() {
    let num1 = Math.ceil(Math.random() * 100);
    let num2 = Math.ceil(Math.random() * 100);

    num1Element.textContent = num1;
    num2Element.textContent = num2;
    gameResultElement.textContent = "";
    userInputElement.value = "";

}