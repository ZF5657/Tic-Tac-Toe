const addPlayer = (name, letter) => {
    return {name, letter};
}

//Form creates players and if names are left blank, will make names "Player 1" and "Player 2" by default.
//Will start the game upon clicking submit and hide the form in place of a game display
document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();
    player1 = addPlayer(document.querySelector('#player1Name').value, 'X');
    if(player1.name == '') {
        player1.name = 'Player 1'
    }
    player2 = addPlayer(document.querySelector('#player2Name').value, 'O');
    if(player2.name == '') {
        player2.name = 'Player 2'
    }
    console.log(player1.name)
    console.log(player1.letter)
    console.log(player2.name)
    console.log(player2.letter)
    document.querySelector('.board').style = ('display: flex;')
    document.querySelector('.nameInput').style = ('display: none;')
    document.querySelector('.display').textContent = `${player1.name}'s turn`;
    document.querySelector('.display').style = ('font-size: 2em;');
    playGame();
})

const playGame = () => {
    const gameGrid = [
        '', '', '', 
        '', '', '', 
        '', '', ''
    ];


    // let squares = document.querySelectorAll('.square');
    // const a1 = document.querySelector('#a1');
    // const a2 = document.querySelector('#a2');
    // const a3 = document.querySelector('#a3');
    // const b1 = document.querySelector('#b1');
    // const b2 = document.querySelector('#b2');
    // const b3 = document.querySelector('#b3');
    // const c1 = document.querySelector('#c1');
    // const c2 = document.querySelector('#c2');
    // const c3 = document.querySelector('#c3');

    let currentPlayer = '';
    let playerTurn = 1;
    let gameOver = false;

    //Function to take turns switching from player 1 to player 2, starting with player 1. Display div displays whose turn it is once the current player has just taken a turn.
    const takeTurns = () => {
        if(playerTurn === 1) {
            currentPlayer = player1.letter;
            document.querySelector('.display').textContent = `${player2.name}'s turn`;
            playerTurn = 0;
        } else if(playerTurn === 0) {
            currentPlayer = player2.letter;
            document.querySelector('.display').textContent = `${player1.name}'s turn`;
            playerTurn = 1;
        } else {
            return;
        }
    }

    const addLetter = () => {
        let squares = document.querySelectorAll('.square');
        squares.forEach((square) => {

            const a1 = document.querySelector('#a1');
            const a2 = document.querySelector('#a2');
            const a3 = document.querySelector('#a3');
            const b1 = document.querySelector('#b1');
            const b2 = document.querySelector('#b2');
            const b3 = document.querySelector('#b3');
            const c1 = document.querySelector('#c1');
            const c2 = document.querySelector('#c2');
            const c3 = document.querySelector('#c3');

            const determineWinner = () => {
                if(gameGrid[0] != '' && gameGrid[0] == gameGrid[1] && gameGrid[2]) {
                    console.log('game over')
                    gameOver = true;
                    return null
                } else if(gameGrid[3] != '' && gameGrid[3] == gameGrid[4] && gameGrid[5]) {
                    console.log('game over')
                    gameOver = true;
                    return null
                } else if(gameGrid[6] != '' && gameGrid[6] == gameGrid[7] && gameGrid[8]) {
                    console.log('game over')
                    gameOver = true;
                    return null
                } else if(gameGrid[0] != '' && gameGrid[0] == gameGrid[3] && gameGrid[6]) {
                    console.log('game over')
                    gameOver = true;
                    return null
                } else if(gameGrid[1] != '' && gameGrid[1] == gameGrid[4] && gameGrid[7]) {
                    console.log('game over')
                    gameOver = true;
                    return null
                } else if(gameGrid[2] != '' && gameGrid[2] == gameGrid[5] && gameGrid[8]) {
                    console.log('game over')
                    gameOver = true;
                    return null
                } else if(gameGrid[0] != '' && gameGrid[0] == gameGrid[4] && gameGrid[8]) {
                    console.log('game over')
                    gameOver = true;
                    return null
                } else if(gameGrid[6] != '' && gameGrid[6] == gameGrid[4] && gameGrid[2]) {
                    console.log('game over')
                    gameOver = true;
                    return null
                }
            }

            square.addEventListener('click', () => {
                determineWinner()
                //Locks in div display and array if div has been clicked; prevents takeTurns and turn display from changing if clicking on filled square
                if(square.textContent != '') {
                    return
                } else if(square.textContent == '' && gameOver == false) {
                    takeTurns()
                    if(square == a1) {
                        gameGrid[0] = currentPlayer;
                        a1.textContent = currentPlayer;

                    } else if(square == b1) {
                        gameGrid[1] = currentPlayer;
                        b1.textContent = currentPlayer;

                    } else if(square == c1) {
                        gameGrid[2] = currentPlayer;
                        c1.textContent = currentPlayer;

                    } else if(square == a2) {
                        gameGrid[3] = currentPlayer;
                        a2.textContent = currentPlayer;

                    } else if(square == b2) {
                        gameGrid[4] = currentPlayer;
                        b2.textContent = currentPlayer;

                    } else if(square == c2) {
                        gameGrid[5] = currentPlayer;
                        c2.textContent = currentPlayer;

                    } else if(square == a3) {
                        gameGrid[6] = currentPlayer;
                        a3.textContent = currentPlayer;

                    } else if(square == b3) {
                        gameGrid[7] = currentPlayer;
                        b3.textContent = currentPlayer;

                    } else if(square == c3) {
                        gameGrid[8] = currentPlayer;
                        c3.textContent = currentPlayer;

                    }
                    console.log(gameGrid);
                } else {
                    return null
                }
            })

        })
    }
    addLetter()
}