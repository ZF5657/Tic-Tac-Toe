const addPlayer = (name, letter) => {
    return {
        name,
        letter
    }
};
  
//Form creates players and if names are left blank, will make names "Player 1" and "Player 2" by default.
//Will start the game upon clicking submit and hide the form in place of a game display
document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();
    player1 = addPlayer(document.querySelector('#player1Name').value, 'X');
    if (player1.name === '') {
        player1.name = 'Player 1'
    }
    player2 = addPlayer(document.querySelector('#player2Name').value, 'O');
    if (player2.name === '') {
        player2.name = 'Player 2'
    }
    console.log(player1.name)
    console.log(player1.letter)
    console.log(player2.name)
    console.log(player2.letter)
    document.querySelector('.board').style = ('display: grid;')
    document.querySelector('.footer').style = ('display: flex;')
    document.querySelector('.nameInput').style = ('display: none;')
    document.querySelector('.liveDisplay').textContent = `${player1.name}'s turn`;
    document.querySelector('.liveDisplay').style = ('font-size: 2em;');
    playGame()
});
  
const gameGrid = ['', '', '', '', '', '', '', '', ''];
  
let currentPlayer = '';
let playerTurn = 1;
let gameOver = false;
  
//Function to take turns switching from player 1 to player 2, starting with player 1. Display div displays whose turn it is once the current player has just taken a turn.
const takeTurns = () => {
    if (playerTurn === 1) {
        currentPlayer = player1.letter;
        document.querySelector('.liveDisplay').textContent = `${player2.name}'s turn`;
        playerTurn = 0;
    } else if (playerTurn === 0) {
        currentPlayer = player2.letter;
        document.querySelector('.liveDisplay').textContent = `${player1.name}'s turn`;
        playerTurn = 1;
    } else {
        return;
    }
};

//Checks for a winning combo and which player won
const determineWinner = () => {
    const winningCombos = [
        {combo: [1, 2, 3]},
        {combo: [4, 5, 6]},
        {combo: [7, 8, 9]},
        {combo: [1, 4, 7]},
        {combo: [2, 5, 8]},
        {combo: [3, 6, 9]},
        {combo: [1, 5, 9]},
        {combo: [3, 5, 7]}
    ];

    //Checks if a winning combo contains 3 matching letters then displays who won based on letter
    for (const winningCombo of winningCombos) {
        const {combo} = winningCombo;
        const squareValue1 = gameGrid[combo[0] - 1];
        const squareValue2 = gameGrid[combo[1] - 1];
        const squareValue3 = gameGrid[combo[2] - 1];

        const player1WinDisplay = () => {
            console.log(`${player1.name} wins!`);
            console.log('Game Over');
            gameOver = true;
            document.querySelector('.liveDisplay').textContent = `${player1.name} wins!`;
            return null;
        };
          
        const player2WinDisplay = () => {
            console.log(`${player2.name} wins!`);
            console.log('Game Over');
            gameOver = true;
            document.querySelector('.liveDisplay').textContent = `${player2.name} wins!`;
            return null;
        };
        
        const drawDisplay = () => {
            console.log(`It's a draw.`);
            console.log('Game Over');
            gameOver = true;
            document.querySelector('.liveDisplay').textContent = `It's a Draw.`;
            return null;
        };

        //Variable for a full board
        const checkFullBoard = gameGrid.every((square) => square != '');

        //Checks if a combo of tiles equals the same value and what to display based on the letter value
        if (squareValue1 !== '' && squareValue1 === squareValue2 && squareValue1 === squareValue3) {
            if (squareValue1 && squareValue2 && squareValue3 === 'X') {
                player1WinDisplay();
                
            } else {
                player2WinDisplay();
            }
            //Checks if there is a full board when there is a winning combo
            if (checkFullBoard) {
                if (squareValue1 && squareValue2 && squareValue3 === 'X') {
                    player1WinDisplay();
                    return null;  
                } else {
                    player2WinDisplay();
                    return null;
                }
            }
        //Checks if there is just a full board and no winning combos
        } else if (checkFullBoard) {
            drawDisplay();
        }
    }
};
  
const playGame = () => {
    let squares = document.querySelectorAll('.square');
    
    squares.forEach ((square, index) => {
        square.addEventListener('click', () => {
        //Locks in div display and array if div has been clicked; prevents takeTurns and turn display from changing if clicking on filled square
            if (gameOver || square.textContent != '') {
                return;
            } else {
                takeTurns();
                gameGrid[index] = currentPlayer;
                square.textContent = currentPlayer;
                determineWinner();
                console.log(gameGrid);
                //Function for restarting the game with the same players
                document.querySelector('.restart').addEventListener('click', () => {
                    gameGrid[index] = '';
                    gameOver = false;
                    square.textContent = '';
                    document.querySelector('.liveDisplay').textContent = `${player1.name}'s turn`;
                    playerTurn = 1;
                })
                //Function for resetting the game and player names
                document.querySelector('.reset').addEventListener('click', () => {
                    gameGrid[index] = '';
                    gameOver = false;
                    square.textContent = '';
                    playerTurn = 1;
                    document.querySelector('.board').style = ('display: none;')
                    document.querySelector('.footer').style = ('display: none;')
                    document.querySelector('.nameInput').style = ('display: flex;')
                    document.querySelector('.liveDisplay').textContent = '';
                    document.querySelector('#player1Name').value = '';
                    document.querySelector('#player2Name').value = '';
                })
            }
        })
    })
};