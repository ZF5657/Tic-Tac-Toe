This is the Tic Tac Toe project from the Odin Project. The goal of this project is to create a tic tac toe game with the following criteria:


* Use as little global code as possible and tuck away as much code as possible into factories.

* Write the functions that allow players to add marks to a specific spot on the board by interacting with the appropriate DOM elements (e.g. letting players click on a board square to place their marker).

* Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that shows the results upon game end.



***My Project:***

* **Design**

This project was trickier than other projects I have started. I had trouble trying to decide where and how to start. I decided to start with a factory function that creates players and simply assigns 'X' or 'O' depending on wheather the name was submitted in the Player 1 box or Player 2 box of the form. Then, I created the board in console, added clicking an 'X' into the grid and have the console display it, then built out the game from there. I initially wanted the letters of the winning 3 boxes to turn colors but I liked the idea of adding in a line, so that is what I went with. I also think most pages should be in dark mode since it is much easier on the eyes.

* **Challenges**

* The biggest challenge of this was getting the forEach loop to display and update the winner or draw. The game itself worked, but I had to make an extra click into one of the squares to update the game-end results. I solved this problem by calling determineWinner() after the game is updated with a click. I had the placement wrong.

* Another challenge was trimming my code and rewriting in a way that was efficient and succinct. I was able to significantly reduce determineWinner() by properly writing one conditional based on the winning square values instead of specific squares and many if-statements. This way, I was also able to add in a strikethrough line for the winning combination.

* A small issue remained -  upon filling all squares but one, and the last empty square was a winning combination, the game would call it a draw instead of a win. To resolve this, I added an additional conditional statement checking for winning combinations when the board was full.