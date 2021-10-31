//1. Since it's probably going to be referenced alot, set a constant name for the arena
const arena = document.querySelector(".arena")

//2. Draw the snake on the board, and set the position using given x/y parameters
//Probably preferrable to use an object for this..
const drawSnakeHead = (xCoord, yCoord) =>{
    const head = document.createElement("div");
    head.style.gridColumnStart = xCoord
    head.style.gridRowStart = yCoord
    head.style.backgroundColor = "green"
    arena.appendChild(head);   
}

drawSnakeHead(5, 7);

//3. A function that will log the arrow keys pressed
