class Calculator {
  constructor(previousOperandTextEl, currentOperandTextEl) {
    this.previousOperandTextEl = previousOperandTextEl;
    this.currentOperandTextEl = currentOperandTextEl;
    this.clear();
  }

  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
  }
  appendNum(num) {
    if (num === "." && this.currentOperand.includes(".")) return;
    if (this.currentOperand === "") {
      this.currentOperand = num;
    } else {
      this.currentOperand = this.currentOperand.toString() + num.toString();
    }
  }
  updateDisplay() {
    this.currentOperandTextEl.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    this.previousOperandTextEl.innerText = this.getDisplayNumber(
      this.previousOperand
    );
  }
  getDisplayNumber(num) {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand != "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = `${this.currentOperand} ${this.operation}`;
    this.currentOperand = "";
  }
  deleteOp() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "/":
        computation = prev / current;
        break;
      case "x":
        computation = prev * current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }
}

const numberThemes = document.querySelector(".theme-switcher");
const ballToggle = document.querySelector(".theme-switcher-graphic");
const ball = document.querySelector(".theme-switcher-ball");
const themes = ["", "white", "neon"];
const positions = [3, 24, 43];

let target = "";
let targetVal = 1;
let numberThemePosition;
let leftVal = 3;
let i = 2;

numberThemes.addEventListener("click", (e) => {
  target = e.target.closest("p");
  //   get the selected p tag 1 2 or 3
  if (!target) return;
  //   stop function if we do not click on the target
  targetVal = target.innerText;
  //   store the inner text of the element we clicked on
  // pass targetVal to changeTheme function
  changeTheme(targetVal);
  //   selects class from array using targetVal - 1 as index
  moveBall(leftVal);
  console.log(ball);
  //   function moves ball when called by leftVal px
});

function changeTheme(themeNum) {
  // uses arg as index for array of class names aka themes variable
  document.body.className = themes[themeNum - 1];
  setLeftVal(themeNum);
  //   function that updates leftVal's value so ball can move
}

function setLeftVal(val) {
  if (val == 1) {
    leftVal = 3;
  } else if (val == 2) {
    leftVal = 24;
  } else {
    leftVal = 43;
  }
}

function moveBall(valToMove) {
  ball.style.left = valToMove + "px";
}

ballToggle.addEventListener("click", () => {
  setLeftVal(i);
  changeTheme(i);
  i++;
  moveBall(leftVal);
  console.log(ball);
  if (i === 4) {
    i = 1;
  }
});

const numberKeys = document.querySelectorAll("[data-number]");
const operationKeys = document.querySelectorAll("[data-operation]");
const delKey = document.querySelector("[data-delete]");
const resetKey = document.querySelector("[data-reset]");
const equalKey = document.querySelector("[data-equals]");
const previousOperandTextEl = document.querySelector("[data-previous-operand]");
const currentOperandTextEl = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextEl, currentOperandTextEl);

numberKeys.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNum(button.innerText);
    calculator.updateDisplay();
  });
});

operationKeys.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

resetKey.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

equalKey.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
  console.log("bruh");
});
delKey.addEventListener("click", () => {
  calculator.deleteOp();
  calculator.updateDisplay();
});
