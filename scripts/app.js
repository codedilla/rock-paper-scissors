const rulesModal = document.querySelector(".rules-modal");
const rulesBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissor");
const scoreSheet = document.querySelector(".score-sheet");
const mainPics = document.querySelector(".first-pics");
const stepPics = document.querySelector(".step-two");
const myOptions = document.querySelectorAll(".my-options");
const cpuOptions = document.querySelectorAll(".cpu-options");

// GLOBAL VALUES
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const CPU_PICK_VALUE = 9;
let count = 0;

function cpuRandomPick() {
  const cpuPicker = Math.ceil(Math.random() * CPU_PICK_VALUE);
  console.log(cpuPicker);
  if (cpuPicker <= 3) {
    cpuOptions.forEach((option) => {
      cpuOptions[0].style.display = "none";
      cpuOptions[1].style.display = "rock";
      cpuOptions[2].style.display = "none";
    });
    console.log("cpu chose", ROCK);
    return ROCK;
  } else if (cpuPicker > 3 && cpuPicker <= 6) {
    cpuOptions.forEach((option) => {
      cpuOptions[0].style.display = "paper";
      cpuOptions[1].style.display = "none";
      cpuOptions[2].style.display = "none";
    });
    console.log("cpu chose", PAPER);
    return PAPER;
  } else if (cpuPicker > 6 && cpuPicker <= 9) {
    cpuOptions.forEach((option) => {
      cpuOptions[0].style.display = "none";
      cpuOptions[1].style.display = "none";
      cpuOptions[2].style.display = "scissors";
    });
    console.log("cpu chose", SCISSORS);
    return SCISSORS;
  }
}

function playerTurnHandler(mode) {
  const cpuHoice = cpuRandomPick();
  let choose;
  if (mode === ROCK) {
    choose = ROCK;
    mainPics.style.display = "none";
    stepPics.style.display = "flex";
    myOptions.forEach((option) => {
      myOptions[0].style.display = "none";
      myOptions[1].style.display = "rock";
      myOptions[2].style.display = "none";
    });
    console.log("player chose", ROCK);
  } else if (mode === PAPER) {
    choose = PAPER;
    mainPics.style.display = "none";
    stepPics.style.display = "flex";
    myOptions.forEach((option) => {
      myOptions[0].style.display = "paper";
      myOptions[1].style.display = "none";
      myOptions[2].style.display = "none";
    });
    console.log("player chose", PAPER);
  } else if (mode === SCISSORS) {
    choose = SCISSORS;
    mainPics.style.display = "none";
    stepPics.style.display = "flex";
    myOptions.forEach((option) => {
      myOptions[0].style.display = "none";
      myOptions[1].style.display = "none";
      myOptions[2].style.display = "scissors";
    });
    console.log("player chose", SCISSORS);
  }

  if (
    (cpuHoice === ROCK && mode === PAPER) ||
    (cpuHoice === PAPER && mode === SCISSORS) ||
    (cpuHoice === SCISSORS && mode === ROCK)
  ) {
    console.log("player wins");
    scoreSheet.textContent = ++count;
  } else if (
    (cpuHoice === ROCK && mode === SCISSORS) ||
    (cpuHoice === PAPER && mode === ROCK) ||
    (cpuHoice === SCISSORS && mode === PAPER)
  ) {
    console.log("cpu wins");
    scoreSheet.textContent = --count;
  } else if (
    (cpuHoice === ROCK && mode === ROCK) ||
    (cpuHoice === PAPER && mode === PAPER) ||
    (cpuHoice === SCISSORS && mode === SCISSORS)
  ) {
    console.log("it's a draw");
  }
}

rockBtn.addEventListener("click", () => {
  playerTurnHandler(ROCK);
});
paperBtn.addEventListener("click", () => {
  playerTurnHandler(PAPER);
});
scissorsBtn.addEventListener("click", () => {
  playerTurnHandler(SCISSORS);
});

rulesBtn.addEventListener("click", () => {
  rulesModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  rulesModal.style.display = "none";
});
