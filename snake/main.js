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
const ticTac = document.querySelector(".ticTac")
const snakeGrowth = 7
const headCoordinates = {x: 10, y:10} // Object which sets the starting coordinates for the head of the snake
const ticTacCoordinates = {x: 14, y:14}// An object which contains the x and y coordinates of the tictac
const travelDirection = {x:0, y:0} // Object which sets the travel direction for the head of the snake
const snakeBody = [] // Array for the body of the snake



//This is a function which draws the head of my snake // although since it's already in arena div, might come back and remove this function (probs not tho)
function drawSnakeHead(){
    snakeHead.style.backgroundColor = "green"
    snakeHead.style.gridColumnStart = headCoordinates.x
    snakeHead.style.gridRowStart = headCoordinates.y
}


/*This function updates the coordinates of the snakeHead {headCoordinates}, based on the travel directions, given
by the function changeDirection()*/
function updateSnakeHead(){
    headCoordinates.x += travelDirection.x;
    headCoordinates.y += travelDirection.y;
    snakeBody[0] = snakeHead
}



//This is the function which will draw the body of my snake
function drawSnakeBody(){
    if(snakeBody.length<snakeGrowth){ // sets number of segments on snake (number of segments = value)
    const section = document.createElement("div");
    section.style.backgroundColor = "red"
    section.style.gridColumnStart = headCoordinates.x 
    section.style.gridRowStart = headCoordinates.y
    arena.appendChild(section);
    snakeBody.push(section);
    }
} 

//This is the function which will update the body of the snake
function updateSnakeBody(){
    for(var i=snakeBody.length-1; i>= 1; i--){ //i=0, is like a type of train  carriage hence why i>=1
        snakeBody[i].style.gridColumnStart = snakeBody[i-1].style.gridColumnStart
        snakeBody[i].style.gridRowStart = snakeBody[i-1].style.gridRowStart // at least we have 1 lol
    }    
}

//This is the function which will draw the food on the board
function drawTicTac(){
    //will change so that it draws somewhere random
    ticTac.style.gridColumnStart = ticTacCoordinates.x
    ticTac.style.gridRowStart = ticTacCoordinates.y
    ticTac.style.visibility = "visible";
    ticTac.style.backgroundColor = "yellow";
}

//This is the function which will update the position of the food on the board between 0 and the board width, hence why the +1 makes it in between 1-21 for the x/y coordinates
function updateTicTac(){

    if(headCoordinates.x === ticTacCoordinates.x && headCoordinates.y === ticTacCoordinates.y){
        ticTacCoordinates.x = Math.floor(Math.random() * 20) + 1
        ticTacCoordinates.y = Math.floor(Math.random() * 20) + 1
        ticTac.style.visibility = "hidden";
        console.log(true)
    } 

    //if headCoordinates.x
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

//This one was interesting to read online about, this is the game loop I made using window.requestAnimationFrame
const mainGame = (timeStamp) =>{ 
    window.requestAnimationFrame(mainGame)
    const timepassed = (timeStamp - previousTimeStamp)/1000
    if(timepassed <1/10) return //sets the speed at which screen refreshes/FPS
    previousTimeStamp = timeStamp

//---------------------//Code for item movemement goes in between here//--------------------------------------


updateSnakeHead();//at least we know it works lol
drawSnakeHead();
drawTicTac();
updateTicTac();
updateSnakeBody();//slightly more responsive/quicker like this
drawSnakeBody(); //will need to make function so that if food is found, snakebody[] length increases

document.addEventListener("keydown", changeDirection)


    
//------------------------------------------------------------
    // console.log(timepassed)//simply logs timepassed/ was a test that the game loop works
}

window.requestAnimationFrame(mainGame)


