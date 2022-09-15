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

const controlGame = (function() {
    const allSquares = Array.from(document.querySelectorAll('.box'))
    let display = document.querySelector('.display');
   
    function checkWin() {                       
        if(allSquares[0].textContent == 'X' && allSquares[1].textContent == 'X' && allSquares[2].textContent == 'X') {
           display.textContent = `${allSquares[0].textContent} wins`
           document.querySelectorAll(".box").forEach((square) => {
           square.classList.add('disable')           

        })
     }
       
    }
    return{checkWin}

})();

const controlDisplay = (function() {
    let turnToPlay = true;
    let isOver = false;
    const allSquares = Array.from(document.querySelectorAll('.box'))
    let display = document.querySelector('.display');
    
        allSquares.forEach(square => {  

            square.addEventListener('click', addMark)
        

        function addMark() {
            if(square.textContent !== "") return
            if(turnToPlay) {
            square.textContent = gameBoardModule.gameBoard[0].marker
            display.textContent = `is ${gameBoardModule.gameBoard[1].marker}'s turn to play`
            turnToPlay = false;
           controlGame.checkWin()
            

            }else{
                turnToPlay = true;
                square.textContent = gameBoardModule.gameBoard[1].marker
                display.textContent = `is ${gameBoardModule.gameBoard[0].marker}'s turn to play`
              controlGame.checkWin()
            }
        }
            controlGame.checkWin()
            
        })  

        const refresh = function() {
            allSquares.forEach(square => {
            square.textContent = ''
            document.querySelectorAll(".box").forEach((square) => {
                square.classList.remove('disable')
            })      
          })   
        }

        const refreshBoard = function() {
           const button = document.querySelector('button')
           button.addEventListener('click', refresh);
        }      
        refreshBoard()

    return{display,
        allSquares
           
          }
        
})();




