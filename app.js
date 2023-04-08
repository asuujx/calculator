// containers
const numberBtns = document.querySelectorAll("#numBtn");
const operationBtns = document.querySelectorAll("#opBtn");
const clearBtn = document.getElementById("clearBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const deleteBtn = document.getElementById("deleteBtn");
const dotBtn = document.getElementById("dotBtn");
const totalBtn = document.getElementById("totalBtn");
const negateBtn = document.getElementById("negateBtn");
const resultBox = document.getElementById("result");
const historyBox = document.getElementById("history");

// variables
let number1, number2, result;
let resultExists = false;
let operation = "";
let separator = ".";

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    let currentNumber = numberBtn.textContent;
    // console.log(currentNumber);

    resultBox.textContent == "0" || resultBox.textContent == "ERROR"
      ? (resultBox.textContent = currentNumber)
      : (resultBox.textContent += currentNumber);

    if (resultExists) {
      resultBox.textContent = currentNumber;
      historyBox.textContent = "";
      resultExists = false;
    }
  });
});

dotBtn.addEventListener("click", () => {
  if (resultBox.textContent.includes(separator)) {
    return;
  } else {
    if (resultExists) {
      resultBox.textContent = "0";
      historyBox.textContent = "";
      resultExists = false;
    }
    resultBox.textContent += separator;
  }
});

operationBtns.forEach((operationBtn) => {
  operationBtn.addEventListener("click", () => {
    if (resultBox.textContent === "ERROR") return;

    if (operation.length === 0) {
      operation = operationBtn.textContent;
      number1 = parseFloat(resultBox.textContent);
      resultBox.textContent = "0";
      switch (operation) {
        case "+":
          historyBox.textContent = number1 + operation;
          break;
        case "-":
          historyBox.textContent = number1 + operation;
          break;
        case "×":
          historyBox.textContent = number1 + operation;
          break;
        case "÷":
          historyBox.textContent = number1 + operation;
          break;
      }
    } else {
      operation = operationBtn.textContent;
      historyBox.textContent = number1 + operation;
    }

    if (resultExists) {
      if (operation.length === 0) {
        operation = operationBtn.textContent;
        number1 = result;
        resultBox.textContent = "0";
        switch (operation) {
          case "+":
            historyBox.textContent = number1 + operation;
            break;
          case "-":
            historyBox.textContent = number1 + operation;
            break;
          case "×":
            historyBox.textContent = number1 + operation;
            break;
          case "÷":
            historyBox.textContent = number1 + operation;
            break;
        }
      } else {
        operation = operationBtn.textContent;
        historyBox.textContent = number1 + operation;
      }
      resultExists = false;
    }
  });
});

totalBtn.addEventListener("click", () => {
  if (resultBox.textContent === "ERROR") return;

  number2 = parseFloat(resultBox.textContent);

  switch (operation) {
    case "+":
      result = number1 + number2;
      historyBox.textContent += number2 + "=";
      break;
    case "-":
      result = number1 - number2;
      historyBox.textContent += number2 + "=";
      break;
    case "×":
      result = number1 * number2;
      historyBox.textContent += number2 + "=";
      break;
    case "÷":
      if (number2 === 0) {
        resultBox.textContent = "ERROR";
        return;
      } else {
        result = number1 / number2;
        historyBox.textContent += number2 + "=";
      }
      break;
  }

  resultBox.textContent = result;
  number1 = number2 = 0;
  operation = "";
  resultExists = true;
});

clearBtn.addEventListener("click", () => {
  resultBox.textContent = "0";
});

clearAllBtn.addEventListener("click", () => {
  resultBox.textContent = "0";
  historyBox.textContent = "";
  number1 = number2 = 0;
  operation = "";
});

deleteBtn.addEventListener("click", () => {
  if (resultBox.textContent === "ERROR") {
    resultBox.textContent = "0";
    historyBox.textContent = "";
    number1 = number2 = 0;
    operation = "";
    return;
  }

  if (resultBox.textContent.length !== 1) {
    resultBox.textContent = resultBox.textContent.slice(0, -1);
  } else {
    resultBox.textContent = "0";
  }
});

negateBtn.addEventListener("click", () => {
  if (resultBox.textContent === "ERROR") return;
  resultBox.textContent = parseFloat(resultBox.textContent) * -1;
});