//remember to commit
const player = (name, marker) => {

    return {
    name,
    marker,
    }

};

const gameBoardModule = (function() {
    
    let player1 = player('name', 'X');
    let player2 = player('name', 'O');

    let gameBoard = [];

    gameBoard.push(player1, player2)
    return {gameBoard}
})();


