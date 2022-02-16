// function which when given an event, (a keydown/keypress), changes the travel direction {}
const changeDirection = (event) => {
  const keyPressed = event.key;
  switch (keyPressed) {
    case "ArrowUp":
      travelDirection.x = 0;
      if (travelDirection.y === 0) {
        travelDirection.y = -1;
      }
      break;

    case "ArrowDown":
      travelDirection.x = 0;
      if (travelDirection.y === 0) {
        travelDirection.y = 1;
      }
      break;

    case "ArrowLeft":
      travelDirection.y = 0;
      if (travelDirection.x === 0) {
        travelDirection.x = -1;
      }
      break;

    case "ArrowRight":
      travelDirection.y = 0;
      if (travelDirection.x === 0) {
        travelDirection.x = 1;
      }
      break;
  }
};

const arena = document.querySelector(".arena");
const snakeHead = document.querySelector(".snakeHead");
const lossDetector = document.querySelector(".snakeHead-lossDetector");
const ticTac = document.querySelector(".ticTac");
const restartButton = document.querySelector(".restart");
var snakeGrowth = 2;
var snakeSpeed = 7;
var score = 0;
const headCoordinates = { x: 10, y: 10 }; // Object which sets the starting coordinates for the head of the snake
const ticTacCoordinates = { x: 14, y: 14 }; // An object which contains the x and y coordinates of the tictac
const travelDirection = { x: 0, y: 0 }; // Object which sets the travel direction for the head of the snake
const snakeBody = []; // Array for the body of the snake

//This is a function which draws the head of my snake // although since it's already in arena div, might come back and remove this function (probs not tho)
function drawSnakeHead() {
  snakeHead.style.backgroundColor = "black";
  snakeHead.style.gridColumnStart = headCoordinates.x;
  snakeHead.style.gridRowStart = headCoordinates.y;
}

/*This function updates the coordinates of the snakeHead {headCoordinates}, based on the travel directions, given
by the function changeDirection()*/
function updateSnakeHead() {
  headCoordinates.x += travelDirection.x;
  headCoordinates.y += travelDirection.y;
  snakeBody[0] = snakeHead;
}

//This is the function which will draw the body of my snake
function drawSnakeBody() {
  if (snakeBody.length < snakeGrowth) {
    // sets number of segments on snake (number of segments = value)
    const section = document.createElement("div");
    section.style.backgroundColor = "black";
    section.style.gridColumnStart = headCoordinates.x;
    section.style.gridRowStart = headCoordinates.y;
    arena.appendChild(section);
    snakeBody.push(section);
  }
}

//This is the function which will update the body of the snake
function updateSnakeBody() {
  for (var i = snakeBody.length - 1; i >= 1; i--) {
    //i=0, is like a type of train  carriage hence why i>=1
    snakeBody[i].style.gridColumnStart = snakeBody[i - 1].style.gridColumnStart;
    snakeBody[i].style.gridRowStart = snakeBody[i - 1].style.gridRowStart; // at least we have 1 lol
  }
}

//This is the function which will draw the food on the board
function drawTicTac() {
  //will change so that it draws somewhere random
  ticTac.style.gridColumnStart = ticTacCoordinates.x;
  ticTac.style.gridRowStart = ticTacCoordinates.y;
  ticTac.style.visibility = "visible";
}

//This is the function which will update the position of the food on the board between 0 and the board width, hence why the +1 makes it in between 1-21 for the x/y coordinates
function updateTicTac() {
  if (
    headCoordinates.x === ticTacCoordinates.x &&
    headCoordinates.y === ticTacCoordinates.y
  ) {
    snakeGrowth += 1;
    ticTacCoordinates.x = Math.floor(Math.random() * 20) + 1;
    ticTacCoordinates.y = Math.floor(Math.random() * 20) + 1;
    ticTac.style.visibility = "hidden";
    snakeSpeed += 0.5;
    keepScore();
  }

  //if headCoordinates.x
}

//This function makes sure that the ticTac doesn't respawn on the snake body, and if it detects that it does, it will perform a while loop which will use Math.floor(Math.random) to set new TicTac coordinates until the ticTac respawns without touching the snake body// I can probably put this into updateTicTac()

function ticTacRespawnCheck() {
  snakeBody.forEach((section) => {
    while (
      section.style.gridColumnStart == ticTacCoordinates.x &&
      section.style.gridRowStart == ticTacCoordinates.y
    ) {
      ticTacCoordinates.x = Math.floor(Math.random() * 20) + 1;
      ticTacCoordinates.y = Math.floor(Math.random() * 20) + 1;
      return;
    }
  });
}

//This is the function which will determine when or not the game is lost
function gameLost() {
  let lostOrNah;

  switch (true) {
    case headCoordinates.x < 1:
      lostOrNah = "yes";
      break;
    case headCoordinates.x > 21:
      lostOrNah = "yes";
      break;
    case headCoordinates.y < 1:
      lostOrNah = "yes";
      break;
    case headCoordinates.y > 21:
      lostOrNah = "yes";
      break;
  }

  lossDetector.style.display = "initial"; //lossDetector has effect only when scanning for head contact with the snake body
  lossDetector.style.backgroundColor = "pink";
  lossDetector.style.gridColumnStart = headCoordinates.x;
  lossDetector.style.gridRowStart = headCoordinates.y;

  snakeBody.forEach((section) => {
    if (
      section.style.gridColumnStart == lossDetector.style.gridColumnStart &&
      section.style.gridRowStart == lossDetector.style.gridRowStart &&
      snakeBody.indexOf(section) > 1
    ) {
      lostOrNah = "yes";
    }
  });
  lossDetector.style.display = "none"; //lossDetector has no effect after scanning for head contact with the snake body, hence will not intefere with other functions in the program
  return lostOrNah;
}

//This function will keep and record score while the game progresses
function keepScore() {
  const scoreCard = document.querySelector(".score");
  const newScore = (score += 10);
  scoreCard.innerHTML = `SCORE: ${newScore}`;
}

//This function brings down the menu/score bar (will implement to run after game is lost)
function animateMenu() {
  const menuElement = document.querySelector(".elements");
  const body = document.querySelector("body");
  menuElement.style.transition = `1000ms`;
  menuElement.style.marginTop = `40vh`;
  body.style.backdropFilter = "blur(5px)";
  body.style.webkitBackdropFilter = "blur(5px)";
}

//This function will give a smooth intro transition when the game is restarted/loaded
function fadeIn() {
  const html = document.querySelector("html");
  html.style.opacity = 50;
}

fadeIn();

let previousTimeStamp = 0;

//This one was interesting to read online about, this is the game loop I made using window.requestAnimationFrame
const mainGame = (timeStamp) => {
  window.requestAnimationFrame(mainGame);
  const timepassed = (timeStamp - previousTimeStamp) / 1000;
  if (timepassed < 1 / snakeSpeed) return; //sets the speed at which screen refreshes/FPS
  previousTimeStamp = timeStamp;

  //---------------------//Code for item movemement goes in between here//--------------------------------------

  updateSnakeHead(); //at least we know it works lol
  if (gameLost() === "yes") {
    arena.style.display = "none";
    restartButton.style.display = "initial";
    travelDirection.x = 0;
    travelDirection.y = 0;
    animateMenu();
    restartButton.addEventListener("click", () => {
      window.location = window.location.href;
    });
  }

  drawSnakeHead();
  drawTicTac();
  updateTicTac();
  ticTacRespawnCheck();
  updateSnakeBody(); //slightly more responsive/quicker like this
  drawSnakeBody(); //will need to make function so that if food is found, snakebody[] length increases

  document.addEventListener("keydown", changeDirection);

  //------------------------------------------------------------
  // console.log(timepassed)//simply logs timepassed/ was a test that the game loop works
};

window.requestAnimationFrame(mainGame);
