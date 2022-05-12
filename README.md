# Snake

<p align="center">
  <img src="./styles/images/howItTurnedOut.png" alt="Snake Demo">
</p>

### Hello, this is my vanilla javascript game. When deciding on a game to make with HTML, CSS, and JS, I realised that for nostalgic purposes, it had to be 'snake' XD. As always, my aim is to create a functional yet aesthetic experience for players!

## Description

This is a game where you control a snake and try to eat food. The snake is controlled by the arrow keys. Whenever it eats food, the snake will grow by one segment, and the food will generate randomly on another coordinate of the map.

However, this game of snake has a twist because whenever the snake eats food, it will also become faster, and when coupled with a longer snake, increases the games difficulty. This game will end whenever the snake hits the wall or itself :( but you can always try again!

---

<p align="center">
  <img src="./styles/images/snakeGif.gif" alt="Snake game gif">
</p>

---

| Table of Contents               |
| ------------------------------- |
| [User Story](#UserStory)        |
| [Functionality](#Functionality) |
| [Technology](#Technology)       |
| [License](#License)             |
| [Contributors](#Contributors)   |
| [Links](#Links)                 |

---

## User Story

-   **As a player I would like to play Snake because I'm feeling nostalgic**
-   Given when I first launch the game, a snake with a single segment should be stationary on the arena.
-   When I press the arrow keys, the snake should move in the direction of the arrow key.
-   When I change the direction of the snake, the snake should move in the new direction, otherwise continue moving in the same direction.
-   Given that I make the snake eat a tic-tac, the snake should grow by one segment.
-   When the snake eats a tic-tac, my score should increase by 10.
-   When the snake eats a tic-tac, the snake should become faster.
-   When the snake eats a tic-tac, the tic-tac should spawn randomly on the arena but not on the snake.
-   When the snake hits the wall or it's own body, the game should end with an option to restart the game.

## Functionality

This game works by drawing a snake and a tictac upon an arena at specific coordinates. This is possible because the arena is made into a grid by CSS. The coordinates of each item within this arena are determined by a respective 'coordinate' object which manipulates the x-coordinate (gridColumnStart) and x coordinate(gridRowStart) of its respective div within the arena.

Since this game of snake relies on keypress events (specifically of the arrow keys), a function called changeDirection, uses an event listener for a key press, along with a switch case to change the travel direction if certain conditions are met.

```js
// Object which sets the travel direction for the head of the snake (initially 0 when the app loads)
const travelDirection = { x: 0, y: 0 };

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
```

The most important part of snake, is the ability of the snake to grow when it consumes its food! I was able to achieve this by creating a snakebody array of segments(divs), manipulating the x coordinate and y coordinates (gridColumnStart & gridRowStart) of each via a for loop, and then appending it to the arena, when the snake head had the same 'coordinates' as the tictac.

The tictac, was then assigned to another random location not in contact with the snake, using a combination of Math.floor, Math.random, and a trusty while() loop.

It is important to note that constant updating of the snake's position and body, was achieved through defining a game function which called window.requestAnimationFrame(), and then calling window.requestAnimationFrame() with the game function as a callback parameter, in order to loop.

-There is more info in the main.js file!

## Technology

-   JavaScript
-   HTML
-   SASS
-   Mobile First Design
-   Responsive Design
-   [Figma (for prototype design)](https://www.figma.com/file/CJqVFn4djOuKkD7TCPefoV/Allan's-JS-Snake-Game?node-id=0%3A1)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Future Developments

-   Planned on screen buttons for mobile users
-   Improved responsivity, and ratio for arena for smaller screens
-   Sound to be played when snake consumes food!
-   Refactoring of code, for readability and reusability

## Contributions

This was a solo project :)

## Links

#### Github Repo

https://github.com/A11AN0/Snake

#### Deployed App

https://a11an0.github.io/Snake/

#### Thanks for reading!-Allan :)
