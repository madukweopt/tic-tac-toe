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
    let display = document.querySelector('.display');
    allSquares.forEach(square => {
        
        square.addEventListener('click', () => {
            if(square.textContent !== "") return
            if(turnToPlay) {
            square.textContent = gameBoardModule.gameBoard[0].marker
            display.textContent = `is ${gameBoardModule.gameBoard[1].marker}'s turn to play`
            turnToPlay = false;

            }else{
                turnToPlay = true;
                square.textContent = gameBoardModule.gameBoard[1].marker
                display.textContent = `is ${gameBoardModule.gameBoard[0].marker}'s turn to play`
               
            }          
        })  
    })
    
    const refresh = function() {
        allSquares.forEach(square => {
            square.textContent = ''
        })   
    }

    const refreshBoard = function() {
        const button = document.querySelector('button')
        button.addEventListener('click', refresh);
    }
    refreshBoard()
})();

const controlGame = (function() {

})();
