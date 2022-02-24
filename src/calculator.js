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

const numbersKeys = document.querySelectorAll("[data-numbers]");
const operationKeys = document.querySelectorAll("[data-operation]");
const delKey = document.querySelector("[data-delete]");
const resetKey = document.querySelector("[data-reset]");
const equalKey = document.querySelector("[data-equals]");
const previousOperandTextEl = document.querySelector("[data-previous-operand]");
const currentOperandTextEl = document.querySelector("[data-current-operand]");
