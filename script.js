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
    
    const checkWin = function() {
        
        if(allSquares[0].textContent === 'X' && allSquares[1].textContent ==='X' && allSquares[2].textContent === 'X' || allSquares[0].textContent === 'O' && allSquares[1].textContent === 'O' && allSquares[2].textContent === 'O') {
           display.textContent = `${allSquares[1].textContent} wins`
           allSquares.forEach(square => {
            square.style.pointerEvents = 'none'
            return;
           })
          
        }else if(allSquares[3].textContent === 'X' && allSquares[4].textContent === 'X' && allSquares[5].textContent === 'X' || allSquares[3].textContent === 'O' && allSquares[4].textContent === 'O' && allSquares[5].textContent === 'O'){
            display.textContent = `${allSquares[3].textContent} wins`
            allSquares.forEach(square => {
             square.style.pointerEvents = 'none'
             return;
            }) 

        }else if(allSquares[6].textContent === 'X' && allSquares[7].textContent === 'X' && allSquares[8].textContent === 'X' || allSquares[6].textContent === 'O' && allSquares[7].textContent === 'O' && allSquares[8].textContent === 'O'){
            display.textContent = `${allSquares[6].textContent} wins`
            allSquares.forEach(square => {
             square.style.pointerEvents = 'none'
             return;
            }) 

        }else if(allSquares[0].textContent === 'X' && allSquares[3].textContent === 'X' && allSquares[6].textContent === 'X' || allSquares[0].textContent === 'O' && allSquares[3].textContent === 'O' && allSquares[6].textContent === 'O'){
            display.textContent = `${allSquares[0].textContent} wins`
            allSquares.forEach(square => {
             square.style.pointerEvents = 'none'
             return;
            })

        }else if(allSquares[1].textContent === 'X' && allSquares[4].textContent === 'X' && allSquares[7].textContent === 'X' || allSquares[1].textContent === 'O' && allSquares[4].textContent === 'O' && allSquares[7].textContent === 'O'){
            display.textContent = `${allSquares[1].textContent} wins`
            allSquares.forEach(square => {
             square.style.pointerEvents = 'none'
             return;
            })

        } else if(allSquares[2].textContent === 'X' && allSquares[5].textContent === 'X' && allSquares[8].textContent === 'X' || allSquares[2].textContent === 'O' && allSquares[5].textContent === 'O' && allSquares[8].textContent === 'O') {
            display.textContent = `${allSquares[2].textContent} wins`
            allSquares.forEach(square => {
             square.style.pointerEvents = 'none'
             return;
            })

        } else if(allSquares[0].textContent === 'X' && allSquares[4].textContent === 'X' && allSquares[8].textContent === 'X' || allSquares[0].textContent === 'O' && allSquares[4].textContent === 'O' && allSquares[8].textContent === 'O') {
            display.textContent = `${allSquares[0].textContent} wins`
            allSquares.forEach(square => {
             square.style.pointerEvents = 'none'
             return;
            })
        }else if(allSquares[2].textContent === 'X' && allSquares[4].textContent === 'X' && allSquares[6].textContent === 'X' || allSquares[2].textContent === 'O' && allSquares[4].textContent === 'O' && allSquares[6].textContent === 'O') {
            display.textContent = `${allSquares[2].textContent} wins`
            allSquares.forEach(square => {
             square.style.pointerEvents = 'none'
             return;
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

        square.addEventListener('click', function() {
    
            if(square.textContent !== "") return
            if(turnToPlay) {
            square.textContent = gameBoardModule.gameBoard[0].marker
            display.textContent = `is ${gameBoardModule.gameBoard[1].marker}'s turn to play`   
            turnToPlay = false;
            controlGame.checkWin()
            refreshBoard()    
            
            }else{ 
                square.textContent = gameBoardModule.gameBoard[1].marker
                display.textContent = `is ${gameBoardModule.gameBoard[0].marker}'s turn to play`   
                turnToPlay = true;
                controlGame.checkWin()
                refreshBoard()
                
            }
                    
           })  
        })

    const refresh = function() {
        allSquares.forEach(square => {
        square.textContent = ''
        allSquares.forEach((square) => {
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




