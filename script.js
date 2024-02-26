const addPlayer = (name, letter) => {
    return {name, letter};
}

const player1 = addPlayer("Bob", 'X');
const player2 = addPlayer("Jack", 'O');

console.log({name: player1.name, playerLetter: player1.letter});
console.log({name: player2.name, playerLetter: player2.letter});

const gameBoard = () => {
    let a1 = '';
    let a2 = '';
    let a3 = '';
    let b1 = '';
    let b2 = '';
    let b3 = '';
    let c1 = '';
    let c2 = '';
    let c3 = '';
    const gameGrid = [
        a1, b1, c1, 
        a2, b2, c2, 
        a3, b3, c3
    ];
    return {gameGrid};
}

const playGame = () => {
    
}

gameBoard();