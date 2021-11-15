# Vanilla Javascript Snake 

Hello, this is my vanilla javascript game. When deciding on a game to make with  **HTML, CSS, and JS**, I realised that for nostalgic purposes, it had to be 'snake' XD. As always, my aim is to create a functional yet aesthetic experience for players!


## Prototype Game design using Figma
https://www.figma.com/file/CJqVFn4djOuKkD7TCPefoV/Allan's-JS-Snake-Game?node-id=0%3A1
![Figma Desktop Prototype](images/figmaDesktopSnake.png)

## Final Appearance of Game
![Final Game](images/howItTurnedOut.png)


## More about this project
This game works by drawing a snake and a tictac upon an arena at specific coordinates. This is possible because the arena is made into a grid by CSS. The coordinates of each item within this arena are determined by a respective 'coordinate' object which manipulates the x-coordinate (gridColumnStart) and x coordinate(gridRowStart) of its respective div within the arena.

Since this game of snake relies on keypress events (specifically of the arrow keys), a function called changeDirection, uses an event listener for a key press, along with a switch case to change the travel direction if certain conditions are met.

The most important part of snake, is the ability of the snake to grow when it consumes its food! I was able to achieve this by creating a snakebody array of segments(divs), manipulating the x coordinate and y coordinates (gridColumnStart & gridRowStart) of each via a for loop, and then appending it to the arena, when the snake head had the same 'coordinates' as the tictac.

The tictac, was then assigned to another random location not in contact with the snake, using a combination of Math.floor, Math.random, and a trusty while() loop.

It is important to note that constant updating of the snake's position and body, was achieved through defining a game function which called window.requestAnimationFrame(), and then calling window.requestAnimationFrame() with the game function as a callback parameter, in order to loop.

-There is more info in the main.js file!

## Future Improvements & Planned Bug Fixes
- Planned on screen buttons for mobile users
- Improved responsivity, and ratio for arena for smaller screens
- Sound to be played when snake consumes food!
- Refactoring of code, for readability and reusability
 

#### Thanks for reading!-Allan :)
