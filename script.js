const addPlayer = (name, letter) => {
    return {name, letter};
}

const player1 = addPlayer("Bob", 'X');
const player2 = addPlayer("Jack", 'O');

let currentPlayer = '';
let playerTurn = 1;

console.log({name: player1.name, playerLetter: player1.letter});
console.log({name: player2.name, playerLetter: player2.letter});


const playGame = () => {
    const gameGrid = [
        '', '', '', 
        '', '', '', 
        '', '', ''
    ];

    // const hor1 =  gameGrid[0, 1, 2];
    // const hor2 =  gameGrid[3, 4, 5];
    // const hor3 =  gameGrid[6, 7, 8];
    // const vert1 =  gameGrid[0, 3, 6];
    // const vert2 =  gameGrid[1, 4, 7];
    // const vert3 =  gameGrid[2, 5, 8];
    // const diag1 =  gameGrid[0, 4, 8];
    // const diag2 =  gameGrid[2, 4, 6];

    // const winningCombo = {hor1, hor2, hor3, vert1, vert2, vert3, diag1, diag2};

    let squares = document.querySelectorAll('.square');
    const a1 = document.querySelector('#a1');
    const a2 = document.querySelector('#a2');
    const a3 = document.querySelector('#a3');
    const b1 = document.querySelector('#b1');
    const b2 = document.querySelector('#b2');
    const b3 = document.querySelector('#b3');
    const c1 = document.querySelector('#c1');
    const c2 = document.querySelector('#c2');
    const c3 = document.querySelector('#c3');

    const takeTurns = () => {
        if(playerTurn === 1) {
            currentPlayer = player1.letter;
            playerTurn = 0;
        } else if(playerTurn === 0) {
            currentPlayer = player2.letter;
            playerTurn = 1;
        // } else if(gameGrid[0] && gameGrid[1] && gameGrid[2] && gameGrid[3] && gameGrid[4] && gameGrid[5] && gameGrid[6] && gameGrid[7] && gameGrid[8]) {
        //     console.log('Game Over!')
        //     return null;
        } else {
            return null;
        }
    }

    const addLetter = () => {
        squares.forEach((square) => {
            square.addEventListener('click', () => {
                console.log(playerTurn)
                takeTurns();
                if(square == a1) {
                    gameGrid[0] = currentPlayer;
                    console.log(gameGrid[0]);
                } else if(square == b1) {
                    gameGrid[1] = currentPlayer;
                    console.log(gameGrid[1]);
                } else if(square == c1) {
                    gameGrid[2] = currentPlayer;
                    console.log(gameGrid[2]);
                } else if(square == a2) {
                    gameGrid[3] = currentPlayer;
                    console.log(gameGrid[3]);
                } else if(square == b2) {
                    gameGrid[4] = currentPlayer;
                    console.log(gameGrid[4]);
                } else if(square == c2) {
                    gameGrid[5] = currentPlayer;
                    console.log(gameGrid[5]);
                } else if(square == a3) {
                    gameGrid[6] = currentPlayer;
                    console.log(gameGrid[6]);
                } else if(square == b3) {
                    gameGrid[7] = currentPlayer;
                    console.log(gameGrid[7]);
                } else if(square == c3) {
                    gameGrid[8] = currentPlayer;
                    console.log(gameGrid[8]);
                } else {
                    return null;
                }
                // console.log(currentPlayer)
                console.log(gameGrid)
            })
        })
    }
    addLetter()
}

playGame();