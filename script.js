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


const controlDisplay = (function() {
    let turnToPlay = true;

    const allSquares = document.querySelectorAll('.box')

    allSquares.forEach(square => {
        square.addEventListener('click', () => {
            if(turnToPlay) {
            square.textContent = gameBoardModule.gameBoard[0].marker
            turnToPlay = false;

            }else{
                turnToPlay = true;
                square.textContent = gameBoardModule.gameBoard[1].marker
               
            }
            
        })
    })

})();

const controlGame = (function() {

})();
