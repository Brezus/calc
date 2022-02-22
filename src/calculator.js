const numberThemes = document.querySelector(".theme-switcher");
const ballToggle = document.querySelector(".theme-switcher-graphic");
const ball = document.querySelector(".theme-switcher-ball");
const themes = ["", "white", "neon"];

let target = "";
let targetVal = 1;
let numberThemePosition;
let leftVal = 3;
let i = 2;

numberThemes.addEventListener("click", (e) => {
  target = e.target.closest("p");
  if (!target) return;
  targetVal = target.innerText;
  //   console.log(targetVal);
  changeTheme(targetVal);
  moveBall(leftVal);
});

function changeTheme(themeNum) {
  document.body.className = themes[themeNum - 1];
  setLeftVal(themeNum);
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
  i++;
  //   j++;
  moveBall(leftVal);
  changeTheme(i - 1);
  if (i === 4) {
    i = 1;
  }
});
