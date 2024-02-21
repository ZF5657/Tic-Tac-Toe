const addPlayer = (name, letter) => {
    return {name, letter};
}

const player1 = addPlayer("Bob", 'X');
const player2 = addPlayer("Jack", 'O');

console.log({name: player1.name, playerLetter: player1.letter});
console.log({name: player2.name, playerLetter: player2.letter});

const gameboard = () => {
    let a1 = '';
    let a2 = '';
    let a3 = '';
    let b1 = '';
    let b2 = '';
    let b3 = '';
    let c1 = '';
    let c2 = '';
    let c3 = '';
    const diagLine1 = {a1, b2, c3};
    const diagLine2 = {a3, b2, c1};
    const horLine1 = {a1, b1, c1};
    const horLine2 = {a2, b2, c2};
    const horLine3 = {a3, b3, c3};
    const vertLine1 = {a1, a2, a3};
    const vertLine2 = {b1, b2, b3};
    const vertLine3 = {c1, c2, c3};
    let gameGrid = [
        a1, b1, c1, 
        a2, b2, c2, 
        a3, b3, c3
    ];
    return {gameGrid, diagLine1, diagLine2, diagLine3, horLine1, horLine2, horLine3, vertLine1, vertLine2, vertLine3};
}

const playGame = () => {
    
}