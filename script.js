const addPlayer = (name, letter) => {
    return {name, letter};
}

const player1 = addPlayer("Bob", 'X');
const player2 = addPlayer("Jack", 'O');

console.log({name: player1.name, playerLetter: player1.letter});
console.log({name: player2.name, playerLetter: player2.letter});


const playGame = () => {
    const gameGrid = [
        '', '', '', 
        '', '', '', 
        '', '', ''
    ];

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
    
    squares.forEach((square) => {
        square.addEventListener('click', () => {
            if(square == a1) {
                console.log('a1');
            } else if(square == b1) {
                console.log('b1');
            } else if(square == c1) {
                console.log('c1');
            } else if(square == a2) {
                console.log('a2');
            } else if(square == b2) {
                console.log('b2');
            } else if(square == c2) {
                console.log('c2');
            } else if(square == a3) {
                console.log('a3');
            } else if(square == b3) {
                console.log('b3');
            } else if(square == c3) {
                console.log('c3');
            } else {
                return
            }
        })
    })
}

playGame();