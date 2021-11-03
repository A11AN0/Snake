// function which when given an event, (a keydown/keypress), changes the travel direction {} 
const changeDirection = (event)=>{
    const keyPressed = event.key
    switch(keyPressed){
        case "ArrowUp":
            travelDirection.x = 0
            if(travelDirection.y === 0){
            travelDirection.y = -1}
            break;

        case "ArrowDown":
            travelDirection.x = 0
            if(travelDirection.y === 0){
            travelDirection.y = 1}
            break;

        case "ArrowLeft":
            travelDirection.y = 0
            if(travelDirection.x === 0){
            travelDirection.x = -1}
            break;

        case "ArrowRight":
            travelDirection.y = 0
            if(travelDirection.x === 0){
            travelDirection.x = 1}
            break;
    }
}


const arena = document.querySelector(".arena");
const snakeHead = document.querySelector(".snakeHead");
const snakeGrowth = 4
var headCoordinates = {x: 10, y:10} // Object which sets the starting coordinates for the head of the snake
var travelDirection = {x:0, y:0} // Object which sets the travel direction for the head of the snake
var snakeBody = [] // Array for the body of the snake
var snakeLength = 0 // Array for the length of the snake



function drawSnakeHead(){
    snakeHead.style.backgroundColor = "green"
    snakeHead.style.gridColumnStart = headCoordinates.x
    snakeHead.style.gridRowStart = headCoordinates.y
}
//This is a function which draws the head of my snake

function updateSnakeHead(){
    headCoordinates.x += travelDirection.x;
    headCoordinates.y += travelDirection.y;
    snakeBody[0] = snakeHead
}
/*This function updates the coordinates of the snakeHead {headCoordinates}, based on the travel directions, given
by the function changeDirection()*/



//This is the function which will draw the body of my snake
function drawSnakeBody(){
    if(snakeBody.length<6){ // made it so it only draws snake body depending on the allowed length
    const section = document.createElement("div");
    section.style.backgroundColor = "red"
    section.style.gridColumnStart = headCoordinates.x 
    section.style.gridRowStart = headCoordinates.y
    arena.appendChild(section);
    snakeBody.push(section);
    }
} //wont stop proliferating in game loop

//This is the function which will update the body of the snake
function updateSnakeBody(){
    
        for(var i=snakeBody.length-1; i>= 1; i--){
            snakeBody[i].style.gridColumnStart = snakeBody[i-1].style.gridColumnStart
            snakeBody[i].style.gridRowStart = snakeBody[i-1].style.gridRowStart // at least we have 1 lol
        }
    
}

//This is the function which will draw the food on the board
function drawTicTac(){

}

//This is the function which will update the position of the food on the board
function updateTicTac(){

}

//This is the function which will determine when or not the game is lost
function gameLost(){

}

//This function will give option to replay if the game is lost
function replay(){

}

//This function will keep and record score while the game progresses
function keepScore(){

}

let previousTimeStamp = 0

//This one was interesting to read about, this is the game loop I made using window.requestAnimationFrame
const mainGame = (timeStamp) =>{ 
    window.requestAnimationFrame(mainGame)
    const timepassed = (timeStamp - previousTimeStamp)/1000
    if(timepassed <1/4) return //sets the speed at which screen refreshes/FPS
    previousTimeStamp = timeStamp
//-----------------------------------------------------------

//code goes in between here

updateSnakeHead();//at least we know it works lol
drawSnakeHead();
drawSnakeBody(); //will need to make function so that if food is found, snakebody[] length increases
updateSnakeBody();
document.addEventListener("keydown", changeDirection)


    
//------------------------------------------------------------
    // console.log(timepassed)//simply logs timepassed/ was a test that the game loop works
}

window.requestAnimationFrame(mainGame)


//Time to make a function which adds segments to the snake

