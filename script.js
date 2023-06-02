const board = document.querySelector(".board");
const words = ["black", "white", "green", "brown", "color"];

let chars = [];
let rowCounter = 0;
let blockcounter = 0;
let trueCounter = 0;
let word;
let splitChars = [];
let splitWord = [];
let line = document.getElementsByClassName("line")[rowCounter].children;

const startButton = document.querySelector(".start-btn");
const deleteButton = document.querySelector(".delete-btn")
const enterButton = document.querySelector(".enter-btn");
const keyboardButtons = document.querySelectorAll(".btn");

startButton.addEventListener("click", wordPick);
enterButton.addEventListener("click", splitWordCheck);
deleteButton.addEventListener("click", function () {
  
  if (blockcounter > 0) {
    blockcounter--;
    line[blockcounter].textContent = "";
  }
  
  else {
    return;
  }
  console.log("delete: " + blockcounter)

});

function wordPick() {
  let randomIndex = Math.floor(Math.random() * words.length);
  word = words[randomIndex].toUpperCase();
}

function splitWordCheck() {
  if (blockcounter < 5) {
    alert("Please Enter 5 letter");
    return;
  }

  if (blockcounter == 5) {
    blockcounter = 0;
    rowCounter++;
  }

  blockcounter = 0;

  splitChars = chars.split("");
  splitWord = word.split("");

  for (let i = 0; i < 5; i++) {
    if (word[i] === splitChars[i]) {
      line[i].classList.add("true");
      trueCounter++;
    } else if (word.includes(splitChars[i])) {
      line[i].classList.add("change");
    } else {
      line[i].classList.add("false");
    }
  }
  console.log(trueCounter);
  if (trueCounter == 5) {
    alert("You Won!");
    return;
  }

  chars = [];
  splitChars = [];
  trueCounter = 0;
}

keyboardButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (blockcounter == 5 || trueCounter == 5) {
      return;
    }
    
    if (blockcounter == 4 && rowCounter == 4) {
      return;
    }
    
    let takenIndex = btn.innerHTML;
    takenIndex = takenIndex.toUpperCase();
    
    line = document.getElementsByClassName("line")[rowCounter].children;
    
    line[blockcounter].textContent += takenIndex;
    chars += takenIndex;
    blockcounter++;
    console.log("add: " + blockcounter)
  });
});
