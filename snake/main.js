// function which when given an event, (a keydown/keypress), changes the travel direction {} 

const changeDirection = (event)=>{
    const keyPressed = event.key
    switch(keyPressed){
        case "ArrowUp":
            travelDirection.y = -1
            travelDirection.x = 0
            break;
        case "ArrowDown":
            travelDirection.y = 1
            travelDirection.x = 0
            break;
        case "ArrowLeft":
            travelDirection.y = 0
            travelDirection.x = -1
            break;
        case "ArrowRight":
            travelDirection.y = 0
            travelDirection.x = 1
            break;
    }
}






const arena = document.querySelector(".arena");
const snakeHead = document.querySelector(".snakeHead");
var headCoordinates = {x: 10, y:10} // Object which sets the starting coordinates for the head of the snake
var travelDirection = {x:0, y:0} // Object which sets the travel direction for the head of the snake

function drawSnakeHead(){
    snakeHead.style.backgroundColor = "green"
    snakeHead.style.gridColumnStart = headCoordinates.x
    snakeHead.style.gridRowStart = headCoordinates.y
}
//This is a function which draws the head of my snake

function updateSnakeHead(){
    headCoordinates.x += travelDirection.x;
    headCoordinates.y += travelDirection.y;
}
/*This function updates the coordinates of the snakeHead {headCoordinates}, based on the travel directions, given
by the function changeDirection()*/




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
document.addEventListener("keydown", changeDirection)
















    
//------------------------------------------------------------
    console.log(timepassed)//simply logs timepassed/ was a test that the game loop works
}

window.requestAnimationFrame(mainGame)